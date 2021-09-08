import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
    return (
        <div>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img
                              src="https://b.zmtcdn.com/data/user_profile_pictures/d76/cc84183f68cc34027812bdf62585cd76.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                              alt="avatar"
                              className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-semibold">Vaishnavi Devardekar</h3>
                          <small className="text-gray-500">
                            5 Reviews &#8226; 3 Followers
                          </small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
                      Follow
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                           3 <TiStarFullOutline />
                        </span>
                        <h5 className="font-regular uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>
                    </div>
                    <div classname="w-full">
                        <p classname="w-full text-gray-600 font-Light text-lg">
                          If I could give more than 5 stars, I would, in a heartbeat.
                          Ordered in from here and was already pretty excited with the description of the items ordered.
                          Chilly tempura with Naga chilly mayo (sushi) - This is one of their limited editions and I suggest you order them before they discontinue it. Loved the taste of this one. I was expecting it to be spicy considering it says Naga chilly but the mayo was balanced with the chilly. And the sushi was a rich flavour of philly cheese with the chilly tempura. Went extremely well with soy and wasabi alone.

                          Nikkei avocado uramaki (sushi) - This has to be the most flavourful sushi I have had till date. The avocado, parmesan combined with the aji amarillo sauce was such a pleasant medley of flavours, and with the many accompaniment sauces that Foo gives it was a literal blast! Absolutely loved this one!

                          Special appreciation also for the accompanied sauces/condiments. Loved the red one, not sure what it was made of, was too busy finishing it off.

                          Will continue eating from here. I think the blue rice and thai curry will be next on my list, or probably a repeat order!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ReviewCard;  