import express = require('express')

const app = express()

let ejs = require('ejs');
import path = require('path');
app.use(express.static(path.join(__dirname, '/public')))
// import metrics = require('./metrics.js');
import {MetricsHandler} from './metrics';

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');


const port: string = process.env.PORT || '8080'

app.get('/metrics.json', (req, res) => {
    MetricsHandler.get((err, data)=>{
        if(err) throw err
        res.status(200).json(data)
    });
  })

  app.get('/hello/:name', (req, res) => 
    res.render('hello.ejs', {name: req.params.name})
  )


  // app.get('/', (req: any, res: any) => {
//   res.write('Hello world')
//   res.end()
// })

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})




// https://inspector.swagger.io/builder
// https://ejs.co/
// https://github.com/adaltas/ece-nodejs/tree/2019-fall-5-modules
// https://www.gatsbyjs.org/
// https://blog.bitsrc.io/benchmarking-angular-react-and-vue-for-small-web-applications-e3cbd62d6565