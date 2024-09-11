import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  }

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <ReactPaginate
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={info?.pages}
      onPageChange={pageChange}
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="&rsaquo;"
      previousLabel="&lsaquo;"
      previousClassName="btn btn-info prev"
      nextClassName="btn btn-info next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
}

export default Pagination;