var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())


app.get('/', function(req, res){
  res.sendfile('layouts/posts.html')
})

app.get('/api/posts', function (req, res, next) {
	console.log("get function accessed")
 	Post.find(function (err, posts) {
    res.json(posts)
  })
})


app.post('/api/posts', function (req, res, next){
	console.log('post received')
	console.log(req.body.username)
	//res.sendStatus(201)
	var post = new Post({
		username :req.body.username,
		body : req.body.body
	})

	post.save(function(err, post){
		if(err) {return next(err)}
			//res.json(201, post)
			res.status(201).json(post)
	})
})



app.listen(3000, function(){
	console.log("Server running", 300)
})