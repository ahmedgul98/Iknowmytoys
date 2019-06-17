var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(express.static("public"));
app.set('view engine','ejs');
var session=require("express-session");
var admin= require("firebase-admin");

var serviceAccount=require("./ecommerce-admin-panel-firebase-adminsdk-sw7hu-3290a76e82");
var firebaseAdmin=admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:"https://ecommerce-admin-panel.firebaseio.com"
})

var database=firebaseAdmin.database();

app.get("/",function(req,res){
    var ref= database.ref("/customer");
    ref.once('value',function(snapshot){
        //console.log(snapshot.val())
        // var name=snapshot.child("name").val();
        // var quantity=snapshot.child("qyt").val();
        
    //    $("#abc").append("<tr> <td>" + name + email + "</tr> </td>")
        var data=snapshot.val();
        console.log(data.custID);
        if(!data){ 
            data={};
        }
        res.render("main.ejs",{ customer: data  });
    })
})
app.get("/ordertables",function(req,res){
    var ref=database.ref("/order");
    ref.once('value',function(snapshot){
        var data=snapshot.val();
        if(!data){
            data={};
        }
     res.render("ordertable.ejs",{order: data });
    })
})
app.post("/ordertables/:id",function(req,res){
    // console.log(req.params.id);
      var id=req.params.id;
     var ref=database.ref("/order/" + id);
     res.render("/ordertables",function addstatus(){
         ref.update({ status : req.body.Status});
    })
    res.redirect("/ordertables");
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started");
})
