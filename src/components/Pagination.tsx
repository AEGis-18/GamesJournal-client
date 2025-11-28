import { Button } from "./ui/button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

type PaginationProps = {
  page: number;
  last: boolean;
  setPage: (value: number) => void;
  totalPages: number;
};

export function Pagination({
  page,
  last,
  totalPages,
  setPage,
}: PaginationProps) {
  function nextPage() {
    if (last) {
      setPage(totalPages);
      return;
    }
    setPage(page + 1);
    console.log(page);
    return;
  }

  function previousPage() {
    if (page !== 1) {
      setPage(page - 1);
    }
    console.log(page);
    return;
  }

  function lastPage() {
    setPage(totalPages);
    console.log(page);
    return;
  }

  function firstPage() {
    setPage(1);
    console.log(page);
    return;
  }

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  return (
    <div className="flex justify-center  m-8  gap-1">
      <div className="-skew-x-12">
        <Button
          variant={"default"}
          className={`rounded-none bg-blue-500 ${isFirstPage ? "bg-gray-600" : ""}`}
          onClick={firstPage}
          disabled={isFirstPage}
        >
          <div className="skew-x-12">
            <MdOutlineKeyboardDoubleArrowLeft />
          </div>
        </Button>
      </div>
      <div className="-skew-x-12">
        <Button
          variant={"default"}
          className={`rounded-none bg-blue-500 ${isFirstPage ? "bg-gray-600" : ""}`}
          onClick={previousPage}
          disabled={isFirstPage}
        >
          <div className="skew-x-12">
            <MdOutlineKeyboardArrowLeft />
          </div>
        </Button>
      </div>
      <Button className="">{page}</Button>
      <div className="-skew-x-12">
        <Button
          variant={"default"}
          className={`rounded-none bg-blue-500 ${isLastPage ? "bg-gray-600" : ""}`}
          onClick={nextPage}
          disabled={isLastPage}
        >
          <div className="skew-x-12">
            <MdOutlineKeyboardArrowRight />
          </div>
        </Button>
      </div>
      <div className="-skew-x-12">
        <Button
          variant={"default"}
          className={`rounded-none bg-blue-500 ${isLastPage ? "bg-gray-600" : ""}`}
          onClick={lastPage}
          disabled={isLastPage}
        >
          <div className="skew-x-12">
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </Button>
      </div>
    </div>
  );
}
