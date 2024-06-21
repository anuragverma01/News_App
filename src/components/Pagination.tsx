import classnames from "classnames";
import { usePagination, DOTS } from "../custom-hook/usePagination";
import "./Pagination.scss"
const BottomPagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];
  return (
    <ul
      className={ classnames("pagination-container", { [className]: className }) }
    >
      <li
        className={ classnames("pagination-item", {
          disabled: currentPage === 1,
        }) }
        onClick={ onPrevious }
      >
        <div className="arrow left" />
      </li>
      { paginationRange?.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={ "pagin-" + index } className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={ "pagin-active-" + index }
            className={ classnames("pagination-item", {
              selected: pageNumber === currentPage,
            }) }
            onClick={ () => onPageChange(pageNumber) }
          >
            { pageNumber }
          </li>
        );
      }) }
      <li
        className={ classnames("pagination-item", {
          disabled: currentPage === lastPage,
        }) }
        onClick={ onNext }
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default BottomPagination;
