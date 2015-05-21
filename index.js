var HtmlDocx = require('html-docx-js');
var fs = require('fs');

var inputFile = process.argv[2];
var outputFile = process.argv[3];

fs.readFile(inputFile, 'utf-8', function(err, html) {
  if (err) throw err;

  var docx = HtmlDocx.asBlob(html);
  fs.writeFile(outputFile, docx, function(err) {
    if (err) throw err;
  });
});
