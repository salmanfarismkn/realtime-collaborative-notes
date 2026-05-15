import { useEffect } from 'react';

/** Syncs the browser tab title with the current page or note title. */
export function useDocumentTitle(title, suffix = 'CollabNotes') {
  useEffect(() => {
    document.title = title ? `${title} · ${suffix}` : suffix;
    return () => {
      document.title = suffix;
    };
  }, [title, suffix]);
}
