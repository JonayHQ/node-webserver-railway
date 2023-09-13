import express from 'express'
import {engine} from "express-handlebars"
import * as path  from 'path'
import __dirname from './util.js'
import hbs from 'hbs'
import 'dotenv/config'

const app = express()
const port = process.env.PORT


//*handlebar
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + '/views'))
hbs.registerPartials(__dirname + '/views/partials');

//middle-ware
//*Servir contenido estatico
app.use( express.static('public'))

app.get('/', (req, res)=> {
  res.render('home.hbs', {
    nombre: 'Jonay Herrera',
    titulo: 'Curso Node'

  })

})

app.get('/generic.html', function (req, res) {
  res.render('generic.hbs', {
    nombre: 'Jonay Herrera',
    titulo: 'Curso Node'
  
 })

})


app.get('/elements.html', function (req, res) {
  res.render('elements.hbs', {
    nombre: 'Jonay Herrera',
    titulo: 'Curso Node'
  
 })
})


app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
  
})

app.listen(port)
