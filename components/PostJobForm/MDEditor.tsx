import React from 'react';
import dynamic from 'next/dynamic';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

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
    <MdEditor style={{ height: '500px' }} renderHTML={(text) => mdParser.render(text)} onChange={handleEditorChange} />
  )
}

export default MDEditor;
