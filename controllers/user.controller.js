const userModel = require('../model/user.model');


exports.register = async (req, res) => {
    let user = {
        uid : req.body.uid,
        userName : req.body.userName,
        emailId : req.body.emailId,
        createdAt : req.body.createdAt,
        updatedAt : req.body.createdAt
    }
    var newUser = new userModel(user);
    try{
        let response = await newUser.save();
        if(response._id){
            res.send({isRegistered : true, message : "successfully registered."});
        }
    }
    catch(error){
        res.send({isRegistered : false, message: error.message});
    }
}

exports.usersIn = async (req, res) => {
    try {
        let page = req.query.page;
        let size = req.query.size;
        if(!page){
            page = 1;
        }if(!size){
            size = 5;
        }
        let skip = (page - 1) * parseInt(size);
        const users = await userModel.find().limit(parseInt(size)).skip(skip);
        if(users.length > 0){
            res.send({
                page,
                size,
                data : users
            })
        }else{
            res.send('not found')
        }
    } catch (error) {
        res.send(error.message);
    }
}

exports.usersCount = async (req, res) =>{
    try {
        let users = await userModel.find({});
        if(users.length > 0){
            res.send({count : users.length})
        }else{
            res.send("no results found")
        }
    } catch (error) {
        res.send(error.message);
    }    
}