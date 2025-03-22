import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { material } from "@uiw/codemirror-theme-material";

const CodeEditor = ({ code, onCodeChange, language }) => {
  const [langExtension, setLangExtension] = useState(null);

  useEffect(() => {
    const loadLanguage = async () => {
      let extension;
      switch (language) {
        case "javascript":
          extension = (await import("@codemirror/lang-javascript")).javascript();
          break;
        case "python":
          extension = (await import("@codemirror/lang-python")).python();
          break;
        case "cpp":
          extension = (await import("@codemirror/lang-cpp")).cpp();
          break;
        case "java":
          extension = (await import("@codemirror/lang-java")).java();
          break;
        case "go":
          extension = (await import("@codemirror/lang-go")).go();
          break;
        case "rust":
          extension = (await import("@codemirror/lang-rust")).rust();
          break;
        default:
          extension = (await import("@codemirror/lang-javascript")).javascript();
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
      theme={material}
      extensions={langExtension ? [langExtension] : []}
      onChange={(value) => onCodeChange(value)}
      basicSetup={{ foldGutter: false }}
    />
  );
};

export default CodeEditor;
