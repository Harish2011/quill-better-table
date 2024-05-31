import React from 'react';
import './App.css';
import RichTextEditor from './RichTextEditor';

function App() {
  return (
    <div class="demo">

        <div class="btn-group" hidden>
          <button id="insert-table">Insert table</button>
          <button id="get-table">Get table</button>
          <button id="get-contents">Get contents</button>
        </div>

        <div id="editor"></div>
      <div hidden>
          <h3>Delta formats</h3>
            <p id="delta-view"></p>
          </div>
      </div>
        );
}

        export default App;
