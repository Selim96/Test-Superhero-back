const { Superhero } = require("../../models");
const fs = require("fs/promises");
const path = require("path");

const picDirection = path.join(__dirname, "../../", "public");

const editImage = async (req, res) => {
    const { superId } = req.params;
    const { imageToDelete, cuurentImages } = req.body;
    const arrayImages = req.files;
    const arrayOfImagesUrl = [];
    let arrayToRecord = [];

    if (imageToDelete) {
        const indexToDel = cuurentImages.indexOf(imageToDelete);
        
        cuurentImages.splice(indexToDel, 1);
        arrayToRecord = cuurentImages;

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
        arrayOfImagesUrl.push(imageUrl);
        console.log("add image")
    });
    };

    arrayToRecord = [...cuurentImages, ...arrayOfImagesUrl];
    
    const result = await Superhero.findByIdAndUpdate(superId, { images: arrayToRecord }, {new: true});
    res.json({images: result.images});
}

module.exports = editImage;