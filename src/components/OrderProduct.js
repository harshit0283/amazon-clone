import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";

import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#ffffff",
    "1.0": "#ffffff",
  },
  shadowBlur: 5,
});

function OrderProduct(props) {
  const id = props.id;
  const title = props.title;
  const rating = Math.floor(Math.random() * 5) + 1;
  const price = props.price;
  const description = props.description;
  const category = props.category;
  const image = props.image;

  console.log("props are ", props);

  const [buttonState, setButtonState] = useState("delete");
  const [showTopLoader, setShowTopLoader] = useState(false);
  return (
    <div className="block py-4 sm:grid sm:grid-cols-5 my-16 sm:my-3">
      {showTopLoader && <TopBarProgress />}
      <div className="text-center sm:text-left">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </div>

      {/* Middle */}
      <div className="col-span-3 mx-5 mb-4 sm:mb-0">
        <p className="my-3">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <span className="font-bold">₹{price}</span>
      </div>
    </div>
  );
}

export default OrderProduct;
