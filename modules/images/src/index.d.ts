// TYPES
export {ImageDataType, ImageType, ImageTypeEnum} from './types';

// LOADERS AND WRITERS
export {ImageLoader, ImageWriter} from '@loaders.gl/image';

// IMAGE CATEGORY API

// Binary Image API
export {getBinaryImageMetadata} from '@loaders.gl/image';

// Parsed Image API
export {isImageTypeSupported, getDefaultImageType} from './lib/category-api/image-type';

export {
  isImage,
  getImageType,
  getImageSize,
  getImageData
} from './lib/category-api/parsed-image-api';

// Texture Loading API
export {loadImage} from './lib/texture-api/load-image';
export {loadImageArray} from './lib/texture-api/load-image-array';
export {loadImageCube} from './lib/texture-api/load-image-cube';

// DEPRECATED
// TODO - Remove in V3

export {default as HTMLImageLoader} from '@loaders.gl/image';

export function getSupportedImageType(imageType?);

export {
  isBinaryImage,
  getBinaryImageMIMEType,
  getBinaryImageSize
} from './lib/deprecated/binary-image-api-deprecated';
