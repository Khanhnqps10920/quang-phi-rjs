/* import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetchData from "../../Hook/useFetchData";
import Product from "../../Pages/IndexPage/Product/Product";

export const Pagination = (props) => {
  const { limit, params, colorProduct, sizeProduct, brandProduct } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [listParamsFull] = useFetchData(params.category, 1, "");
  const [listProducts] = useFetchData(params.category, currentPage, limit);
  const pageCount = Math.ceil(listParamsFull.length / limit);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };
  return (
    <>
      {listProducts.map((element) => {
        return (
          <div key={element.id} className=" col-lg-3 col-md-4 col-6">
            <Product key={element.id} product={element} />
          </div>
        );
      })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >>"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={"pagination-list"}
        pageClassName={"pagination-item"}
        pageLinkClassName={"pagination-link"}
        previousClassName={"item-wide-first"}
        nextClassName={"item-wide-last"}
        previousLinkClassName={"link-wide-first"}
        nextLinkClassName={"link-wide-last"}
        breakClassName={"pagination-item"}
        breakLinkClassName={"pagination-link"}
        activeClassName={"is-active"}
      />
    </>
  );
}; */

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import uuid from "react-uuid";

export function Pagination(props) {
  const { list, loading } = props;

  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrenItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrenItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, list]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="content-wraper">
      {loading ? (
        <Loading />
      ) : currentItems.length === 0 ? (
        <img src="https://i.postimg.cc/vBTVcJpd/page-not-found.jpg" alt="" />
      ) : (
        <>
          {currentItems.map((element) => {
            return (
              <div key={uuid()} className=" col-lg-3 col-md-4 col-6">
                <Product product={element} />
              </div>
            );
          })}
          {list.length <= itemsPerPage ? (
            ""
          ) : (
            <div className="pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
