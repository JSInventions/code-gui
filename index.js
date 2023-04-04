//Copyright WojtekGame 2023 - npm: code-gui, github: WojtekCodesToday/code-gui
import * as fs from 'fs/promises'
import colors from 'colors';
function __e(err) {
    console.error("(err) " + err);
}
/**
 * # loadDir
 * An code-gui function allowing to display folder contents in the terminal.
 * 
 * Example:
 * ```
 * import loadDir from "code-gui";
 * loadDir("C:/", {"type":"text"})
 * ```
 * ## History
 * Added by [@WojtekCodesToday](github.com/WojtekCodesToday) on [GitHub](github.com)
 */
async function loadDir(dir, set) {
    let
        gdir = colors.yellow.bold(" " + dir),
        rest, name = "";
        rest = ""
    for (let c = 0; c < gdir.length; c++) {
        switch (set.style) {
            case "emoji":
                rest = `${rest}`;
                break;
            case "emoji-hacker":
                rest = `${rest}`;
                break;
            case "text-hacker":
                rest = `${rest}1`;
                break;
            case "text":
                rest = `${rest}-`;
                break;
            case "text-2":
                rest = `${rest}─`;
                break;
            case "keyboard":
                rest = `${rest}I`;
                break;
            //default:
            //    break;
        }
    } try {
        var folder = await fs.opendir(dir);
        switch (set.style) {
            case "emoji":
                console.log(`⏹️⬅️⬅️ 🔍${gdir}`);
                break;
            case "emoji-hacker":
                console.log(`#️⃣0️⃣1️⃣ 🔍${gdir}`);
                break;
            case "text":
                console.log(`#--${gdir}`);
                break;
            case "text-2":
                console.log(`┌──${gdir}`);
                break;
            case "keyboard":
                console.log(`OIII${gdir}`);
                break;
            case "text-hacker":
                console.log(`#0110${gdir}`);
                break;
            //default:
            //    break;
        }
        let dircount = 0,
            filecount = 0,
            nullcount = 0;
        function __frame() {
            let about = "";
            if (e.isFile() === false) {
                dircount = dircount + 1;
                about = colors.gray(` // <Directory> Directory count: ${dircount}`);
            } else if (e.isDirectory() === true) {
                filecount = filecount + 1
                about = colors.gray(` // <File> File count: ${filecount}`);
            } else {
                nullcount = nullcount + 1
                about = colors.gray(` // <NULL> Null count: ${nullcount}`);
            }
            if (set.limitNames === true) {
                if (name.length > 20) {
                    let abc = "";
                    for (let integr = 0; integr < 20; integr++) {
                        abc = abc + name[integr];

                    }
                    name = `${abc}...`;
                }
            }
            switch (set.style) {
                case "emoji":
                    console.log(`⬇️ ${name}${about}`);
                    break;
                case "emoji-hacker":
                    var z = Math.floor(Math.random() * 2);
                    switch (z) {
                        case 1:
                            console.log(`0️⃣ ${name}${about}`);
                            break;
                        default:
                            console.log(`1️⃣${name}${about}`);
                            break;
                    }
                    break;
                case "text":
                    console.log(`| ${name}${about}`);
                    break;
                case "text-2":
                    console.log(`│ ${name}${about}`);
                    break;
                case "keyboard":
                    console.log(`l ${name}${about}`);
                    break;
                case "text-hacker":
                    var z = Math.floor(Math.random() * 2);
                    switch (z) {
                        case 1:
                            console.log(`0️ ${name}${about}`);
                            break;
                        default:
                            console.log(`1️ ${name}${about}`);
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
        if (set.showItems === undefined) {
            for await (var e of folder) {
                name = e.name;
                __frame()
            }
        } else {
            var i = 0
            for await (var e of folder) {
                if (i < set.showItems) {
                    __frame()
                }
                i = i + 1
            }
        }
        switch (set.style) {
            case "emoji":
                console.log(`⏹️➡️➡️${rest}`);
                break;
            case "emoji-hacker":
                console.log(`#️⃣1️⃣0️⃣${rest}`);
                break;
            case "text":
                console.log(`#--${rest}`);
                break;
            case "text-2":
                console.log(`└──${rest}`)
                break;
            case "keyboard":
                console.log(`OII${rest}`)
                break;
            case "text-hacker":
                console.log(`#10${rest}`)
                break;

            //default:
            //    break;
        }
    } catch (err) {
        __e(err);
    }
}
export default loadDir