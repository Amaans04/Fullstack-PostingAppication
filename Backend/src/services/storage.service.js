const ImageKit = require('@imagekit/nodejs');
require("dotenv").config();

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(buffer) {
  try {
    const result = await imageKit.files.upload({
      file: buffer.toString("base64"),
      fileName: "image.webp",
    });

    return result;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
} 

module.exports = uploadFile;