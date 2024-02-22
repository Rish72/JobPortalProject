import express from 'express';
import JobsController from './src/controller/jobs.controller.js';
import path from 'path';
import ejslayout from 'express-ejs-layouts';



// MIDDLEWARES
import validationMiddleware from './src/middleware/validation.middleware.js';


const app = express();

//? view engine ko set krna ek middleware bna ke view engine bna ke bd hi hum log apne path ko view engine ke sath set kr sakte h taaki vhi se direct access ho sake
app.set("view engine", "ejs")
app.set("views", path.join(path.resolve(), "src", "views"))

// Adding middleware
app.use(express.static('src/views'));
app.use(ejslayout)
app.use(express.urlencoded({extended: true}))

const jobController = new JobsController()

app.get('/', jobController.getHomePage)
app.get('/jobs', jobController.getJobs);
app.get('/postjob', jobController.getjobForm);
app.get('/jobPage/:id', jobController.getJobPage);
app.get('/delete/:id', jobController.deleteJob);

app.put('/updateDetails/:id', jobController.getUpdatePage);

app.post('/', validationMiddleware ,jobController.addNewJob);
app.post('/updateDetails', jobController.postUpdateJob);


app.listen(3000, ()=> {
    console.log("listening on 3000");
}) 