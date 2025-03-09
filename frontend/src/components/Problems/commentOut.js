const commentStyles = {
    javascript: { single: "// ", multi: ["/* ", " */"] },
    python: { single: "# ", multi: ['"""', '"""'] },
    cpp: { single: "// ", multi: ["/* ", " */"] },
    java: { single: "// ", multi: ["/* ", " */"] },
    go: { single: "// ", multi: ["/* ", " */"] },
    rust: { single: "// ", multi: ["/* ", " */"] }
  };

function commentOutCode(code, language) {
    const style = commentStyles[language];
  
    if (!style) return code;
    if (code === "") return code;
    
    if (style.multi) {
      return `${style.multi[0]}\n${code}\n${style.multi[1]}`;
    } else if (style.single) {
      return code
        .split("\n")
        .map(line => style.single + line)
        .join("\n");
    }
  
    return code; 
  }

  export default commentOutCode
  