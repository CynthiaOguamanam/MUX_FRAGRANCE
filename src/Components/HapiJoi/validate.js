//this is done externally in this file for reuseable purpose
//import the validator library
const HapiJoi = require('@hapi/joi')

//create your validator function
//in charge of validating input...
const validateUser = (data) => {
    
const studentConstraint = HapiJoi.object({
    //when you have two or more methods in one line is a METHOD CHAIN...
    //e.g your router, your , .connect******(url).then***.catch etc
    firstName: HapiJoi.string().required().min(3).max(35),
    middleName: HapiJoi.string().required().min(3).max(35),
    lastName: HapiJoi.string().required().min(3).max(35),
    course: HapiJoi.string().required(),
    institution: HapiJoi.string().required(),
    married: HapiJoi.boolean(),
    phoneNo: HapiJoi.number().required()
})
return studentConstraint.validate(data)
}

module.exports.validateUser = validateUser
