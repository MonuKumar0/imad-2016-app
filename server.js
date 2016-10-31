var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'monukumar0',
    database:'monukumar0',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool=new Pool(config);
app.get('/articles', function(req,res){
    
    pool.query("SELECT * FROM "+"articles;", function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else {
            if(result.rows.length===0)
            {
                res.status(404).send('Article Not Found');
            }
            else
            {
                var articledata=result.rows[0];
                res.send(createTemplate(articledata));
            }
        }
        
    });
});
app.get('/IMG_20160419_163015.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'IMG_20160419_163015.jpg'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/profile.png', function (req, res) {
  res.sendFile(path.join(__dirname,  'profile.png'));
});
app.get('/image.png', function (req, res) {
  res.sendFile(path.join(__dirname,  'image.png'));
});
app.get('/Cloudc.png', function (req, res) {
  res.sendFile(path.join(__dirname,  'Cloudc.png'));
});
app.get('/Video.png', function (req, res) {
  res.sendFile(path.join(__dirname,  'Video.png'));
});
app.get('/arrowc.png', function (req, res) {
  res.sendFile(path.join(__dirname,  'arrowc.png'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/49be6b5a-9690-4e04-b6fb-7e194463d0d7.jpg', function (req, res) {
  res.sendFile(path.join(__dirname,  '49be6b5a-9690-4e04-b6fb-7e194463d0d7.jpg'));
});
app.get('/g.jpg', function (req, res) {
  res.sendFile(path.join(__dirname,  'g.jpg'));
});

app.get('/ui/IMG_20160524_001023.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160524_001023.jpg'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get("/submit-name",function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
