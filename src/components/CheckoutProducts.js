import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProducts({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  isPrime,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  const addItemtoBasket = () => {
    const products = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      isPrime,
    };
    dispatch(addToBasket(products));
  };
  return (
    <div className="grid grid-cols-5 border-gray-300 my-4">
      <div className="">
        <Image src={image} height={200} width={200} objectFit="contain" />
      </div>
      <div className="col-span-3">
        <h1>{title}</h1>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((e) => (
              <StarIcon className="h-5 text-yellow-400" />
            ))}
        </div>
        <p className="text-xs my-3 line-clamp-3">{description}</p>
        <div>
          <Currency quantity={price} />
        </div>

        {isPrime ? (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        ) : null}
      </div>
      <div className=" flex flex-col space-y-3 my-auto justify-self-end">
        <button className="button" onClick={addItemtoBasket}>
          Add Item
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
