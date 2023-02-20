# code-gui
See contents of a folder with a Terminal UI!

# Instalation
 - Node.js 14.x
 - npm 6 (it's bundled with Node.js!)
 
 But it's possible that you can upgrade, but in some cases it may cause errors.

 After done that do:
 
  - open your terminal
  - open your main folder (root of your app) in your terminal
  - in the terminal, type:
 ```console
 npm install code-gui
 ```
 #### Note: To have it in every project,  add ```-g``` at the end of the command!
# Usage
Simple Usage:
```javascript
const loadDir = require("code-gui")
loadDir("C:/")
```
When ran the program, you may see this in the terminal:
```console
#-- C:/
| (contents of C:/)
#------
```
# Contributing
To contribute, you have to:
 -  Apply to GitHub's rules
 - Read this topic: https://scratch.mit.edu/discuss/topic/664129/
