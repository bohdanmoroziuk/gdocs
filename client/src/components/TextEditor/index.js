import { useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import 'components/TextEditor/styles.css';

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
];

const TextEditor = () => {
  const wrapperRef = useCallback((wrapper) => {
    if (!wrapper) return;

    const editor = document.createElement('div');

    wrapper.innerHTML = '';
    wrapper.append(editor);

    new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
    });
  }, []);

  return (
    <div 
      className="text-editor" 
      ref={wrapperRef}  
    />
  );
};

export default TextEditor;
