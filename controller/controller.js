const model = require(`../model/recipe`)

function showrecipe(req, res){

    model.getdata((err, res_data,)=>{
        err?console.log(err):console.log(res_data)
    })
}

module.exports = {
    showrecipe
}