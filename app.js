const mongoose = require("mongoose");
// mongoose.Promise = require('bluebird');

const User = require('./users.js');

//connect to mongoDB: FirstMongoChallange
mongoose.connect('mongodb://localhost:27017/FirstMongoChallange');

// ============ Create documents ============
User.create({
    name: 'Dhoha Alkhorasani',
    address: [
        {
            country: 'Yemen',
            city: 'Taiz'
        }
    ]
}).then(function(){
    console.log("CREATING DOCUMENT SUCCESS");
}).catch(function(){
    console.log("CREATING DOCUMENT FIALD !!");
});

User.create(
    {
        name: 'Mhohammed Alkhorasani'
    }
).then(function(){
    console.log("CREATING DOCUMENT SUCCESS");
}).catch(function(){
    console.log("CREATING DOCUMENT FIALD !!");
});

User.create(
    {
        name: 'Abbass Alnoori',
        address: [
            {
                country: 'Yemen',
                city: 'Alhodaidah'
            }
        ]
    }
).then(function(){
    console.log("CREATING DOCUMENT SUCCESS");
}).catch(function(){
    console.log("CREATING DOCUMENT FIALD !!");
});

// ============ Updating a document ============
User.updateMany(
    {name: 'Mhohammed Alkhorasani'},
    {
        $push: {
            address:{
                country: 'Yemen',
                city: 'Sana\'a'
            }
        }
    }
).then(function(){
    console.log("UPDATING SUCCESS");
    User.find(
        {name: 'Mhohammed Alkhorasani'}
    ).then(function(result){
        console.log(result);
    }).catch(function(result){
        console.log(result);
    });
}).catch(function(error){ //error, affected, resp
    console.log(error);     //"UPDATING FAILD !!"
});

User.updateOne(
    {name: 'Dhoha Alkhorasani'},
    {
        $set: {
            address:{
                country: 'Yemen',
                city: 'Aden'
            }
        }
    }
).then(function(){
    console.log("UPDATING SUCCESS");
    User.find(
        {name: 'Dhoha Alkhorasani'}
    ).then(function(result){
        console.log(result);
    }).catch(function(result){
        console.log(result);
    })
}).catch(function(error){ //error, affected, resp
    console.log(error);     //"UPDATING FAILD !!"
});

// ============ Deleting a document ============
User.deleteOne(
    {name: 'Abbass Alnoori'}
).then(function(){
    console.log("DELETEING A DICUMENT SUCCESS");
    User.find().then(function(result){
        console.log(result);
    }).catch(function(result){
        console.log(result);
    })
}).catch(function(error){ //error, b, c
    console.log(error);     //"DELETING FAILD !!"
});

// console.log("DONE");
