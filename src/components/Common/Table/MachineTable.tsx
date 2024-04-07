import { useState, useEffect } from "react";

// !components
import Pagination from "../Pagination/Pagination";
import Chip from "../Status/Chip";

// !constants
import { machineNamesWithAddresses } from "../../../constants/machinerecords";

// !3rd pary
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MachineTable = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([...machineNamesWithAddresses]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortedField, setSortedField] = useState("");
  const [sortOrder, setSortOrder] = useState<String>("asc");
  const [filteredData, setFilteredData] = useState<any>([]);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

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

  const handleSearch = (event: any) => {
    const value = event.target.value;
    setSearchValue(value);
    const filtered = rowData.filter((item) => {
      const machineName = item.machine_name.toLowerCase();
      return machineName.includes(value.toLowerCase());
    });
    setFilteredData(filtered);
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
    <div className="bg-white rounded-2xl shadow-lg px-4 ring-gray-200 ring-1  mt-4">
      <div className="flex justify-between px-4 my-6">
        <h2 className="text-xs  font-[500]  flex ">Machines</h2>
        <div
          className={
            "underline font-medium ml-24 text-sm cursor-pointer text-gray-600"
          }
        >
          Clear All
        </div>
      </div>
      <div className="flex px-8">
        <Chip status="Aahar stall" onClick={() => {}} />
      </div>
      <div className="relative rounded-xl shadow-sm mt-6 mx-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          value={searchValue}
          onChange={handleSearch}
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8  mt-4">
        <table className="min-w-full ">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-primary sm:pl-0 cursor-pointer"
              >
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300  text-indigo-600 focus:ring-indigo-600 "
                  />
                </div>
              </th>
              {Object.keys(rowData[0]).slice(2,4).map((el) => (
                <th
                  scope="col"
                  key={el}
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-primary sm:pl-0 cursor-pointer "
                  onClick={() => handleSort(el)}
                >
                  <div className="flex items-center">
                    <div>
                      <div className=" font-semibold text-[#508dff] text-xs m-auto">
                        {el.toUpperCase().split("_").join(" ")}
                      </div>
                    </div>
                    {el === "machine_name" || el === "address" ? (
                      <span className=" hover:text-gray-400 text-[#508dff] ml-3 text-[8px]">
                        <div>▲</div>
                        <div className="mt-[-10px]">▼</div>
                      </span>
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {filteredData.map((el: any, index: number) => (
              <tr key={el?.id}>
                <td>
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap py-4  pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 mr-3 flex-none rounded-full bg-gray-50"
                      src={el?.img}
                      alt={el.machine_name}
                    />
                    <div className="flex items-start gap-x-3">
                      <p className="text-sm font-medium leading-6 text-gray-600">
                        {el.machine_name.split(" ")[0] +
                          " " +
                          el.machine_name.split(" ")[1] +
                          " " +
                          el.machine_name.split(" ")[2]}{" "}
                        <span className="text-[#B0A6A6]">
                          {" "}
                          {el.machine_name.split(" ")[3]}
                        </span>
                      </p>
                    </div>
                  </div>
                </td>

                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  <div className="flex flex-col">
                    <div className="flex items-start gap-x-3">
                      <div className="text-sm font-medium leading-6 text-gray-600">
                        {el.address}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          rowPerPage={rowPerPage}
          setRowPerPage={setRowPerPage}
          setCurrentPage={setCurrentPage}
          className="mb-4"
        />
      </div>
    </div>
  );
};

export default MachineTable;
