import React from 'react';
import Gif from './Gif';
import NoGifs from "./NoGifs";

const GifList = ({gifs}) => {

    let rendered_gifs;
    if (gifs.length > 0) {
        rendered_gifs = gifs.map(gif => <Gif key={gif.id} alt={gif.title} src={gif.images.fixed_height.url}
                                                 height={gif.images.fixed_height.height}
                                                 width={gif.images.fixed_height.width}/>)

    } else {
        rendered_gifs = <NoGifs/>
    }

    return (
        <ul className="gif-list">
            {rendered_gifs}
        </ul>
    )
        ;
}

export default GifList;
