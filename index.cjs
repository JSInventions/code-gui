//Copyright WojtekGame 2023 - npm:code-gui - github:WojtekCodesToday/code-gui
var dJ = {"theme":0};
outputSettings(dJ);
var fs = require('node:fs/promises');
function __c(m) { 
    console.log(m); 
} 
function outputSettings(s) { 
    const t = s.theme
     return t; 
    } 
function __e(e) {
__c("   ."); 
__c("  / \\"); 
__c(" / | \\ " + e); 
__c("/__.__\\") 
}
async function loadDir(a, f) { 
    var b = ""; 
    for (let c = 0; c < a.length; c++) {
        if (f.style === "emoji" && f.style === "emoji-hacker"){
            b = b + ""; 
        }else if (f.style === "text"){
            b = b + "-"
        }
    } try { 
        var d = await fs.opendir(a); 
        if (f.style === "emoji"){
            __c("⏹️⬅️⬅️ 🔍 " + a)
        }else if (f.style === "emoji-hacker"){
                __c("#️⃣0️⃣1️⃣ 🔍 " + a)
        }else if (f.style === "text"){
            __c("#-- " + a);
        } 
        for await (var e of d){
            if (f.style === "emoji"){
                __c("⬇️ " + e.name)
            }else if (f.style === "emoji-hacker"){
                var z = Math.floor(Math.random()*2);
                if (z === 1){
                    __c("0️⃣ " + e.name)
                }else{
                    __c("1️⃣" + e.name)
                }
            }else if (f.style === "text"){
                __c("| " + e.name);
        } 
        }
        if (f.style === "emoji"){
            __c("⏹️➡️➡️➡️" + b)
        }else if (f.style === "emoji-hacker"){
            __c("#️⃣1️⃣1️⃣0️⃣"+ b)
        }else if (f.style === "text"){
            __c("#---" + b);
        }
    } catch (err) {
         __e(err); 
    } 
}
async function loadFile(a) {
fs.readFile(a, (err, data) => {
    if (err) {throw err;}
    __c(data);
  });
}
loadFile('C:/Users/TB/Desktop/code-gui/credits.json')
module.exports = loadDir