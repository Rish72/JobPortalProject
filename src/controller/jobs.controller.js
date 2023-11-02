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
        const id =  req.params.id;
        const jobFound = JobsModel.jobFound(id);
        if(jobFound){
           res.render("jobPage", {job : jobFound, errorMsg: null})
        }
        else {
          res.send("JOb is not Found");
        }
    }

    getUpdatePage(req, res){
      // show when job is found using is which will be found in req.body

      const id = req.params.id;
      const jobFound = JobsModel.jobFound(id);
      if(jobFound){
         res.render("updateDetails", {job : jobFound, errorMsg: null})
      }
      else {
        res.send("Job is not Found");
      }
    }

  

    //POST JOB
    addNewJob(req, res){
        let jobs = JobsModel.getPostedJobs();
        JobsModel.addPostedJobs(req.body);
        res.render("jobs", {jobs: jobs});
    }
    //POST UPDATED JOB
    postUpdateJob(req, res){
        let jobs = JobsModel.getPostedJobs();
        JobsModel.update(req.body);
        console.log(req.body);
        res.render("jobs", {jobs: jobs});
    }


}