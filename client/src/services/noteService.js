import {
  recentNotes,
  sharedNotes,
  editorNote,
  collaborators,
} from './dummyData';

/**
 * Note service — abstracts data access for future API replacement.
 * All methods return promises to mirror async API behavior.
 */

export async function fetchRecentNotes() {
  return [...recentNotes];
}

export async function fetchSharedNotes() {
  return [...sharedNotes];
}

export async function fetchNoteById(id) {
  const note = id === editorNote.id ? editorNote : recentNotes.find((n) => n.id === id);
  if (!note) throw new Error('Note not found');
  return { ...editorNote, id, title: note.title ?? editorNote.title };
}

export async function fetchCollaborators(noteId) {
  void noteId;
  return [...collaborators];
}

export async function saveNote(note) {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ...note, updatedAt: new Date().toISOString() };
}
