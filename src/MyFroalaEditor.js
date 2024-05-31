import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';

const MyFroalaEditor = () => {
  const [content, setContent] = useState('');

  const handleModelChange = (model) => {
    setContent(model);
  };

  return (
    <div>
      <FroalaEditor
        tag='textarea'
        model={content}
        onModelChange={handleModelChange}
        config={{
          placeholderText: 'Edit Your Content Here!',
          charCounterCount: false
        }}
      />
      <div>
        <h2>Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default MyFroalaEditor;
