const getcontacts = (req , res) => {
    res.status(200).json({'message':'Get all contacts'})
}

const createcontacts = (req , res) => {
    console.log("Te request body is :", req.body);
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All field are required")
    }
    res.status(201).json({'message':'create new contacts'})
}

const getsinglecontacts = (req , res) => {
    res.status(200).json({'message':`Get contacts for ${req.params.id}`})
}

const updatecontacts = (req , res) => {
    res.status(200).json({'message':`Update contacts for ${req.params.id}`})
}

const deletecontacts = (req , res) => {
    res.status(200).json({'message':`delete contacts for ${req.params.id}`})
}


module.exports = {getcontacts,createcontacts,getsinglecontacts,updatecontacts,deletecontacts}