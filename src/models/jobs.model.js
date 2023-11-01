
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

    static getPostedJobs(){
        return jobs;
    }

    static addPostedJobs(jobObj){

        let newJobObj = new JobsModel(
            jobs.length++,
            jobObj.title,
            jobObj.role,
            jobObj.category,
            jobObj.location,
            jobObj.salary,
            jobObj.applyBy
            //skills re gya

        )
        console.log("newJob", newJobObj);
        jobs.push(newJobObj)

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
console.log(jobs);