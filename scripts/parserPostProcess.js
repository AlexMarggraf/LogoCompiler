// NOTE: this script is massively scetchy but it works. 
// For example, it assumes that each import statement is on one line. 
import fs from 'fs';
function main() {
  const basepath = "src/xLogo_Parser/parser";
  const files = fs.readdirSync(basepath).filter((file) => {return file.endsWith(".ts")});
  console.log("updating files:\n", files);
  const regex = /\import (.*) from "(.*)(?:\.js)?";/;
  for (const file of files) {
    const filepath = basepath + "/" + file;
    console.log("opening file", filepath);
    const content = fs.readFileSync(filepath).toString();
    const lines = content.split("\n");
    var updatedlines = [];
    for (const line of lines) {
      if (!line.match(regex)) {
        updatedlines.push(line);
        continue;
      }
      console.log("replacing line", line);
      const updatedline = line.replace(regex, "import $1 from \"$2.js\";");
      console.log("with          ", updatedline);
      updatedlines.push(updatedline);
    }
    const updatedcontent = updatedlines.join("\n");
    fs.writeFileSync(filepath, updatedcontent, )
  }

  return;
}

main();