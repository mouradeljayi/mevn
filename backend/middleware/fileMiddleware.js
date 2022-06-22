const fileFilter = (req, res, file, cb) =>  {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if(!allowedTypes.includes(file.mimeType)) {
        const error = new Error("Incorrect file");
        error.code = "INCORRECT_FILETYPE";
        // Error occured
        return cb(error, false)
    }
    // Nothing went wrong
    cb(null, true)
}

module.exports = {
    fileFilter
}