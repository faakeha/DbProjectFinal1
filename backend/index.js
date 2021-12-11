const express = require('express');

const bodyparser = require('body-parser');

const cors = require('cors');

const mysql = require('mysql2');
const e = require('express');

 

const app = express();

 

app.use(cors());

app.use(bodyparser.json());

app.listen(3000, () =>{

    console.log("server is running");

});

 

//db connection

const db = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: '',

    database: 'probuy',

    port: 3307,

    multipleStatements: true

});

 

//checking connection

db.connect(err=> {

    if(err) {console.log(err, 'db_err');}

    console.log('db connected...');

});

/*

app.get('/getcustomer', (req, res)=> {

    let qr = `select * from customer`;

 

    db.query(qr, (err, result) => {

        if(err) {console.log(err); }

        if(result.length > 0) {

            res.send({

                message: "all customers",

                data:result

            });

        }

    });

});

*/

//get single data

/*app.get('/getcustomer/:id', (req, res) => {

    let gid = req.params.id;

    let qr = `select * from customer where Customer_ID = ${gid}`;

 

    db.query(qr, (err, result) => {

        if(err) {console.log(err); }

        if(result.length > 0) {

            res.send({

                message: "single data",

                data:result

            });

        }

        else{

            res.send({

                message: "data not found"

            });

        }

 

    });

});*/

 

//insert into customer (sign up)

app.post('/getcustomer' , (req, res) => {

    console.log('createbody ', req.body);



    let fname = req.body.FirstName;

    let lname = req.body.LastName;

    let email = req.body.Email;

    let pass = req.body.Password;

    let contact = req.body.Contact;



    let qr = `insert into Customer (First_Name, Last_Name, Email, Password, Contact)

                values ('${fname}', '${lname}', '${email}', '${pass}', '${contact}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        //console.log('resullt', result);

        res.send({

            message: 'success'

        });



    });

});

 
 

//login

app.get('/getcustomer/:email/:pass', (req, res) => {

   console.log('createbody ', req.params.email, req.params.pass);
 
    let em = req.params.email;
    let pass = req.params.pass;

    let qr = `select concat(concat(First_Name, ' '), Last_Name) as Customer_Name from customer
                where Email = '${em}'; select concat(concat(First_Name, ' '), Last_Name) as Customer_Name from customer where Email = '${em}' and Password = '${pass}'`;            


                db.query(qr, (err, result) => {
                    if(err) {console.log(err); }

                    console.log('result', result[0]);
                    console.log('result', result[1]);

                    if(result[0].length > 0){
                        if(result[1].length > 0){
                            res.send({
                                message: 'success',
                                data:result[1]
                            });
                        }

                        if(!(result[1].length > 0)){
                            res.send({
                                message: 'error'
                            });
                        }
                    }

                    if(!(result[0].length > 0)){
                        res.send({
                            message: 'user not found'
                        });
                    }

                    
                   
                
                    });
                

});


//review

app.post('/getreview' , (req, res) => {

    console.log('createbody ', req.body);

 

    let email = req.body.Email;

    let prodid = req.body.Product_ID;

    let rating = req.body.Rating;

    let comment = req.body.Comment;

 

    let qr = `insert into Review (Customer_ID, Product_ID, Rating, Comment)

                values ((select Customer_ID from Customer where Email = '${email}'), '${prodid}', '${rating}', '${comment}')`;

    db.query(qr, (err, result) => {

        if(err) {console.log(err); }

        //console.log('resullt', result);

        res.send({

            message: 'data inserted'

        });

 

    });

});

 

//insert into address

app.post('/getaddress' , (req, res) => {

    console.log('createbody ', req.body);

    let city = req.body.City;
    let area = req.body.Area;
    let street = req.body.Street;
    let house_no = req.body.House_no;
    let contact = req.body.Contact;
 
    let qr = `insert into address (City, Area, Street, House_Number, Customer_ID)
                values ('${city}', '${area}', '${street}', '${house_no}', (select Customer_ID from Customer where Contact = '${contact}'))`;

                db.query(qr, (err, result) => {
                    if (err) { console.log(err); }
                    //console.log('resullt', result);
                    res.send({
                        message: 'success'
                    
                    });
                });
});

//insert into orders

app.post('/getorders' , (req, res) => {

    console.log('createbody ', req.body.Contact);

    let contact = req.body.Contact;
    //select CONVERT(varchar(10),getdate(),120) as ['YYYY-MM-DD'] from dual
   
    let qr = `insert into orders (Order_Date, Customer_ID, Address_ID, Order_Total)

                values (

                   (sysdate()),
                    
                  (select Customer_ID from Customer where Contact = '${contact}'),

                  (select Address_ID from Address where Customer_ID = (select Customer_ID from Customer where Contact = '${contact}') limit 1),

                  (select SUM(Line_Total) from Cart)

                  )`;

 

    db.query(qr, (err, result) => {

        if(err) {console.log(err); }

        console.log('resullt', result);

        res.send({

            message: 'data inserted'

        });

 

    });

});

 

//insert into tracker

app.post('/gettracker', (req, res) => {

    console.log('createbody' , req.body);

    let contact = req.body.Contact;
    let qr = `insert into tracker(Customer_ID, Order_ID, Order_Date, Estimated_Delivery_Date) values
                (
                (select Customer_ID from Customer where Contact = '${contact}'),
                (select max(Order_ID) from orders where Customer_ID = (select Customer_ID from Customer where Contact = '${contact}')),
                (select MAX(Order_Date) from Orders where Customer_ID = (select Customer_ID from Customer where contact = '${contact}')),
                (select MAX(Order_Date)+5 from Orders where Customer_ID = (select Customer_ID from Customer where Contact = '${contact}'))                
                )`;

    db.query(qr, (err, result) => {
        if(err) {console.log(err); }
        res.send({
            message: 'success'
        });
    });
});

//get products
app.get('/getproduct/:categoryid/:brand', (req, res) => {
    console.log('createbody getting products', req.params.categoryid, req.params.brand);
    console.log("beverages: " , req.params.categoryid);
    let catid = req.params.categoryid;
    
    let brandname = req.params.brand;
    const myArray = brandname.split(",");
    
    var queries = '';
    for (let i = 0; i < myArray.length; i++){

    
    let qr = `select p.Product_ID as ProductID, p.product_name as ProductName, p.price as ProductPrice, p.Image_string from Product p where p.category_id = '${catid}' and p.product_name like '${myArray[i]}%'` ; 
                queries = queries.concat(qr, ';');
   
            }
            console.log("queries: " ,queries);

            db.query(queries, (err, result) => {

                if(err) {console.log(err); }

            if(result.length > 0) {
            res.send({
            
                message: "all products",

                data:result

            });
        }
        
        });
});

//insert into cart
app.post('/getcart' , (req, res) => {
    console.log('createbody ', req.body);
    let prodid = req.body[0];  
    let qty = parseInt(req.body[1], 10);

     let qr = `insert into cart (Product_ID, Qty, Price ,Line_total)
                values(
                      '${prodid}',
                      ${qty},
                      (select Price from Product where Product_ID = '${prodid}'),
                      (select Price from Product where Product_ID = '${prodid}')*${qty}
                      )`;

        db.query(qr, (err, result) => {
        if(err) {console.log(err); }
        res.send({
            message: 'inserted into cart'
        });
    });
});

//get cart
app.get('/getcart', (req, res) => {
    
    let qr = `select p.Image_string as Image, p.Product_ID, p.Product_Name, c.Qty, c.Line_Total from cart c, product p where c.Product_ID = p.Product_ID; select count(*) as cnt, sum(Line_Total) as total from cart`;
    db.query(qr, (err, result) => {

        if(err) {console.log(err); }

        console.log('result', result[1]);

        res.send({

            message: 'data get',
            data:result

        });

    });  


});

//delete from cart
app.delete('/getcart', (req, res) => {
    console.log('createbody ', req.params.prodid);

    //let pid = req.params.prodid;
    let qr = `delete from cart`;

    db.query(qr, (err, result) => {

        if(err) {console.log(err); }

        console.log('result', result);

        res.send({

            message: 'data deleted'

        });

    });  
});

//update cart
app.put('/getcart', (req,res) =>{
    console.log('createbody ', req.body[1]);

    let pid = req.body[0];
    //let price = req.body.Price;
    let q = req.body[1];
    let qr = `update cart set Qty = '${q}', Line_Total = Price*'${q}' where Product_ID = '${pid}'`;

    db.query(qr, (err, result) => {

        if(err) {console.log(err); }

        console.log('result', result);

        res.send({

            message: 'data updated'

        });

    });  

});

//get tracker
app.get('/gettracker/:email', (req, res) => {
    console.log('createbody' , req.params.email);
    //how to pick the customer id of the current customer? do we do it with email like we did last time
    let email = req.params.email;
    let qr = `select max(Tracking_ID) as Tracking_ID, Order_Date, Estimated_Delivery_Date from tracker where Customer_ID 
                = (select Customer_ID from Customer where Email = '${email}') `;

    db.query(qr, (err, result) => {
        if(err) {console.log(err); }
        console.log('resullt', result);
        res.send({
            message: 'data get',
            data:result
        });
    });

});




