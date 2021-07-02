import { Picture } from 'react-responsive-picture';

export default function Image({ image }) {
    const imageOptions = [],
        images = image?.images,
        mediaOptions = image?.options || {},
        viewportSizes = {
            lg: '(min-width: 1200px)',
            tablet: '(min-width: 768px)',
            mobile: '',
        };
    let imageTitle, imageSrc;

    if (images.length > 0) {
        Object.keys(viewportSizes).forEach((size) => {
            const overrideIndex = mediaOptions[size]?.index || 0;
            let overrideSize = mediaOptions[size]?.imageSize,
                currentImage;

            if (
                (typeof overrideSize !== 'undefined' &&
                    typeof overrideIndex !== 'undefined') ||
                size === 'mobile'
            ) {
                if (images.length >= overrideIndex) {
                    currentImage = images[overrideIndex];

                    const imageData = currentImage && currentImage?.fields,
                        imageName = imageData && imageData?.title,
                        imageFile = imageData && imageData?.file,
                        imageURL = imageFile && imageFile?.url,
                        imageType = imageFile && imageFile?.contentType,
                        imageSize = imageFile && imageFile?.details?.image,
                        // imageHeight     = imageSize && imageSize?.height,
                        imageWidth = imageSize && imageSize?.width;

                    if (!overrideSize) overrideSize = imageWidth;
                    overrideSize = Math.min(overrideSize, maxWidth);

                    let quality = '',
                        format = '';
                    if (imageType !== 'image/svg+xml') {
                        quality = '&q=80';
                        format = 'fm=webp&';
                    }

                    if (numberOfOptions !== 0) {
                        imageOptions.push({
                            srcSet: `${imageURL}?fm=webp&w=${overrideSize}&q=80 1x, ${imageURL}?${format}w=${
                                overrideSize * 2
                            }${quality} 2x, ${imageURL}?${format}w=${
                                overrideSize * 3
                            }${quality} 3x`,
                            media: viewportSizes[size],
                            type: 'image/webp',
                        });
                        imageOptions.push({
                            srcSet: `${imageURL}?fl=progressive&w=${overrideSize}&q=80 1x, ${imageURL}?fl=progressive&w=${
                                overrideSize * 2
                            }${quality} 2x, ${imageURL}?fl=progressive&w=${
                                overrideSize * 3
                            }${quality} 3x`,
                            media: viewportSizes[size],
                            type: imageType,
                        });
                    }
                    if (size === 'mobile') {
                        if (
                            imageType !== 'image/svg+xml' &&
                            numberOfOptions !== 0
                        ) {
                            imageOptions.push({
                                srcSet: `${imageURL}?fm=webp${quality}`,
                                type: 'image/webp',
                            });
                        }
                        imageTitle = imageName;
                        imageSrc = imageURL;
                    }
                }
            }
        });
    }

    return (
        <Picture
            loading="lazy"
            sources={imageOptions}
            src={imageSrc}
            alt={imageTitle}
            className={classname}
        />
    );
}
