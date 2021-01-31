const mysql= require('mysql')

let pool = mysql.createPool({
    host:process.env.MYSQL_DB_ENDPOINT,
    ssl:true,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:"TapPortal"
})

pool.getConnection((err,connection)=>{
    if(err){
        console.log(err);
    } 
    else console.log("Database Connected");

    if(connection) connection.release();
        return;
});


// Table for Admin
pool.query(`CREATE TABLE ADMIN
(
    RegNo VARCHAR(21) PRIMARY KEY
    Name VARCHAR(255) 
    Email VARCHAR(255) 
    Password VARCHAR(255)
    Branch VARCHAR(255)   
)`,
function(err,results){
    if(err)
    console.log(err)
    else
    console,log(results)
});

//TABLE FOR USER
pool.query(`CREATE TABLE USER
( 
  RegNo VARCHAR(21) PRIMARY KEY
  Name VARCHAR(255)
  Branch VARCHAR(255)
  Email VARCHAR(255)
  Password VARCHAR(255)
  CV VARCHAR(255)
  NoOfPlacements INT
  Cgpa INT  
)`,
function(err,results){
    if(err)
    console.log(err)
    else
    console,log(results)
});

//TABLE FOR LOG
pool.query(`CREATE TABLE LOGGER
(
  Int auto increment
  User id VARCHAR(255)
  log VARCHAR(255)
  Time stamp TIMESTAMP
)`,
function(err,results){
    if(err)
    console.log(err)
    else
    console,log(results)
});

//TABLE FOR COMPANY
pool.query(`CREATE TABLE COMPANY
(
    Id VARCHAR(255) PRIMARY KEY
    Date of visit DATE
    Name VARCHAR(255)
    Last date of apply DATE
    Eligible branches VARCHAR(255)
    Package offers INT
    MINIMUM CGPA INT
    Description VARCHAR(500)
    PDF VARCHAR(1000)
)`,
function(err,results){
    if(err)
    console.log(err)
    else
    console,log(results)
});

//TABLE FOR APPLIED COMPANY
pool.query(`CREATE TABLE APPLIED COMPANY
(
    COMPANY_ID VARCHAR(255) PRIMARY KEY
	RegNo VARCHAR(21)
	Status VARCHAR(255)
)`,
function(err,results){
    if(err)
    console.log(err)
    else
    console,log(results)
});
module.exports=pool;
