import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

interface MDEditorI {
  handleEditorChange: any;
  state: {
    html: string;
    text: string;
  };
}

function MDEditor(props: MDEditorI) {
  const { handleEditorChange, state } = props;
  const mdParser = new MarkdownIt();

  return (
    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
  )
}

export default MDEditor;
