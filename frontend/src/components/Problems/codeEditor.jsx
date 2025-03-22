import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";

const CodeEditor = ({ code, onCodeChange, language }) => {
  const [langExtension, setLangExtension] = useState([]);

  useEffect(() => {
    const loadLanguage = async () => {
      const langModules = {
        javascript: () => import("@codemirror/lang-javascript").then(m => m.javascript()),
        python: () => import("@codemirror/lang-python").then(m => m.python()),
        cpp: () => import("@codemirror/lang-cpp").then(m => m.cpp()),
        java: () => import("@codemirror/lang-java").then(m => m.java()),
        go: () => import("@codemirror/lang-go").then(m => m.go()),
        rust: () => import("@codemirror/lang-rust").then(m => m.rust()),
      };

      const extension = langModules[language] ? await langModules[language]() : await langModules["javascript"]();
      setLangExtension([extension]);
    };

    loadLanguage();
  }, [language]);

  return (
    <CodeMirror
      value={code}
      height="100%"
      width="100%"
      extensions={langExtension}
      onChange={(value) => onCodeChange(value)}
      basicSetup={{ foldGutter: false }}
    />
  );
};

export default CodeEditor;
