const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const hbs = exphbs.create({
    partialsDir:'views/partials'
})

app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')

app.use(express.static('views'))

const produtos = [
    {
        id:1,        
        nome:'Iphone 14',
        memoria:'256 GB',
        camera: '12 megapixel',
        chipset: 'apple A15 bionic',
        preco: 'R$ 4.800'
    },
    {
        id:2,
        nome:'Iphone 13',
        memoria:'128 GB',
        camera: '12 megapixel',
        chipset: 'apple A15 bionic',
        preco: 'R$ 4.000'
    },
    {
        id:3,        
        nome:'Iphone 12',
        memoria:'128 GB',
        camera: '12 megapixel',
        chipset: 'apple A14 bionic',
        preco: 'R$ 3.199'
    },
    {
        id:4,        
        nome:'Iphone 11',
        memoria:'64/128 GB',
        camera: '12 megapixel',
        chipset: 'apple A13 bionic',
        preco: 'R$ 2.399'
    }
]
app.get('/produtos/:id',(req,resp)=>{
    const produto = produtos[req.params.id - 1]
    resp.render('produto',{produto})
})
app.get('/',(req,resp)=>{
    resp.render('home',{produtos})
})

app.listen(3000,()=>{
    console.log('App funcionado na porta 3000')
})
