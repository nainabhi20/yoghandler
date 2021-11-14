# yoghandler

-------BASIC ABOUT PROJECT------
Technology used:-
Front-end:- React.js
Backend:- Express.js, Node.js
Database used:- MYSQL
--------------------------------


--------PREREQUISITE TO RUN THE APPLICATION ON YOUR COMPUTER------

   1) Node.js should be installed in your machine
   2) npm should be installed in your machine
   3) MYSQL database should be installed in your machine
   $) git should be installed on your machine
   
------------------------------------------------------------------


-------------------------STEPS TO RUN THE APPLICATION ON YOUR MACHINE-----------------------


#step1
       -> make a folder in your machine & initialize the git into it

#step2
       ->Clone the code from the github to this folder
         Link for clone:-  https://github.com/nainabhi20/yoghandler.git  
         
#step3
      ->Open index.js file
      
      ->On line number 9 change the username of MYSQL with your username
      
      On line number  10 change the password of MYSQL with your password

        
#step4
       ->Get inside into your created folder into command promt(cmd) and then run the command
       
              command->   node index.js
              
              ( This command runs the Node.js code and start listening to PORT NUMBER 5000
              
#step5
      -> Get into the ./client folder into command promt(cmd) and then run the command
              command->   npm start
              
              (This command runs your React.js(front-end) script)
       
#step6
     -> Now Application will be running on your machine


---------------------------------------------------------------------------------------------





-----DATABASE SCHEMA----------------------------------------------------------------------------------------------------------------

'CREATE TABLE IF NOT EXISTS USER_DATA(PHONE_NO VARCHAR(10) PRIMARY KEY,NAME VARCHAR(30) NOT NULL,AGE INT NOT NULL,BATCH VARCHAR(10))'


'CREATE TABLE IF NOT EXISTS SUBS_DETAIL(PHONE_NO VARCHAR(10),MONTH INT,YEAR INT,FOREIGN KEY (PHONE_NO) REFERENCES USER_DATA(PHONE_NO))'

 
 I create two tables first one for storing the user data and another one is to store the data of user monthly subscription.


--------------------------------------------------------------------------------------------------------------------------------------



#OTHER PROJECT LINK:-
       https://github.com/nainabhi20/covid19






--ABOUT ME-----------------------------------------------------------------------------------
Hi, I am Abhishek
I am a pre-final year bechlors student at National Institute of Technology, Kurukshetra. I am
passionate about learning new technology.I am a self-motivated person and used my most of time
in developing carrier.
----------------------------------------------------------------------------------------------

          
              
          

