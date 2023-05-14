var express = require('express');
var router = express.Router();
var model = require('../model/recipe')


router.get('/:id', (req, res) =>{
    const id = req.params.id
    model.getdata((err, rows)=> {
        if(err){
            console.log(err);
        }else{
            console.log(rows[0]);
            if(rows.length == 0){
                res.status(404)
                res.send('ERROR 404 PAGE IS NOT FOUND')
                
            }else{
                res.render('recipe', rows[0]);
            }
        }
        
    }, id)
})

module.exports = router