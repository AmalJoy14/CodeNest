import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { material } from '@uiw/codemirror-theme-material';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { go } from '@codemirror/lang-go';


const CodeEditor = ({ code, onCodeChange, language }) => {
  const getLanguageExtension = (lang) => {
    switch (lang) {
      case 'javascript': return javascript();
      case 'python': return python();
      case 'cpp': return cpp();
      case 'java': return java();
      case 'go': return go();
      case 'rust': return rust();
      default: return javascript();
    }
  };

  return (
    <CodeMirror
      value={code}
      height="100%"
      width='100%'
      theme={material}

      extensions={[getLanguageExtension(language)]}
      onChange={(value) => onCodeChange(value)}
      basicSetup={{
        foldGutter: false,
      }}
    />
  );
};

export default CodeEditor;

