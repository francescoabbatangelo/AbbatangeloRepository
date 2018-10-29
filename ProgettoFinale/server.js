var express = require('express');
var app = express();
app.use(express.static('dist'));

var bodyParser = require('body-parser')
var gg = bodyParser()

app.use(gg);
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('data.json');
const db = low(adapter);

const porta = 3000;


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

app.get('/res/:id/', function (req, res) {
    res.send(db.get('article')
        .find({title: req.params.id})
        .value());
});

app.post('/post/', function (req, res) {
    db.get('article')
        .push({
            "title": "Article Title 5",
            "image": "https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/302b6213-3901-11e8-903c-8d977599e803_600x400.png",
            "tech": "tech",
            "text": "Suspendisse nunc tortor, condimentum in tortor eget, rutrum aliquet tellus. Integer congue nisi odio, at tincidunt nisi consectetur molestie. Mauris metus augue, iaculis eu risus id, commodo vestibulum mi. Fusce elementum ultricies ligula vel suscipit.",
            "btn": false
        })
        .write();

    res.send('POST Eseguita con successo');
});

app.post('/modify/', function (req, res) {
    let btn = req.body.btn;
    let id = req.body.id;

    db.get('article').find({id: id}).assign({btn: btn})
        .write();
    res.send('POST Eseguita con successo');

});


app.listen(porta, function () {
    console.log('Server sulla porta ' + porta);
});
