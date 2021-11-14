const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(cors());
const con=mysql.createConnection({
   host: 'localhost',
    user:'root',
    password:'Abhishek9991361402'
});
con.connect((err)=>{
    if(err)
        console.log('There is something error in the connection as: '+err);
    else{
        console.log('Connected sucessfully done');
    }
});
if(con){
con.query('use yogaappdata');
const que='CREATE TABLE IF NOT EXISTS USER_DATA(PHONE_NO VARCHAR(10) PRIMARY KEY,NAME VARCHAR(30) NOT NULL,AGE INT NOT NULL,BATCH VARCHAR(10))';
const que2='CREATE TABLE IF NOT EXISTS SUBS_DETAIL(PHONE_NO VARCHAR(10),MONTH INT,YEAR INT,FOREIGN KEY (PHONE_NO) REFERENCES USER_DATA(PHONE_NO))';
    con.query(que);
    con.query(que2);
}


app.use(bodyParser.json());
app.get('/',(req,res)=>{ console.log('Hi im in');  res.send('<h1>Home page request</h1>')});
app.get('/get_user_data',(req,res)=>{
    console.log('get a request to get data donors data...');
    const que2="SELECT * FROM USER_DATA";
    con.query(que2,(err,result,feilds)=>{
        if(err)
           res.send("some error on server side");
        else{
            if(result.length!=0){
                let d=new Date();
                let month=d.getMonth();
                let year=d.getFullYear();
                const que3="SELECT * FROM SUBS_DETAIL WHERE PHONE_NO='"+req.body.mobile+"'"+" AND MONTH="+month+" AND YEAR="+year;
                con.query(que3,(err,result,feilds)=>{
                    if(err){
                        res.send("SERVER ERROR");
                    }else{
                        if(result.length()!=0){
                            res.send("YOU ARE ALREADY SUBSCRIBED FOR THIS MONTH");
                        }else{
                            res.send("You do not subscribe for this month")
                        }
                    }
                });
            }else{
                con.query(que,(err,result,feilds)=>{
                    if(err)
                    res.send("INSERTION ERROR");
                    else
                    res.send("You are not subscribed for this month");
                });
            }
        }
        
    });
});
app.post('/signup',(req,res)=>{
    const que='INSERT INTO USER_DATA VALUES('+"'"+req.body.mobile+"'"+","+"'"+req.body.name+"'"+","+"'"+req.body.age+"','"+req.body.batch+"'"+")";
    const que2="SELECT * FROM USER_DATA WHERE PHONE_NO='"+req.body.mobile+"'";
    con.query(que2,(err,result,feilds)=>{
        if(err)
           res.send("some error on server side");
        else{
            if(result.length!=0){
                let d=new Date();
                let month=d.getMonth();
                let year=d.getFullYear();
                const que3="SELECT * FROM SUBS_DETAIL WHERE PHONE_NO='"+req.body.mobile+"'"+" AND MONTH="+month+" AND YEAR="+year;
                con.query(que3,(err,result,feilds)=>{
                    if(err){
                        res.send("SERVER ERROR");
                    }else{
                        if(result.length!=0){
                            res.send("YOU ARE ALREADY SUBSCRIBED FOR THIS MONTH");
                        }else{
                            const que4="INSERT INTO SUBS_DETAIL VALUES('"+req.body.mobile+"','"+month+"','"+year+"')";
                            con.query(que4,(err,result,feilds)=>{
                                if(err){
                                    res.send("INSERTION ERROR");
                                }else{
                                    res.send("SUBSCRIPTION DONE SUCCESSFULLY");
                                }
                            });
                        }
                    }
                });
            }else{
                let d=new Date();
                let month=d.getMonth();
                let year=d.getFullYear();
                const que4="INSERT INTO SUBS_DETAIL VALUES('"+req.body.mobile+"','"+month+"','"+year+"')";
                con.query(que,(err,result,feilds)=>{
                    if(err)
                    res.send("INSERTION ERROR");
                    
                });
                con.query(que4,(err,result,feilds)=>{
                    if(err){
                        res.send("INSERTION ERROR");
                    }else{
                        res.send("SUBSCRIPTION DONE SUCCESSFULLY");
                    }
                });
                
            }
        }
        
    });
});
const PORT=process.env.PORT || 5000;

 

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })


}

app.listen(PORT,err=>{console.log('Listen to port number 5000')});