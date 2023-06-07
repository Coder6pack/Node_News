import { render } from "ejs";
import pool from "../configs/connectDB"
const session = require('express-session');

const getHomePage = async (req,res)=>{
     const [rows, fields] = await pool.execute('SELECT * FROM `danhmuc`');
     console.log("data:",rows)
     return res.render('pages/layout',{content:'index'});

}

const getSinglePage = (req,res) =>{
    return res.render('pages/layout',{content:'single_page'})
}

const getErrorPage = (req,res)=>{
    return res.render('pages/layout',{content:'error_404'})
}

const getContactPage = (req,res) =>{
    return res.render('pages/layout',{content:'contact'})
}

const getLoginPage = (req,res) =>{
    return res.render("pages/layout",{content:'login'})
}
const createNewContact = async(req,res) =>{
    let {name,email,message} = req.body;
    await pool.execute('INSERT INTO lienhe(name,email,mes) VALUES(?,?,?)',[name,email,message])
    return res.redirect('/contact.html')
}
const getAuth = async(req,res) =>{
    let account = req.body.account
    let password = req.body.password
    console.log(account,password);
    if(account && password){
       await pool.query('select * from user where account = ? and password = ?',[account,password],(err,result,fields) =>{
            if(err) throw err;
            if(result.length > 0){
            return res.redirect('/')
            } else {
                response.send('Incorrect Username and/or Password!');
			}			
			return response.end();
        })
    }
}

const getUser = async (req,res) =>{
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    return res.render("pages/layout",{content:'User',dataUser:rows})
}

const deleteUser = async (req,res) =>{
    let userId = req.body.userId
    await pool.execute(`delete from user where id =?`,[userId])
    return res.redirect('/')
}

const editUser = async(req,res) =>{
    let id = req.params.id
    console.log(id);
    let [user] = await pool.execute('select * from user where id =?',[id])

    return res.render('pages/layout',{content:'updateUser',dataUser:user[0]})
}

const updateUser = async(req,res) =>{
    
    let {name,email,account,password,quyen,id} = req.body
    await pool.execute('UPDATE user SET name =?,email=?,account=?,password=?,quyen=? Where id=?',[name,email,account,password,quyen,id])
    return res.redirect('/')
}

const addUser = async(req,res)=>{
    let {name,email,account,password,quyen} = req.body
    await pool.execute('INSERT INTO user(name,email,account,password,quyen) VALUES(?,?,?,?,?)',[name,email,account,password,quyen])
    return res.redirect("/")
}
module.exports ={
    getHomePage,
    getSinglePage,
    getErrorPage,
    getContactPage,
    createNewContact,
    getLoginPage,
    getAuth,
    getUser,
    deleteUser,
    editUser,
    updateUser,
    addUser
}