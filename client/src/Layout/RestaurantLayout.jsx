import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

import { getImage } from "../Redux/Reducer/Image/Image.action";

  
//components
import RestaurantNavbar from "../components/Navbar/restaurantNavbar";
import ImageGrid from "../components/restaurant/ImageGrid";
import RestaurantInfo from "../components/restaurant/Restaurantinfo";
import InfoButtons from "../components/restaurant/infoButton";
import TabContainer from "../components/restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuising: "",
        address: "",
      });
      const { id } = useParams();
      const dispatch = useDispatch();
    
    //   useEffect(() => {
    //     dispatch(getImage(data.payload.restaurant.photos)).then((data) =>
    //     setRestaurant((prev) => ({ ...prev, ...data.payload.image }))
    //   );
    // });

    return (
        <>
            {" "}
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-10 pb-10">
                <ImageGrid
                  images={[ 
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
                    ]}
                />
                <RestaurantInfo
                    name="Mumbai Xpress"
                    restaurantRating="3.5"
                    deliveryRating="3.2"
                    cuisine="North Indian, Fast Food, Chinese, Street Food"
                    address="Basavanagundi, banglore"
                />
                <div className="my-4 flex flex-wrap gap-4">
                    <InfoButtons isActive>
                        <TiStarOutline /> Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabContainer></TabContainer>
                </div>
                <div className="relative">{props.children}</div>
                
            </div>
            <CartContainer />
        </>
    );
};

export default RestaurantLayout;