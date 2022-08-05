const { Superhero } = require("../../models");
const fs = require("fs/promises");
const path = require("path");

const picDirection = path.join(__dirname, "../../", "public", "pictures");

const create = async (req, res) => {
    console.log(req.files)

    const arrayOfImagesUrl = [];
    const arrayImages = req.files;

    if (arrayImages.length !== 0) {
        console.log("you add images")

        arrayImages.forEach((element) => {
            const { filename, path: tempPath } = element;
            const [extension, imageName] = filename.split(".").reverse();
            const name = `${imageName}.${extension}`;
            const newPath = path.join(picDirection, name);

            fs.rename(tempPath, newPath);
            const imageUrl = path.join("pictures", name);
            arrayOfImagesUrl.push(imageUrl);            
        });
    };
    console.log(arrayOfImagesUrl)
    const result = await Superhero.create({ ...req.body, images: arrayOfImagesUrl });
    res.status(201).json(result);
}

module.exports = create;