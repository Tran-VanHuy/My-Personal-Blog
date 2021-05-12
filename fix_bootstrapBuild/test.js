let fs = require('fs')

fs.unlink('./node_modules/bootstrap/js/dist/collapse.js',(err) => {
    if (err) throw err;
    console.log('successfully deleted /tmp/hello');
    fs.copyFile('./fix_bootstrapBuild/collapse.js', './node_modules/bootstrap/js/dist/collapse.js', (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
  });
