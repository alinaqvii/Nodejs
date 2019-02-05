var fs = require('fs');

// var files = fs.readdirSync('./lib');

fs.readdir('./lib', function(err, files){

    if(err){
        throw err;
    }else{
        console.log(files);
    }
});

console.log('Reading files....');