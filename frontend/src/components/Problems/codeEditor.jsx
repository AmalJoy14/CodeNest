import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');

  return (
    <div className="w-full h-screen p-4">
      <CodeMirror
        value={code}
        height="400px"
        extensions={[javascript()]} 
        onChange={(value) => setCode(value)}
        theme="dark" 
      />
      <button
        onClick={() => console.log(code)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Run Code
      </button>
    </div>
  );
};

export default CodeEditor;
