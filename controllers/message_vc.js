const message = require('../model/message')

function MessageList(req,res){
    message.find()
    .then((items)=>{
        return res.json({
            items : items
        })
    })
}

module.exports = MessageList;