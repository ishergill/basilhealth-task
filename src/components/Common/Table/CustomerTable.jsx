import { Link } from "react-router-dom";

// !components
import Status from "../Status/Status";

// !constants
import customerdata from "../../../constants/customerdata.json";

const CustomerTable = () => {
  return (
    <div className="col-span-auto md:col-span-4 bg-white rounded-xl md:shadow-lg h-fit">
      <h2 className="text-sm pt-6 pb-4 text-[#5d6679] uppercase flex px-8">
        Order Details
      </h2>
      <div className="inline-block min-w-full py-2 sm:px-6 h-auto lg:px-8">
        <table className="min-w-full overflow-x-scroll">
          <thead>
            <tr>
              {Object.keys(customerdata[0]).map((key) =>
                key !== "drink_image_url" ? (
                  <th
                    key={key}
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-primary sm:pl-0 cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div>
                        <div className="font-[600] text-[#508dff] text-xs">
                          {key.toUpperCase().split("_").join(" ")}
                        </div>
                      </div>
                    </div>
                  </th>
                ) : null
              )}
            </tr>
          </thead>
          <tbody>
            {customerdata.map((item,ind) => (
              <tr key={item.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  <div className="flex items-start gap-x-3 text-sm font-[400] leading-6 text-gray-700">
                    {item.id}
                  </div>
                </td>
                <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 mr-3 flex-none rounded-full bg-gray-50"
                      src={item.drink_image_url}
                      alt={item.drink_name}
                    />
                    <div className="flex items-start gap-x-3">
                      <div className="text-sm font-[400] leading-6 text-gray-700">
                        {item.drink_name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  <div className="flex items-start text-sm font-[400] leading-6 text-gray-700">
                    {item.customization}
                  </div>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  <div className="flex items-start gap-x-3">
                    <div className="text-sm font-[400] leading-6 text-gray-700">
                      ₹ {parseInt(item.amount)}
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <Link to={`#`} className="flex items-start cursor-pointer">
                    <Status status={item.drink_status} />
                  </Link>
                </td>
                <td className="py-4">
                  <div className="flex items-start">
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium shadow-sm sm:col-start-2 mr-4 ${
                        ind % 2 === 0
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-[#377dff] text-white hover:bg-blue-400"
                      }`}
                      disabled={ind % 2 === 0} // Disable if id is even
                    >
                      Refund
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
