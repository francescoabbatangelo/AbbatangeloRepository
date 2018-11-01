var express = require('express');
var app = express();
app.use(express.static('dist'));

var bodyParser = require('body-parser');
var gg = bodyParser();

app.use(gg);
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('data.json');
const db = low(adapter);

const adapter2 = new FileSync('people.json');
const db2 = low(adapter2);

const adapter3 = new FileSync('like.json');
const db3 = low(adapter3);
const porta = 9000;


/*

// Set some defaults
db.defaults({ posts: [], user: {} })
    .write();

// Add a post
db.get('posts')
    .push({ id: 1, title: 'lowdb is awesome'})
    .write();

// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
    .write();


*/


app.get('/res/all/', function (req, res) {
    res.send(db.get('article'));
});

app.get('/people/all/', function (req, res) {
    res.send(db2.get('people'));
});

app.get('/like/all/', function (req, res) {
    res.send(db3.get('like'));
});

app.post('/addlike/', function (req, res) {
    let id = req.body.id;
    let like = db3.get('like').find({id: id}).value().num + 1;

    db3.get('like').find({id: id}).assign({num: like})
        .write();
    res.send('ok');

});


app.listen(porta, function () {
    console.log('Server sulla porta ' + porta);
});
