import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { ChevronLeft, ChevronRight } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export function SecurePdfViewer({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const pageRef = useRef<PDFPageProxy | null>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const pdf = await pdfjsLib.getDocument(src).promise;
      if (cancelled) return;
      pdfRef.current = pdf;
      setNumPages(pdf.numPages);
      setPageNum(1);
    };

    load();

    return () => {
      cancelled = true;
      pdfRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    let cancelled = false;
    let isRendering = false;
    let pendingRender = false;

    const renderPage = async () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      const pdf = pdfRef.current;
      if (!container || !canvas || !context || !pdf || cancelled) return;

      if (isRendering) {
        pendingRender = true;
        return;
      }
      isRendering = true;

      const page = await pdf.getPage(pageNum);
      pageRef.current = page;
      if (cancelled) {
        isRendering = false;
        return;
      }

      const baseViewport = page.getViewport({ scale: 1 });
      const scale = Math.min(
        container.clientWidth / baseViewport.width,
        container.clientHeight / baseViewport.height,
      );
      const dpr = window.devicePixelRatio || 1;
      const viewport = page.getViewport({ scale: scale * dpr });

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width / dpr}px`;
      canvas.style.height = `${viewport.height / dpr}px`;

      try {
        await page.render({ canvasContext: context, viewport }).promise;
      } catch {
        // ignored: superseded by a subsequent render
      }

      isRendering = false;
      if (pendingRender && !cancelled) {
        pendingRender = false;
        renderPage();
      }
    };

    renderPage();

    const observer = new ResizeObserver(() => renderPage());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [pageNum, numPages]);

  useEffect(() => {
    const blockKeys = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const isSaveOrPrint = (e.ctrlKey || e.metaKey) && (key === 's' || key === 'p');
      if (isSaveOrPrint || key === 'printscreen') {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('keydown', blockKeys, true);
    return () => window.removeEventListener('keydown', blockKeys, true);
  }, []);

  return (
    <div className="w-full flex-1 min-h-0 flex flex-col select-none">
      <style>{'@media print { .secure-pdf-viewer { display: none !important; } }'}</style>
      <div
        ref={containerRef}
        className="secure-pdf-viewer flex-1 min-h-0 w-full flex items-center justify-center bg-white overflow-hidden"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        <canvas ref={canvasRef} className="pointer-events-none" />
      </div>
      {numPages > 1 ? (
        <div className="flex items-center justify-center gap-4 py-3 bg-gray-50 border-t">
          <button
            onClick={() => setPageNum((p) => Math.max(1, p - 1))}
            disabled={pageNum <= 1}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium text-gray-700">
            Page {pageNum} of {numPages}
          </span>
          <button
            onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
            disabled={pageNum >= numPages}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
