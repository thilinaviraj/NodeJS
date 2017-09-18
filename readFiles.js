//Copyrights reserverd Thilinaviraj
var fs = require('fs');
//read the text file
fs.readFile('D:/file.csv', function(err, data) {
  //If file is not available throw an error
    if(err) throw err;
    var arrayLine = data.toString().split("\n");
    //Read each line on the arrayLine
    for(i in arrayLine) {
         var arrayRow = arrayLine[i];
         console.log(arrayRow);
    }
});
