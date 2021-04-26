import { useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import 'components/TextEditor/styles.css';

const TextEditor = () => {
  const wrapperRef = useCallback((wrapper) => {
    if (!wrapper) return;

    const editor = document.createElement('div');

    wrapper.innerHTML = '';
    wrapper.append(editor);

    new Quill(editor, {
      theme: 'snow',
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
