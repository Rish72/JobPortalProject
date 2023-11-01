import { log } from "console";
import JobsModel from "../models/jobs.model.js";
import path from "path";

export default class JobsController{
    
    getHomePage(req, res){
       return res.render("index")
    }

    getJobs(req, res){                  // yaha se jayegi request Model ko phir vo view ka data update krega..
        let jobs = JobsModel.getPostedJobs();
        res.render("jobs", {jobs: jobs});       // 1. args me template ka naame dete h ye 2. Jo key hum de rhe h same naam ka use krna h hum template me
    // return res.sendFile("jobs.ejs");
    } 

    getjobForm(req, res){
       return res.render("postjob", {errorMsg: null})
    }

    getJobPage(req, res){
        return res.render("jobPage")
    }


    //! ADDING JOB IS NOT IMPLEMENTED && VARIFICATION USING EXPRESS VALIDATOR MIDDLEWARE
    addNewJob(req, res){
        let data = req.body
        let jobs = JobsModel.getPostedJobs();
        console.log(data);
        JobsModel.addPostedJobs(data);
        res.render("jobs", {jobs: jobs});
    }
}