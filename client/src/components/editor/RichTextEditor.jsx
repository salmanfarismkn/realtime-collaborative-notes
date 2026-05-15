import LiveCursorsPlaceholder from './LiveCursorsPlaceholder';

/** Rich text editor layout with contenteditable area and live cursor overlay. */
export default function RichTextEditor({ title, onTitleChange, content, onContentChange }) {
  return (
    <article className="relative mx-auto max-w-3xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Untitled note"
        className="w-full border-0 bg-transparent text-3xl font-bold tracking-tight text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-0 sm:text-4xl"
        aria-label="Note title"
      />

      <section className="relative mt-8 min-h-[400px]">
        <LiveCursorsPlaceholder />
        <div
          contentEditable
          suppressContentEditableWarning
          className="prose prose-gray max-w-none text-base leading-relaxed text-gray-800 focus:outline-none [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mb-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: content }}
          onInput={(e) => onContentChange(e.currentTarget.innerHTML)}
          role="textbox"
          aria-label="Note content"
          aria-multiline="true"
        />
      </section>
    </article>
  );
}
