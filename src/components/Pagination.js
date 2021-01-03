import React, {Component} from 'react'
import _ from "lodash";

export class Pagination extends Component {

    render() {
        // 각각 아이템(영화목록) 개수, 한 페이지에 보여줄 아이템(영화목록) 개수
        const {itemsCount, pageSize, currentPage,onPageChange}=this.props;
        const pageCount = Math.ceil(itemsCount / pageSize); // 몇 페이지가 필요한지 계산
        if (pageCount === 1) 
            return null;
        
        const pages = _.range(1, pageCount + 1); // 마지막 페이지에 보여줄 컨텐츠를 위해 +1, https://lodash.com/docs/#range 참고
        return (
            <nav className="pagination">
                <ul className="pagination">
                    {
                        pages.map(page => (
                            <li
                                key={page}
                                className={page === currentPage ? "page-item active" : "page-item"}
                                style={{
                                    cursor: "pointer"
                                }}>
                                <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}

export default Pagination;
