const fs = require('fs');
const http = require('http');

http.createServer(function(request, response){
    //baca file
    fs.readFile('index.html', (err, data) => { //method readfile() adalah method untuk membaca file, dan memiliki 2 parameter
        //parameter nama file dan fungsi yang akan dieksekusi saat file dibaca
        if(err) throw err; // err akan menghasilkan error jika file gagal dibaca

        //kirim respon
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(data); 
        response.end();
    });
}).listen(8000);
console.log("Server berjalan di http://localhost:8000")