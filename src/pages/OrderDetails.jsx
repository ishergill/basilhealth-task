import { useParams } from "react-router-dom";

// !constants
import { tableData } from "../userdata";

// !components
import Status from "../components/Common/Status/Status";
import CustomerTable from "../components/Common/Table/CustomerTable";

// !assets
import documentImage from "../assets/images/document.svg";
import gridImage from "../assets/images/grid.svg";
import skipIcon from "../assets/images/skip.svg";

function OrderDetails() {
  const { order_id } = useParams();
  const orderItem = tableData.find((el) => el.order_id === order_id);

  const formatMachineName = () => {
    const words = orderItem.machine_name.split(" ");
    return `${words[0]} ${words[1]} ${words[2]}  ${words[3]}`;
  };

  return (
    <div className="h-auto max-w-full">
      <div className="flex justify-end items-center my-6">
        <button
          type="button"
          className="inline-flex justify-center rounded-md bg-[#377Ddf] px-3 py-2 text-sm font-[400] text-white shadow-sm hover:bg-blue-400 sm:col-start-2 mr-4"
        >
          <img src={skipIcon} className="w-4 w-4 mr-2" alt="Skip Icon" />
          Refund complete order
        </button>
        <div className="flex flex-row  mr-6">
          <div className="w-10 h-10 mr-4 cursor-pointer">
            <img
              src={gridImage}
              className="p-1 bg-white border-[1px] border-gray-200 rounded-md"
              alt="Grid"
            />
          </div>
          <div className="w-10 h-10 cursor-pointer">
            <img
              src={documentImage}
              className="p-1 bg-white border-[1px] border-gray-200 rounded-md"
              alt="Document "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-x-8 sm:px-8 px-1 ">
        <div className="col-span-12 md:col-span-2 inline-block min-w-full py-4 px-3 sm:px-6 lg:px-8 bg-white rounded-xl shadow-lg">
          <div className="flex justify-between">
            <a
              href="/"
              className="text-md font-semibold text-blue-500 hover:text-gray-600"
            >
              {order_id}
            </a>
            <div className="mr-12">
              <Status status={orderItem?.status || ""} />
            </div>
          </div>
          <div className="w-full flex items-start mt-6 mb-2">
            <span className="text-sm font-[400] text-gray-500 uppercase">
              Basic Information
            </span>
          </div>
          <div className="grid grid-cols-2">
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Date and Time
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
                {orderItem.date}
              </p>
            </div>
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Machine
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
                {formatMachineName()}{" "}
                <span className="text-[#B0A6A6]">
                  {orderItem.machine_name.split(" ")[3]}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full flex items-start mt-6 mb-2">
            <div className="text-sm font-[400] text-gray-500 uppercase">
              Order Summary
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Payment ID
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
                TXI042480129480
              </p>
            </div>
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Amount
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
              ₹{parseInt(orderItem.total_amount)}
              </p>
            </div>
          </div>
          <div className="w-full flex items-start mt-6 mb-2">
            <div className="text-sm font-[400] text-gray-500 uppercase">
              Customer Information
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Name
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
                {orderItem.customer_name}
              </p>
            </div>
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Contact Number
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
                {orderItem.contact_number}
              </p>
            </div>
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Email
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
                {orderItem.customer_name}@basil.health
              </p>
            </div>
          </div>
          <div className="w-full flex items-start mt-6 mb-2">
            <div className="text-sm font-[400] text-gray-500 uppercase">
              Refund Information
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="min-w-0 items-start flex flex-col mb-4">
              <p className="mt-1 truncate text-[13px] font-[400] leading-5 text-gray-400">
                Refund Transaction ID
              </p>
              <p className="text-sm font-[500] leading-6 text-gray-700">
                TXI042480129480
              </p>
            </div>
          </div>
        </div>
        <CustomerTable />
      </div>
    </div>
  );
}

export default OrderDetails;
