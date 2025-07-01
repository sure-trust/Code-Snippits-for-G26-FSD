var nm=require('nodemailer')
var transporter=nm.createTransport(
    {
       service:"gmail",
       port:597,
       secure:false,
       auth:{
        user:"pallapusandhya04@gmail.com",
        pass:"xntu dodg deew hgfd"
       }


    }
)
var options={
    from:"pallapusandhya04@gmail.com",
    to:"rr200608@rguktrkv.ac.in",
    subject:"Testing node mails",
    html:`<h1>Hello sir! Good Evening.. </h1>
          <h2>Happy Weekend</h2>
    <img src="cid:greet">`,
     
    attachments:[

    {
     filename:"Greeting",
     path:"https://images.pexels.com/photos/1052150/pexels-photo-1052150.jpeg",
     cid:"greet",
    }
    ]

}
transporter.sendMail(
    options,function(err,data){
        if(err){
            console.log("Error",err)
        }
        else{
            console.log("sent")
        }

    }
)