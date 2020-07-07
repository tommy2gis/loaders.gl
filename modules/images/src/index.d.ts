export {default as ImageLoader} from './image-loader';
export {default as ImageWriter} from './image-writer';

// IMAGE CATEGORY API

// Binary Image API
export {getBinaryImageMetadata} from './lib/api/binary-image-api';

// HACK - for texture loaders in image category
export {default as _parseImage} from './lib/parsers/parse-image';

// DEPRECATED

// TODO - Remove in V3
export {default as HTMLImageLoader} from './image-loader';

export {
  isBinaryImage,
  getBinaryImageMIMEType,
  getBinaryImageSize
} from './lib/deprecated/binary-image-api-deprecated';

// Image Type API
export {isImageTypeSupported, getDefaultImageType} from './lib/api/image-type';

// export function getSupportedImageType(imageType?);