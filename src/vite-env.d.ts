/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEETDB_ACTIVITIES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'virtual:live-assets' {
  export const heroImages: string[];
  export const galleryImages: string[];
}
