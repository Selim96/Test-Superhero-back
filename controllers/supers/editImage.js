const { Superhero } = require("../../models");
const fs = require("fs/promises");
const path = require("path");

const picDirection = path.join(__dirname, "../../", "public");

const editImage = async (req, res) => {
    const { superId } = req.params;
    const { imageToDelete } = req.body;
    const arrayImages = req.files;
    let arrayToRecord = [];

    const {images: curentImages} = await Superhero.findById(superId);

    if (imageToDelete) {
        const indexToDel = curentImages.indexOf(imageToDelete);
        
        curentImages.splice(indexToDel, 1);

        const pathToDelete = path.join(picDirection, imageToDelete);
        fs.unlink(pathToDelete);
        console.log("delete image")
    };

    if (arrayImages.length !== 0) {
        arrayImages.forEach((element) => {
        const { filename, path: tempPath } = element;
        const [extension, imageName] = filename.split(".").reverse();
        const name = `${imageName}.${extension}`;
        
        const newPath = path.join(picDirection, "pictures", name);
        fs.rename(tempPath, newPath);
        const imageUrl = path.join("pictures", name);
        curentImages.push(imageUrl);
        console.log("add image")
    });
    };

    arrayToRecord = [...curentImages];
    
    const result = await Superhero.findByIdAndUpdate(superId, { images: arrayToRecord }, {new: true});
    res.json({images: result.images});
}

module.exports = editImage;