const user_router = require('express').Router

user_router.get('/', (req, res)=>{
    console.log('get')
    res.write('hi')
    res.end()
})


module.exports = user_router