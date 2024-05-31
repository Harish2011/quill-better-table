import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MyCKEditor = () => {
  const [editorData, setEditorData] = useState('');

  return (
    <div>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onReady={editor => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <div>
        <h2>Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div>
    </div>
  );
};

export default MyCKEditor;
