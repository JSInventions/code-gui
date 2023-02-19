function filetype(f){
    if (f.includes("html")) {return "html"
    } else if (f.includes("js")) {return "js"
    } else if (f.includes("css")) {return "css"
    } else if (f.includes("ts")) {return "ts"
    } else if (f.includes("jsx")) {return "jsx"
    } else if (f.includes("json")) {return "json"
    } else if (f.includes("md")) {return "md"
    } else if (f.includes("py")) {return "py"}
}

filetype("index.html")