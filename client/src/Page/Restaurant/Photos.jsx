import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageViewer from "react-simple-image-viewer";

// component
import PhotoCollection from "../../components/restaurant/PhotosCollection";

// redux action
import { getImage } from "../../Redux/Reducer/Image/Image.action";
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setPhotos(images);
      });
    }
  }, []);
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
  );
};

export default Photos;




// const Photos = () => {
//     const [photos, setPhotos] = useState([
//        "https://b.zmtcdn.com/data/pictures/chains/8/44108/bc18c606296d4d367b399e2da526c1fb.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", 
//        "https://b.zmtcdn.com/data/pictures/7/44117/6f747a7b70a1e6fde4440930f30058ff.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", 
//        "https://b.zmtcdn.com/data/pictures/chains/8/44108/5fce62b405dc8f3410305a881bf56be1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     ]);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [CurrentImg, setCurrentImg] = useState(0);
//     const closeViewer = () => setIsMenuOpen(false);

//     const openViewer = () => setIsMenuOpen(true);

  