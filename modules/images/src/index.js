// IMAGE CATEGORY API

// Binary Image API
export {getBinaryImageMetadata} from '@loaders.gl/image';

// Parsed Image API
export {isImageTypeSupported, getDefaultImageType} from './lib/category-api/image-type';
// export {isImageTypeSupported, getDefaultImageType} from '@loaders.gl/image';

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

// BACKWARDS COMPATIBILITY (images module used to contain these)
export {ImageLoader, ImageWriter} from '@loaders.gl/image';

// DEPRECATED
// TODO - Remove in V3

export {ImageLoader as HTMLImageLoader} from '@loaders.gl/image';

// import {getDefaultImageType} from '@loaders.gl/image';
import {getDefaultImageType} from './lib/category-api/image-type';

export function getSupportedImageType(imageType = null) {
  return getDefaultImageType();
}

// Binary Image API
export {
  isBinaryImage,
  getBinaryImageMIMEType,
  getBinaryImageSize
} from './lib/deprecated/binary-image-api-deprecated';
