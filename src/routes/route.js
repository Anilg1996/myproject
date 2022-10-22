const express = require('express');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../logger')
//importing external package
//const underscore = require('underscore')

//---------------------------consuctive number problem1-----------------------
// router.get('/sol1', function (req, res) {
//     let arr = [1, 2, 3, 5, 6, 7];
//     let n = (arr[arr.length - 1]) // n=7
//     let arrsum = arr.reduce((i, total) => total += i); //24
//     let sum = n * (n + 1) / 2 //28
//     // missingnumber= 28-24=4
//     let missingnumber = sum - arrsum
//     res.send({ data: missingnumber })
// });

//--------------------------consuctive number problem2----------------------------
// router.get("/sol2", function (req, res) {
//     //logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
//     //numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//     let arr = [33, 34, 35, 37, 38, 39]
//     let sumofArray = 0
//     let first = arr[0]
//     let last = arr[arr.length - 1]
//     for (let i = 0; i < arr.length; i++) {
//         sumofArray += arr[i]
//     }
//     let n = arr.length + 1
//     let realsum = [n * (first + last) / 2]
//     let missingNumber = realsum - sumofArray
//     ///LOGIC WILL GO HERE
//     res.send({ data: missingNumber });
// })

//----------------------------------Players problem 3-----------------------------------------

let players = [
    {
        name: "Anil",
        dob: "25/12/1998",
        gender: "Male",
        city: "Ghazipur",
        sports: ["Cricket"],
    },
    {
        name: "Golu",
        dob: "25/11/1998",
        gender: "Male",
        city: "Varansi",
        sports: ["Football"],
    },
    {
        name: "Manish",
        dob: "20/10/1996",
        gender: "Male",
        city: "Delhi",
        sports: ["Swimming"],
    },
    {
        name: "Sunil",
        dob: "17/06/1995",
        gender: "Male",
        city: "Mumbai",
        sports: ["Basketball"],
    }
];

// router.post('/players',function(req,res){ 
//     let newplayer = req.body;
//     let foundplayer=req.body.name;
//     console.log("New Players Found ==> ",newplayer);
//     for(let i=0;i<=players.length-1;i++){
//         if(players[i].name == foundplayer ){
//             return res.send("Name Already Exists");
//         }
//     }
//     players.push(newplayer);  // agr name unique hoga name  add ho jayega;
//     res.send({ msg: players, status: "true" });
// });
//-----------------------------------------------20/10/2022-------------------------------
let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
];

//  router.post('/person',function(req,res){
//     const votingAge=req.query.votingAge
//     const updatedperson=[]
//     persons.forEach((person)=>{
//        if(person.age > votingAge){
//        person.votingStatus=true
//        updatedperson.push(person)
//        }
//    })
//      res.send({updatedperson:updatedperson})
//  })

    router.post('/person', function (req, res) {
    const votingAge = req.query.votingAge
    const updatedperson = []
    for(let i=0;i<=persons.length-1;i++){
        if(persons[i].age>votingAge){
            persons[i].votingStatus=true
           updatedperson.push(persons[i])
        }
    }
    res.send( {updatedperson:updatedperson} )
})
module.exports = router;




