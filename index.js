const express = require('express')
const app = express()
const port = 3000

app.use("/java", express.static(__dirname + '/java'));

app.use('/styles', express.static(__dirname + '/styles'));


app.get('/', function (req, res, next) {
    var options = {
        root: __dirname + '/views',
    }
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});



app.post('/traerDesdeDB', function (req, res) {
    traer.traer(traer.mostrar);
    res.send(":(");
});


app.listen(3000);