// !3rd party
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  rowPerPage: number;
  setRowPerPage: (value: number) => void;
  setCurrentPage: (value: number) => void;
  className?: string;
}

const numberOfRows = [10, 20, 50, 100];

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  rowPerPage,
  setRowPerPage,
  setCurrentPage,
  className = "",
}) => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`flex items-center justify-between min-w-full mt-4 mb-20 ${className}`}>
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-[400] text-gray-700">
            Showing <span className="font-medium">{Math.min(currentPage * rowPerPage + 1, totalPages)}</span>{" "}
            to <span className="font-medium">{Math.min((currentPage + 1) * rowPerPage, totalPages)}</span> of{" "}
            <span className="font-medium">{totalPages}</span> results
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-700">
            Rows per page:{" "}
            <select
              value={rowPerPage}
              onChange={(e) => setRowPerPage(Number(e.target.value))}
              className="mt-2 bg-white shadow-lg rounded-md border-0 py-1.5 pl-2 text-gray-500 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 font-[400] ml-2"
            >
              {numberOfRows.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </p>
        </div>
        <div>
          <nav className="flex items-center justify-between border-t border-gray-200 py-4 px-4 sm:px-0 w-full">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="flex items-center text-xs md:text-sm lg:text-base font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
            </button>
            <div className="hidden sm:flex space-x-2 items-center font-[400]">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`text-xs md:text-sm lg:text-base font-normal ${
                    currentPage === idx + 1
                      ? "bg-blue-500 text-white px-3 "
                      : "text-gray-500 hover:text-gray-700"
                  }  p-1 rounded-md`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="flex items-center text-xs md:text-sm lg:text-base font-medium text-gray-500 hover:text-gray-600 hover:border-gray-300"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
