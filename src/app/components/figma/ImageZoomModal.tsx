import React, { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface Props {
  src: string;
  alt?: string;
  onClose: () => void;
}

export function ImageZoomModal({ src, alt, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setScale((s) => Math.min(4, +(s + 0.25).toFixed(2)));
      if (e.key === '-') setScale((s) => Math.max(1, +(s - 0.25).toFixed(2)));
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    // reset on new src
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, [src]);

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((s) => Math.max(1, Math.min(4, +(s + delta).toFixed(2))));
  }

  function onMouseDown(e: React.MouseEvent) {
    if (scale <= 1) return;
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
  }

  function onMouseUp() {
    dragging.current = false;
  }

  function zoomIn() {
    setScale((s) => Math.min(4, +(s + 0.25).toFixed(2)));
  }

  function zoomOut() {
    setScale((s) => Math.max(1, +(s - 0.25).toFixed(2)));
    setTranslate({ x: 0, y: 0 });
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      onWheel={onWheel}
    >
      <div
        className="relative max-w-[90%] max-h-[90%] bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-30 inline-flex items-center justify-center rounded-full bg-white/90 p-2 shadow"
        >
          <X className="w-4 h-4 text-gray-800" />
        </button>

        <div className="absolute left-3 top-3 z-30 flex gap-2">
          <button
            aria-label="Zoom out"
            onClick={zoomOut}
            className="inline-flex items-center justify-center rounded-full bg-white/90 p-2 shadow"
          >
            <ZoomOut className="w-4 h-4 text-gray-800" />
          </button>
          <button
            aria-label="Zoom in"
            onClick={zoomIn}
            className="inline-flex items-center justify-center rounded-full bg-white/90 p-2 shadow"
          >
            <ZoomIn className="w-4 h-4 text-gray-800" />
          </button>
        </div>

        <div
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="w-full h-full flex items-center justify-center overflow-hidden"
        >
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            draggable={false}
            className="select-none pointer-events-none max-w-full max-h-full"
            style={{ transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)` }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageZoomModal;
