const path = require("path");
const CustomError = require("../errors");

const { StatusCodes } = require("http-status-codes");

// פונקציה להעלת תמונה
const uploadProductImage = async (req, res) => {
  // הוספת תנאים והערות
  if (!req.files) {
    throw new CustomError.BadRequestError("לא נמצא קובץ");
  }

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("בבקשה העלה תמונה");
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError("העלה קובץ קטן מ- 1MB");
  }

  let productImage = req.files.image;

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
