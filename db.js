var mangoose = require('mongoose')
mangoose.connect('mongodb://localhost/sociall', function(){
	console.log('db connection success')
})

module.exports = mangoose