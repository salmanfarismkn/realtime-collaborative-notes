import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditorToolbar from '../components/editor/EditorToolbar';
import RichTextEditor from '../components/editor/RichTextEditor';
import CollaboratorsPanel from '../components/editor/CollaboratorsPanel';
import { useNotes } from '../context/NotesContext';
import { useDebounce } from '../hooks/useDebounce';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/** Note editor with rich text layout, collaborators, and autosave UI. */
export default function NoteEditorPage() {
  const { noteId } = useParams();
  const { fetchNoteById, fetchCollaborators, saveNote } = useNotes();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  const [saveStatus, setSaveStatus] = useState('saved');
  const [panelOpen, setPanelOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const debouncedTitle = useDebounce(title, 800);
  const debouncedContent = useDebounce(content, 800);

  useDocumentTitle(title || 'Untitled');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const [note, collabs] = await Promise.all([
          fetchNoteById(noteId),
          fetchCollaborators(noteId),
        ]);
        if (!cancelled) {
          setTitle(note.title);
          setContent(note.content);
          setCollaborators(collabs);
          setSaveStatus('saved');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [noteId, fetchNoteById, fetchCollaborators]);

  const persist = useCallback(async () => {
    setSaveStatus('saving');
    try {
      await saveNote({ id: noteId, title: debouncedTitle, content: debouncedContent });
      setSaveStatus('saved');
    } catch {
      setSaveStatus('error');
    }
  }, [noteId, debouncedTitle, debouncedContent, saveNote]);

  useEffect(() => {
    if (loading) return;
    setSaveStatus('unsaved');
    const timer = setTimeout(persist, 100);
    return () => clearTimeout(timer);
  }, [debouncedTitle, debouncedContent, loading, persist]);

  if (loading) {
    return (
      <section className="flex h-full items-center justify-center">
        <p className="text-sm text-gray-500">Loading note…</p>
      </section>
    );
  }

  return (
    <section className="flex h-full flex-col">
      <EditorToolbar saveStatus={saveStatus} collaborators={collaborators} />

      <section className="flex flex-1 overflow-hidden">
        <section className="relative flex flex-1 flex-col overflow-y-auto bg-white">
          <button
            type="button"
            onClick={() => setPanelOpen((o) => !o)}
            className="absolute right-4 top-4 z-10 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-50 lg:hidden"
          >
            {panelOpen ? 'Hide' : 'Show'} collaborators
          </button>
          <RichTextEditor
            title={title}
            onTitleChange={setTitle}
            content={content}
            onContentChange={setContent}
          />
        </section>

        <section
          className={`${
            panelOpen ? 'flex' : 'hidden'
          } w-full shrink-0 lg:flex lg:w-72 xl:w-80`}
        >
          <CollaboratorsPanel
            collaborators={collaborators}
            onInvite={() => window.alert('Invite flow coming soon')}
          />
        </section>
      </section>
    </section>
  );
}
