import React from "react";

//components
import RestaurantNavbar from "../components/Navbar/restaurantNavbar";
import ImageGrid from "../components/restaurant/ImageGrid";

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />
            <div classname="container mx-auto px=4 lg:px=20">
                <ImageGrid
                  images={[ 
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
                      "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg"
                      
                    ]}
                />
                
            </div>
        </>
    );
};

export default RestaurantLayout;