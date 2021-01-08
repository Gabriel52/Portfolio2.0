const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');

dotenv.config();


// setting nodemailer
const trasnporter = nodemailer.createTransport({
    host:process.env.NODEMAILER_HOST,

    port: process.env.NODEMAILER_PORT,
    secure: false,
    auth:{
        user:process.env.NODEMAILER_USER,
        pass:process.env.NODEMAILER_PASSWORD,
    }

})

// Configurando ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/sendEmail', (req,res)=>{
    var email = req.body.email
    var message = req.body.mensagem;
    console.log(message)
  

    async function run(){
        const sendMail = await trasnporter.sendMail({
            text: `email: ${email} message: ${message} `,
            subject:'Email Portfolio',
            from:"desafiotech52@gmail.com",
            to: "gabrielbrune52@gmail.com"
        })
        try{
            console.log('email enviado com sucesso')
        }catch(error){
            console.log(error)
        }


    }
    res.redirect('/')
    return run()
})


let port = 3000
app.listen(port, (req,res)=>{
    console.log(`Aplicação rodando na porta ${port}`)
})