import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// !components
import Pagination from "../Pagination/Pagination";
import Status from "../Status/Status";

// !constants
import { tableData } from "../../../userdata";

const Table = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([...tableData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortedField, setSortedField] = useState("");
  const [sortOrder, setSortOrder] = useState<String>("asc");
  const [filteredData, setFilteredData] = useState<any>([]);
  const [rowPerPage, setRowPerPage] = useState(10);

  const handleSort = (field: any) => {
    const newSortOrder =
      field === sortedField ? (sortOrder === "asc" ? "desc" : "asc") : "asc";
    const sortedData = [...filteredData].sort((a: any, b: any) => {
      let comparison;
      if (typeof a[field] === "string" && typeof b[field] === "string") {
        comparison = a[field].localeCompare(b[field]);
      } else if (typeof a[field] === "number" && typeof b[field] === "number") {
        comparison = a[field] - b[field];
      } else {
        // Fallback to string comparison if types are not consistent
        comparison = String(a[field]).localeCompare(String(b[field]));
      }
      return newSortOrder === "asc" ? comparison : -comparison;
    });
    setSortedField(field);
    setSortOrder(newSortOrder);
    setFilteredData(sortedData);
  };

  useEffect(() => {
    const indexOfLastItem = currentPage * rowPerPage;
    const indexOfFirstItem = indexOfLastItem - rowPerPage;
    const currentItems = rowData.slice(indexOfFirstItem, indexOfLastItem);

    setFilteredData(currentItems);
    // Compute and set the total pages:
    const computedTotalPages = Math.ceil(rowData.length / rowPerPage);
    setTotalPages(computedTotalPages);
  }, [rowData, rowPerPage, currentPage]);

  return (
    <div>
      <div className="inline-block min-w-full py-2  sm:px-6 lg:px-8 bg-white rounded-xl shadow-lg mt-4">
        <table className="min-w-full overflow-x-auto">
          <thead>
            <tr>
              {Object.keys(rowData[0]).map((el) => (
                <th
                  scope="col"
                  key={el}
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-primary sm:pl-0 cursor-pointer items-start"
                  onClick={() => handleSort(el)}
                >
                  <div className="flex items-start text-[#508dff] text-xs">
                    <div>
                      <div className=" font-[500]">
                        {el === "s_no"
                          ? el.toUpperCase().split("_").join(" ")
                          : el.toUpperCase().split("_").join(" ").split(" ")[0]}
                      </div>
                      <div className="font-[500] mt-[5px]">
                        {el === "s_no"
                          ? null
                          : el.toUpperCase().split("_").join(" ").split(" ")[1]}
                      </div>
                    </div>
                    {el === "date" ||
                    el === "order_id" ||
                    el === "total_amount" ? (
                      <span className=" hover:text-gray-400 text-[#508dff] ml-3 text-[8px] ">
                        <div>▲</div>
                        <div className="mt-[-6px]">▼</div>
                      </span>
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {filteredData.map((el: any) => (
              <tr key={el.s_no}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-[400] text-gray-600 sm:pl-0">
                  <div className="flex items-start gap-x-3">{el.s_no}</div>
                </td>
                <td className="whitespace-nowrap py-4  pr-3 text-sm font-[400] text-gray-700 sm:pl-0">
                  <div className="flex flex-col">
                    <div className="flex items-start gap-x-3">
                      <div className="text-sm font-[400] leading-6 text-gray-700">
                        {el.date.split(" ")[0].replace(",", "")}
                      </div>
                    </div>
                    {el.date ? (
                      <div className="flex items-start gap-x-3">
                        <div className="mt-1 text-xs leading-5 text-gray-700">
                          {el.date.split(" ")[1]}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-[400] text-gray-700 sm:pl-0">
                  <div className="flex items-start">{el.order_id}</div>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-[400] text-gray-700 sm:pl-0">
                  <div className="flex flex-col">
                    <div className="flex items-start gap-x-3">
                      <div className="text-sm font-[400] leading-6 text-gray-700">
                        {el.machine_name.split(" ")[0] +
                          " " +
                          el.machine_name.split(" ")[1]}
                      </div>
                    </div>
                    {el.date ? (
                      <div className="flex items-start gap-x-3">
                        <div className="text-sm font-[400] leading-6 text-gray-700">
                          {el.machine_name.split(" ")[2]}
                          <span className="text-[#B0A6A6]">
                            {" "}
                            {el.machine_name.split(" ")[3]}
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-[400] text-gray-700 sm:pl-0">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex items-start gap-x-3">
                      {el.customer_name.split(" ")[0]}
                    </div>
                    <div className="flex items-start gap-x-3">
                      <div className="mt-1">
                        {el.customer_name.split(" ")[1]}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="flex items-start whitespace-nowrap py-4 pl-4 pr-3 text-sm font-[400] text-gray-700 sm:pl-0">
                  {el.contact_number}
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-[400] text-gray-700 sm:pl-0">
                  <div className="flex item-start">
                    ₹ {parseInt(el.total_amount)}
                  </div>
                </td>
                <td className="py-4">
                  <Link
                    to={`order/${el.order_id}`}
                    className="flex items-start cursor-pointer"
                  >
                    <Status status={el.status} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        rowPerPage={rowPerPage}
        setRowPerPage={setRowPerPage}
        setCurrentPage={setCurrentPage}
        className=""
      />
    </div>
  );
};

export default Table;
