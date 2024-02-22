
export default class JobsModel{
    constructor(_id, _title, _role, _category, _location, _salary, _skills){
        this.id = _id, 
        this.title = _title,
        this.role = "SDE", 
        this.category = "Tech",
        this.location = _location, 
        this.salary = _salary,
        this.skills = ["Java", "Swift", "Kubernetes", "Devops"];
    }

    // RETRIEVING ALL JOBS

    static getPostedJobs(){
        return jobs;
    }

    // CREATING NEW JOB
    static addPostedJobs(jobObj){

        let newJobObj = new JobsModel(
            jobs.length+1,
            jobObj.title,
            jobObj.role,
            jobObj.category,
            jobObj.location,
            jobObj.salary,
            jobObj.applyBy
            //skills re gya

        )
        jobs.push(newJobObj); 
        console.log("This is models function data", newJobObj);
        console.log("Jobs Length after adding ", jobs.length);
    }


    // FINDING ALL JOBS WITH ID
    static jobFound(id){
        const found = jobs.find((job) => job.id == id)
        console.log(found);
        return found;
    }

    //! UPDATE JOB IS HAULTED BECAUSE IT HAS SMAME SKILL PROBLEM
    
    // UPDATING THE JOB
    // static update(jobObj){
    //      const indexOfJob = jobs.findIndex( job => job.id == jobObj.id);
    //      jobs[indexOfJob] = jobObj;
    // }
    
    // DELETING A JOB
    static delete(id){
        const index = jobs.find( (job) => job.id == id);
        jobs.splice(index, 1);
    }
}

    

var jobs = [
    {
        "id": "1",
        "title": "Coding Ninja",
        "category" : "Tech",
        "role": "SDE",
        "location" : "Gurgaon Remote",
        "salary" : "8",
        "skills" : [
            "React", "Node", "JS", "SQL"
        ],
        "numOfPositions" : "5",
        "applyBy" : "30-10-2023"
    },
    {
        "id": "2",
        "title": "Go Digit",
        "category" : "Tech",
        "role": "Angular Developer",
        "location" : "Pune On-Site",
        "salary" : "6",
        "skills" : [
            "Angular", "Node", "Express", "SQL"
        ],
        "numOfPositions" : "5",
        "applyBy" : "12-10-2023"
    },
    {
        "id": "3",
        "title": "Coding Ninja",
        "category" : "Tech",
        "role": "SDE",
        "location" : "Gurgaon Remote",
        "salary" : "14",
        "skills" : [
            "Flutter", "Bun", "JS", "Excel"
        ],
        "numOfPositions" : "5",
        "applyBy" : "2-10-2023"
    }
]