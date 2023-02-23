# code-gui
See contents of a folder with a Terminal UI!

[![code-gui](https://snyk.io/advisor/npm-package/code-gui/badge.svg)](https://snyk.io/advisor/npm-package/code-gui)
# Instalation
 - Node.js 14.x
 - npm 6 (it's bundled with Node.js!)
 
 But it's possible that you can upgrade, but in some cases it may cause errors.

 After done that do:
 
  - open your terminal
  - open your main folder (root of your app) in your terminal
  - in the terminal, type:
 ```console
 npm i code-gui
 ```
# Usage
#### Note: After 1.0 you have to add ```{"style":"text"}``` after the specified path.

Simple Usage:
```javascript
var cg = require("code-gui")
cg.loadDir("C:/", {"style":"text"})
```
When ran the program, you may see this in the terminal:
```console
#-- C:/
| (contents of C:/)
#------
```
# Styles
This section is only used after 1.0
# Contributing
To contribute, you have to:
 -  Apply to GitHub's rules
 - Read this topic: https://scratch.mit.edu/discuss/topic/664129/
