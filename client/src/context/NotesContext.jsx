import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  fetchRecentNotes,
  fetchSharedNotes,
  fetchNoteById,
  fetchCollaborators,
  saveNote,
} from '../services/noteService';

const NotesContext = createContext(null);

/** Centralizes note list and editor state for dashboard and editor pages. */
export function NotesProvider({ children }) {
  const [recent, setRecent] = useState([]);
  const [shared, setShared] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    const [recentData, sharedData] = await Promise.all([
      fetchRecentNotes(),
      fetchSharedNotes(),
    ]);
    setRecent(recentData);
    setShared(sharedData);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const value = useMemo(
    () => ({
      recentNotes: recent,
      sharedNotes: shared,
      loading,
      refreshNotes: loadDashboard,
      fetchNoteById,
      fetchCollaborators,
      saveNote,
    }),
    [recent, shared, loading, loadDashboard],
  );

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) throw new Error('useNotes must be used within NotesProvider');
  return context;
}
