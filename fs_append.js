// file ini mencoba menggunakan fungsi untuk membuat sebuah file dengan menggunakan fs
const fs = require('fs');

//dibawah ini code untuk membuat sebuah file
fs.appendFile('hasilAppend.txt', 'Hallo, ini hasil dari menggunakan appendFile()', function(err){
    if(err) throw err;
    console.log('Disimpan');
});