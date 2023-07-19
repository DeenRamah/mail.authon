



const signup =(req, res) => {
    res.status(201).json("signup Successfully....!");
}


const getbill = (req, res) => {
    res.status(201).json("getBill Successfully");
}



module.exports = {
    signup,
    getbill
}