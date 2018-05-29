import KNN from './knn.js';
import {colors_16} from './data.js';
import jimp from 'jimp';

const decolorize = filename => {

    return jimp.read(filename)
        .then(image => {

            // Create a KNN instance with our color scheme as training data
            // We use k=1 to find the single closest color
            // k > 1 wouldn't work, because we only have 1 label per training point
            const mapper = new KNN(1, colors_16.data, colors_16.labels);
            const {width, height} = image.bitmap;

            // For every pixel in the image...
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {

                    // Do some work to get the RGB value as an array: [R,G,B]
                    const originalColorHex = image.getPixelColor(x, y);
                    const originalColorRgb = jimp.intToRGBA(originalColorHex);
                    const pixelPoint = [originalColorRgb.r, originalColorRgb.g, originalColorRgb.b];

                    // Ask the KNN instance what the closest color from the scheme is
                    const closestColor = mapper.predict(pixelPoint);

                    // Then get that color in hex format, and set the pixel to the new color
                    const newColor = colors_16.data[colors_16.labels.indexOf(closestColor.label)];
                    const newColorHex = jimp.rgbaToInt(newColor[0], newColor[1], newColor[2], 255);
                    image.setPixelColor(newColorHex, x, y);

                }
            }

            const ext = image.getExtension();
            image.write(filename.replace('.'+ext, '') + '_16.' + ext);

        })
        .catch(err => {
            console.log("Error reading image:");
            console.log(err);
        })
};

export default decolorize