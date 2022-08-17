import React, { useState } from 'react';

const ImgSize = (imgSource) => {
    const [origineSize, setOriginSize] = useState("test");
    let img = new Image();
    img.src = imgSource;
    img.onload = () => setOriginSize({width : this.width, height: this.height});

    console.log("origineSize", origineSize)
    return {
        originSize : () => origineSize,
        fitWidth : (height) => onFitWidth(origineSize, height)
    }
}

const onFitWidth = (origin, height) => (height * origin.width) / origin.height;

export default ImgSize;