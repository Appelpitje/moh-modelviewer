const folder = "./public/files";
const fs = require("fs");

if (module.parent == undefined) {
  var list = [];
  fs.readdirSync(folder).forEach(file => {
    var object = {
      name: file.replace(".obj", ""),
      path: folder.replace("./public", "") + "/" + file
    };
    list.push(object);
  });

  fs.writeFile("./public/files.json", JSON.stringify(list), function(err) {
    if (err) {
      console.log("There has been an error saving your configuration data.");
      console.log(err.message);
      return;
    }
    console.log("Configuration saved successfully.");
  });
}
