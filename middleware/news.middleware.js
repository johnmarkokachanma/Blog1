const checkNumber = (req, res, next) => {
     try {
        const {number} = req.query;
        if(number < 5) res.send("You are not up to 5");
        next();
     } catch (error) {
         console.log(error.message);
     }
}

module.exports = checkNumber;