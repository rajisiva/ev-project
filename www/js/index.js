
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var mongo = require("mongodb");
var mongoose = require("mongoose");
var encrypt = require("mongoose-encryption");
var AccountController = require('./controllers/account.js');
var twilio = require('twilio');
var client = twilio('AC6acfffc55d041ad273924a040842c14e','e758600519cb64106a715570de999f3c');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

//session tracking !!!!!!
var session = AccountController.prototype.getSession()
//*******************************

 // messaging api 
 // client.sendMessage({
	// 	to:'9677119721',
	// 	from:'+12568874164',
	// 	body:'checking in index.js'
	// 				});


//***************************************************************************

app.get('/', function (req, res) {
res.send('Yes everything goes well as we think')
});


//***************************************************************************
app.post('/sign_up',function(req,res){

	console.log('sign up ');

	mongo.connect('mongodb://sathish:3112@ds127958.mlab.com:27958/nextlevel',function(err,db){
	if(!err)
	{
		console.log("successfully connected to mongo in sign up section");
	}

var collection = db.collection('users');

db.collection('users',function(err,collection){});

var name = req.body.name;
var ph = req.body.ph;
var pass = req.body.pass;
var addr = req.body.addr;

console.log(addr);

var new_user = {'name':name,'ph':ph,'pass':pass,'address':addr.address,'area':addr.area};


// collection.insert(new_user,function(err,records){
// 			if(!err){
// 				console.log('successfully inserted');
// 				console.log(records[0]._id.$oid+' is the id');
// 				res.send('success'); 

// 	}
// });


collection.find({'ph':ph}).toArray(function(err,result){
	if(result[0]){
		console.log(result);
		res.send('ex-user');
	}
else if(result[0]==null || result[0].ph==undefined)
	{
		collection.insert(new_user,function(err,records){
			if(err){
				console.log('INSERT ERROR IN DB ln 79');
				res.send('failure');
			}
			else
			{
				console.log('successfully inserted 83');
				res.send('success'); 
					
	}
		});
	}

});
});
});


//  LOGIN SECTION***************************************************

app.post('/login',function(req,res){

	var ph = req.body.ph;
	var pass = req.body.pass;
	
	mongo.connect('mongodb://sathish:3112@ds127958.mlab.com:27958/nextlevel',function(err,db){
	if(!err)
	{
		console.log("successfully connected to mongo in login section");
	}
var collection = db.collection('users');

collection.find({ph:ph}).toArray(function(err,result){
	
	if(err)
	{
		res.send('invalid user');
	}

	if(result)
	{
		console.log(result[0].pass,pass);	
		if(pass === result[0].pass)
		{	


			if(ph=='9677119721'){
			res.send('s-admin');
			}
			else{
			res.send('p-match'
			);
		}
	}
	
	else{
	res.send('invalid password')
		}
	
	}

});	
});
});



//***************************************************************************
app.post('/bookcan',function(req,res){

	var ph = req.body.ph;
	var noc = req.body.noc;
	var tod = req.body.tod;
	var dat = req.body.date;
	console.log(dat);
mongo.connect('mongodb://sathish:3112@ds127958.mlab.com:27958/nextlevel',function(err,db){
	if(!err)
	{
		console.log("successfully connected to mongo in booking section");
	}


var collection = db.collection('bookings');
var b_id = 0;

collection.find({}).sort({$natural:-1}).limit(1).toArray(function(err,result){

	if(result[0]!==null && result[0]!==undefined)
	{	
		b_id = parseInt(result[0].b_id)+1;
	}

	else
	{
		 b_id = 1;
	}

book_details={
	'ph':ph,
	'b_id': b_id,
	'noc':noc,
	'tod':tod,
	'date':dat,
	'status':'pending',
	'payment':false
}
console.log(book_details+' HAVE BEEN INSERTED INTO DB');
collection.insert(book_details);

res.send('booked');
});
});
});


//************************************************************************
app.get('/pendingorders',function(req,res){

mongo.connect('mongodb://sathish:3112@ds127958.mlab.com:27958/nextlevel',function(err,db){
	if(!err)
	{
		console.log("successfully connected to mongo in login section");
	}


var collection = db.collection('bookings');

collection.find({status:'pending'}).toArray(function(err,result){
	console.log(result.length);
	res.send(result);

});
});
});

app.post('/delivered',function(req,res){
	var b_id = req.body.b_id;
	mongo.connect('mongodb://sathish:3112@ds127958.mlab.com:27958/nextlevel',function(err,db){
	if(!err)
	{
		console.log("successfully connected to mongo in login section");
	
	var collection = db.collection('bookings');
	collection.update({b_id:b_id},{$set:{status:'delivered',payment:true}});
		console.log('delivered and db updated');
		res.send('ok');
	}


})	
})




app.post('/customerorders',function(req,res){
	


});

//******************************************************************
