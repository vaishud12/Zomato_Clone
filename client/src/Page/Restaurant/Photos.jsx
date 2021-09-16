import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";


// component
import PhotoCollection from "../../components/restaurant/PhotosCollection";

const Photos = () => {
    const [photos, setPhotos] = useState([
       "https://b.zmtcdn.com/data/pictures/chains/8/44108/bc18c606296d4d367b399e2da526c1fb.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", 
       "https://b.zmtcdn.com/data/pictures/7/44117/6f747a7b70a1e6fde4440930f30058ff.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", 
       "https://b.zmtcdn.com/data/pictures/chains/8/44108/5fce62b405dc8f3410305a881bf56be1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);

    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
              <ImageViewer
                src={photos}
                currentIndex={CurrentImg}
                disableScroll={false}
                onClose={closeViewer}
              />
            )}
            
            <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                   <PhotoCollection image={photo} openViewer={openViewer} />
                ))}
            </div>
            
        </>
    )
}

export default Photos
