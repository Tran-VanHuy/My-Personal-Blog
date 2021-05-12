let fs = require('fs');
let path = require('path');

fs.unlink(path.join(__dirname,'/node_modules/bootstrap/js/dist/collapse.js'),(err) => {
    if (err) throw err;
    //console.log('successfully deleted /tmp/hello');
    fs.copyFile(path.join(__dirname, 'fix_bootstrapBuild/collapse.js'), path.join(__dirname, '/node_modules/bootstrap/js/dist/collapse.js'), (err) => {
        if (err) throw err;
        //console.log('Rename complete!');
     });
  });
//console.log(__dirname);