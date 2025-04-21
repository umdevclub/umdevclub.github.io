/// <reference types="vite/client" />

//https://vitejs.dev/guide/env-and-mode
interface ImportMetaEnv {
  // you can add any env that you would like to be exposed and used in your code
  // @example
  // VITE_APP_PORT: 3002
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
