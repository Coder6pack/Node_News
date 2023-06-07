const getHomePage = (req,res)=>{
    return res.render('pages/layout',{content:'index'})
}

module.exports ={
    getHomePage
}