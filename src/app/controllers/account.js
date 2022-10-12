
let db = require("../db/config");

class Account {
    //[POST] /accounts/login
    login(req, res, next) {
        try {
            let query = "SELECT * FROM blogreview.useraccount";

            let {email, password} = req.body;

            db.query(query, function (err, result) {
                if (err) throw err;
                let indexUser = result.findIndex(function (user) {
                    return user.email == email && password == user.password;
                });
                if(indexUser < 0){
                    return res.status(401).send("May be your E-mail or password was wrong!");
                }else{
                    return res.status(200).send("Login success");
                }
            });
        } catch (error) {
            // console.log(error);
        }
    }

    //[POST] /accounts/login
    register(req, res, next) {
        try {
            let query = "SELECT * FROM blogreview.useraccount";

            let {username,email, password,avartar} = req.body;

            db.query(query, function (err, result) {
                if (err) throw err;
                let indexUser = result.findIndex(function (user) {
                    return user.email == email;
                });
                if (indexUser > -1) {
                    return res.status(401).json({message:"Email exsit"});
                }

                query = `INSERT INTO blogreview.useraccount(username,email,password,avartar) VALUES ("${username}","${email}","${password}",200)`;
                db.query(query, function (err, re) {
                    if (err) throw err;
                    return res.status(200).json({message:"Register successful",
                User: re});
                });
            });
        } catch (error) {
            console.log(error);
        }
    }


    //[POST] /accounts/test
    async showAllUserInDB(req, res, next) {
        try {
            let query = "SELECT * FROM blogreview.useraccount";

           let email = "quocssanh@gmail.com";
            db.query(query, function (err, result) {
                if (err) throw err;
               let indexUser = result.findIndex(function (user) {
                    return user.email == email;
                });
                if(indexUser == -1){
                    return res.send("Email not exsit");
                }else{
                    return res.send("Email exsit");
                }
            });
        } catch (error) {
            // console.log(error);
        }
    }
}

module.exports = new Account();