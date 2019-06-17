// var admin= require("firebase-admin");
// var serviceAccount=require("./ecommerce-admin-panel-firebase-adminsdk-sw7hu-3290a76e82");
// var firebaseAdmin=admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL:"https://ecommerce-admin-panel.firebaseio.com"
// })
// var database=firebaseAdmin.database();
// var status=document.getElementById("status");
// status.addEventListener("click",function(){
//     var Ref=database.ref("/order");
//     Ref.push("sooooo");    
// })

// function addstatus(status){
//     var database=firebaseAdmin.database()
//     var Ref=database.ref("/order");
//     Ref.push(status);
// }
document.getElementById("confirm");