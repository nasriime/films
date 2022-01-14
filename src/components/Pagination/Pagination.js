import ReactPaginate from 'react-paginate';
import "./styles.scss";

const Pagination=({pageCount, onPageChange, forcePage})=>{
return(
    <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={forcePage}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
    />
    )
}

export default Pagination;