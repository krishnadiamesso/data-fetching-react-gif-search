import React from 'react';

const Gif = ({alt, src, height, width}) => (
  <li className="gif-wrap">
    <img alt={alt} src={src} height={height} width={width}/>
  </li>
);

export default Gif;