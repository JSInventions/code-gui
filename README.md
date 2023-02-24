<!-- Logo -->
# [![img](https://u.cubeupload.com/Wojtek_Game/codeguilogo.png)](https://github.com/WojtekCodesToday/code-gui/)
[![install size](https://packagephobia.com/badge?p=code-gui)](https://packagephobia.com/result?p=code-gui)
[![code-gui](https://snyk.io/advisor/npm-package/code-gui/badge.svg)](https://snyk.io/advisor/npm-package/code-gui)
[![npm-install](https://nodei.co/npm/code-gui.png?mini=true)](https://npmjs.com/package/code-gui)

See contents of a folder with a Terminal UI! 🤩
# Instalation
 - Node.js (latest)
 - npm (it's bundled with Node.js!)
 
 But it's possible that you can upgrade, but in some cases it may cause errors.

 After done that do:
 
  - open your terminal
  - open your main folder (root of your app) in your terminal
  - in the terminal, type:
 ```console
 npm i code-gui
 ```
# Usage
__Note: After ```1.0```, you have to add ```{"style":"text"}``` after the specified path.__

Simple Usage:
```javascript
var loadDir = require("code-gui")
loadDir("C:/", {"style":"text"})
```
When ran the program, you may see this in the terminal:
```console
#-- C:/
| (contents of C:/)
#------
```
# Styles
This section is only used after 1.0.

They are loaded in ```{"style":"place style here"}```.

### The following styles of ```loadDir``` are:
 - ```text``` (```1.1.0```)
 - ```emoji``` (```1.1.0```)
 - ```emoji-hacker``` (```1.1.0```)
# Contributing
To contribute, you have to:
 -  Apply to GitHub's rules
 - Read this topic: https://scratch.mit.edu/discuss/topic/664129/
 # Source code
 [see source code](https://unpkg.com/code-gui/)
