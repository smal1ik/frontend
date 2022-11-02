const express = require('express');
// const serveStatic = require('serve-static');
// const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// app.use('/', serveStatic(path.join(__dirname, '/dist')));
//
// app.get(/.*/, function (req, res) {
//     res.sendFile(path.join(__dirname, '  /dist/index.html'));
// });
app.use(express.static( __dirname + "/dist/"));

app.get(/.*/, function(reg, res) {
    res.sendfile(__dirname + "/dist/index.html");
});

app. listen(port);
console. log(`app is listening on port: ${port}`)