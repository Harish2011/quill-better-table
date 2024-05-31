import React, { useState, useEffect, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillBetterTable from 'quill-better-table';
import 'quill-better-table/dist/quill-better-table.css';

// Register the Better Table module with Quill
Quill.register({
  'modules/better-table': QuillBetterTable
}, true);

const RichTextEditor = () => {
  const [text, setText] = useState('');
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.getModule('better-table').insertTable(3, 3);
    }
  }, []);

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    setText(pastedData);
  };

  const handleCopy = (e) => {
    e.preventDefault();
    e.clipboardData.setData('Text', text);
  };

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        value={text}
        onChange={setText}
        onPaste={handlePaste}
        onCopy={handleCopy}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean'],
    ['table']
  ],
  'better-table': {
    operationMenu: {
      items: {
        unmergeCells: {
          text: 'Unmerge Cells',
        }
      }
    }
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'table'
];

export default RichTextEditor;
