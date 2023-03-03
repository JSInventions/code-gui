//Copyright WojtekGame 2023 - npm: code-gui, github: WojtekCodesToday/code-gui
var fs = 
require('node:fs/promises'),
c = console;

function __e(e) {
    c.error("(err) " + e);
}
c.log("[notice] - code-gui module is imported in the project, use with caution")
module.exports =
/**
 * 
 * code-gui function allowing to display folder contents in the terminal
 */
    async function loadDir(dir, f) {
        var 
        a = " " + dir,
        b = "";
        for (let c = 0; c < a.length; c++) {
            if (f.style === "emoji" && f.style === "emoji-hacker") {
                b = b + "";
            } else if (f.style === "text") {
                b = b + "-";
            } else if (f.style === "text-2") {
                b = b + "─";
            } else if (f.style === "keyboard") {
                b = b + "I";
            }
        } try {
            var d = await fs.opendir(dir);
            if (f.style === "emoji") {
                c.log("⏹️⬅️⬅️ 🔍 " + a);
            } else if (f.style === "emoji-hacker") {
                c.log("#️⃣0️⃣1️⃣ 🔍 " + a);
            } else if (f.style === "text") {
                c.log("#--" + a);
            } else if (f.style === "text-2") {
                c.log("┌──" + a);
            } else if (f.style === "keyboard") {
                c.log("OIII" + a);
            }
            var dircount = 0,
            filecount = 0,
            nullcount = 0;
            function __frame(){
                if (e.isFile() === false){
                dircount = dircount + 1;
                var about = ` // <Directory> Directory count: ${dircount}`;
                } else if (e.isDirectory() === true){
                    filecount = filecount + 1
                    var about = ` // <File> File count: ${filecount}`;
                } else{
                    nullcount = nullcount + 1
                    var about = ` // <NULL> Null count: ${nullcount}`;
                }
                if (f.style === "emoji") {
                    c.log("⬇️ " + e.name);
                } else if (f.style === "emoji-hacker") {
                    var z = Math.floor(Math.random() * 2);
                    if (z === 1) {
                        c.log("0️⃣ " + e.name + about);
                    } else {
                        c.log("1️⃣" + e.name + about);
                    }
                } else if (f.style === "text") {
                    c.log("| " + e.name + about);

                } else if (f.style === "text-2") {
                    c.log("│ " + e.name + about);
                } else if (f.style === "keyboard") {
                    c.log("l " + e.name + about);
                }
            }
            if (f.showItems === undefined) {
                for await (var e of d) {
                    __frame()
                }
            } else {
                var i = 0
                for await (var e of d) {
                    if (i < f.showItems) {
                        __frame()
                    }
                    i = i + 1
                }
            }
            if (f.style === "emoji") {
                c.log("⏹️➡️➡️" + b);
            } else if (f.style === "emoji-hacker") {
                c.log("#️⃣1️⃣0️⃣" + b);
            } else if (f.style === "text") {
                c.log("#--" + b);
            } else if (f.style === "text-2") {
                c.log("└──" + b);
            } else if (f.style === "keyboard") {
                c.log("OII" + b);
            }
        } catch (err) {
            __e(err);
        }
    }
module.exports =
async function arrDir(a) {
    var b = {"dir":a, "contents":[]};
    try {
        var c = await fs.opendir(a);
        for await (var d of c) {
            b.contents.push(d.name);
        }
        return JSON.stringify(b);
    } catch (err) {
        __e(err);
    }
}