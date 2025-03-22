import React, { useState, useEffect } from "react";

const CodeEditor = ({ code, onCodeChange, language }) => {
  const [langExtension, setLangExtension] = useState(null);
  const CodeMirror = window.ReactCodeMirror;

  useEffect(() => {
    const loadLanguage = async () => {
      let extension;
      switch (language) {
        case "javascript":
          extension = (await import("https://unpkg.com/@codemirror/lang-javascript@latest/dist/index.js")).javascript();
          break;
        case "python":
          extension = (await import("https://unpkg.com/@codemirror/lang-python@latest/dist/index.js")).python();
          break;
        case "cpp":
          extension = (await import("https://unpkg.com/@codemirror/lang-cpp@latest/dist/index.js")).cpp();
          break;
        case "java":
          extension = (await import("https://unpkg.com/@codemirror/lang-java@latest/dist/index.js")).java();
          break;
        case "go":
          extension = (await import("https://unpkg.com/@codemirror/lang-go@latest/dist/index.js")).go();
          break;
        case "rust":
          extension = (await import("https://unpkg.com/@codemirror/lang-rust@latest/dist/index.js")).rust();
          break;
        default:
          extension = (await import("https://unpkg.com/@codemirror/lang-javascript@latest/dist/index.js")).javascript();
      }
      setLangExtension(extension);
    };

    loadLanguage();
  }, [language]);

  return (
    <CodeMirror
      value={code}
      height="100%"
      width="100%"
      extensions={langExtension ? [langExtension] : []}
      onChange={(value) => onCodeChange(value)}
      basicSetup={{ foldGutter: false }}
    />
  );
};

export default CodeEditor;
