// TYPES
export {ImageDataType, ImageType, ImageTypeEnum} from './types';

// LOADERS AND WRITERS
export {ImageLoader, ImageWriter} from '@loaders.gl/images';

// IMAGE CATEGORY API

// Binary Image API
export {getBinaryImageMetadata} from '@loaders.gl/images';

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
