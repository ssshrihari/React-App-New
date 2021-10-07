const router = require('express').Router();
var url = process.env.ATLAS_URI;
var MongoClient = require('mongodb').MongoClient;
router.route('/').get((req,res)=>{


});
router.route('/add').post((req,res)=>{
    var flag = false;
    console.log(req.body);
     MongoClient.connect(url, function (err, db) {
         if (err) throw err;
         var dbo = db.db("test");
             dbo.collection("UserTable").insertOne(req.body, function (err, res) {
               if (err) throw err;
                flag = true;
              db.close();
            });
        });
        if(flag)
          res.status(404).send({"user" : "Not OK"})
     res.status(200).send({ "user": "oK" });

});
router.route('/login').post((req,res)=>{

  MongoClient.connect(url, function (err, db) {
    var data = req.body;
    if (err) throw err;
    var dbo = db.db("test");
    console.log(req.body);
    console.log(data.email + " "+data.password);
    dbo.collection("UserTable").find({ "email":data.email, "password":data.password}).toArray(function (err, result) {
      if (err) throw err;
      if(result.length!=0){
        res.status(200).send({ "user": "ok" });
        db.close();
      }
    });//db findone ends here
  });//mongodb connection ends here

});

module.exports = router;
