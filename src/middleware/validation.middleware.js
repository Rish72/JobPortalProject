

const validateReq = (req, res, next) => {
    const data = req.body;
    let errors = []
    // VALIDATION OF DATA COMING FROM REQ BODY
    const {salary, numOfPositions, title} = req.body ;
    if(!title || title.trim() == "" ){
        errors.push("Enter Valid Name")
    }
    if(parseFloat(salary) < 4){
        errors.push("salary should be greater than 4 LPA")
    }
    if(parseFloat(numOfPositions) < 0){
        errors.push("Number of Positions should be minimum of 5")
    }
    if(errors.length > 0){
        return res.render("postjob", {errorMsg : errors})
    }

    next();
}
export default validateReq;