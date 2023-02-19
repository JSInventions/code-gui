import { opendir } from 'node:fs/promises';
//import { mkdir } from 'node:fs/promises';
//import { readFile } from 'node:fs/promises';
//import { access, constants } from 'node:fs';
function getSettings(){
  try {
    const filePath = new URL('./src/settings.json', import.meta.url);
    const contents = readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}
loadProject("project1");
async function loadProject(projectName) {
  try {
    const dir = await opendir('./projects/'+projectName);
    console.log("#-- "+projectName);
    var min = "";
    for (let hash_0 = 0; hash_0 < projectName.length; hash_0++) {
      min = min + "-";
      
    }
    for await (const dirent of dir)
      console.log("| "+dirent.name);
    console.log("#---"+min);
  } catch (err) {
    console.error("Cannot open project: "+err);
  }
};
async function newProject(projectName) {
  access(file, constants.F_OK, (err) => {
    if (err){
      try {
        const projectFolder = new URL('./projects/'+projectName, import.meta.url);
        const createDir = mkdir(projectFolder, { recursive: true });
      
        console.log(`Created project ${createDir}`);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.error("Project already exists")
    }
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
  });
}