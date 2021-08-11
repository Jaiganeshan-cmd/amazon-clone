import moment from "moment";
import Currency from "react-currency-formatter";

function Orders({ id, amount, amountShipping, images, timestamp, items }) {
  return (
    <div className="relative border rounded-sm border-gray-300 ">
      <div className="flex items-center space-x-10 p-5 bg-gray-300 text-sm text-gray-600">
        <div>
          <h2 className="font-bold">Order Places</h2>
          <h3>{moment.unix(timestamp).format("DD MMM YYYY")}</h3>
        </div>
        <div>
          <h1 className="font-bold">Total</h1>
          <p>
            <Currency quantity={amount} />
            {amountShipping && ` -Next-day-delivery`}{" "}
            <Currency quantity={amountShipping} />
          </p>
        </div>
        <div className="whitespace-nowrap  text-right flex-1 text-gray-700 sm:text-sm">
          <p className="font-bold">{items.length} Items</p>
        </div>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div>
        <div className="flex space-x-6 px-3 py-6">
          {images.map((image) => (
            <img src={image} className="h-20 object-contain sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
