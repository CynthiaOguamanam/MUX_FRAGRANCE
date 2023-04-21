const Model = require ('../Model/model');
const ValidateMe = require ('../validate')

const createHandle = async (req, res) => {
    try{

        const {error} = ValidateMe.validateUser(req.body)
        if(error){
            res.status(409).json({
                status:"validation failed",
                message: error.details[0].message
            })
        }
        const newHandle = await Model.create({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            course: req.body.course,
            institution: req.body.institution,
            married: req.body.married,
            phoneNo: req.body.phoneNo
        })
        res.status(200).json({
            status: 'successfully created',
            data: newHandle
        })
    }catch(error){
        res.status(404).json({status: 'failed', message: error.message})
    }
}


    const GetAllUsers = async (req, res) => {
        try{
            const GetUsers = await Model.find(req.body)

            res.status(200).json({
                status:"fetched all successfully",
                data: GetUsers
            })
        } catch(error){
            res.status(400).json({status:'failed to create', message: error.message})
        }
    }

    const updateOneUser =  async (req, res) => {
        try{

            const {error} = ValidateMe.validateUser(req.body)
            if(error){
                res.status(409).json({
                    status:"validation update failed",
                    message: error.details[0].message
                })
            }
            const id = req.params.id;
            const oneUpdate = await Model.findByIdAndUpdate(id, req.body, {new:true})

            res.status(200).json({
                status: 'updated successfully',
                data: oneUpdate
            })
        }catch(error){
            res.status(404).json({status:'unable to update', message: error.message})
        }
    }

    const GetOneUser = async (req, res) => {
        try{
            const id = req.params.id;
            const OneUser = await Model.findById(id);
            res.status(200).json({
                status:"User Found",
                data: OneUser
            })
        }catch(error){
            res.status(404).json({status:404, message: error.message})
        }
    }

    const deleteUser = async (req, res) => {
        try{
            const id = req.params.id;
            const removeUser = await Model.findByIdAndDelete(id);

            res.status(200).json({
                status:"deleted successfully",
                data: removeUser
            })
        } catch(error){
            res.status(500).json({
                status:"Deletion failed",
                message: error.message
            })
        }
    }

module.exports = {
    createHandle,
    GetAllUsers,
    updateOneUser,
    GetOneUser,
    deleteUser
}