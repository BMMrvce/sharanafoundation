import { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import type { PDFPageProxy } from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export function PdfPageViewer({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    let page: PDFPageProxy | null = null;
    let isRendering = false;
    let pendingRender = false;

    const renderPage = async () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      if (!container || !canvas || !context || !page || cancelled) return;

      if (isRendering) {
        pendingRender = true;
        return;
      }
      isRendering = true;

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

    const load = async () => {
      const pdf = await pdfjsLib.getDocument(src).promise;
      if (cancelled) return;
      page = await pdf.getPage(1);
      if (cancelled) return;
      renderPage();
    };

    load();

    const observer = new ResizeObserver(() => renderPage());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center bg-white"
      onContextMenu={(e) => e.preventDefault()}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
