const express = require('express')

const router = express.Router()

router.get('/product',(req,res)=>{
    
    res.send('Heelo reoutes productdfdfdfdfddfd  555 5555 5 5 5')
    console.log('hello from api product')
})

module.exports = router