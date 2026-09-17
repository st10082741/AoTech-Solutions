// Language: TypeScript Declaration File
// Purpose: Provides TypeScript definitions for Vite environment variables.

/// <reference types="vite/client" />

/**
 * Lists the custom environment variables used by the AoTech website.
 */
interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ENDPOINT: string;
}

/**
 * Extends import.meta with Vite's typed environment variables.
 */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
