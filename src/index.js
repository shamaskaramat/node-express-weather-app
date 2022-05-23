const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const PORT = process.env.PORT || 8000
app.set('view engine', 'hbs');
const static_path = path.join(__dirname , "../public");
const template_path =  path.join(__dirname , "../templates/views");
const partials_path =  path.join(__dirname , "../templates/partials");
app.set('views' , template_path)
hbs.registerPartials(partials_path)
app.use(express.static(static_path))
app.get('/', (req, res)=>{
    res.render("")
    res.end;
})
app.get('/about', (req, res)=>{
    res.render('about')
    res.end;
})
app.get('/weather', (req, res)=>{
    res.render('weather')
    res.end;
})
app.get('*', (req, res)=>{
    res.render('404error' , {
        errorPage:"Opps Page Not Found"
    })
    res.end;    
})
app.listen(PORT,() =>{
    console.log(`app is running on port no : ${PORT}`)
})
