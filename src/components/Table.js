//버리기 싫은 코드
import React from 'react'
import PropTypes from "prop-types";
function Table({data}) {
    return (
    <table>
         <thead>
                    <tr>
                        <th>썸네일</th>
                        <th>제목</th>
                        <th>감독</th>
                        <th>배우</th>
                        <th>평점</th>
                        <th>제작년도</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(m=>
                    <tr>
                    <td><img src={m.image}/></td>
                    <td>{m.title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</td>
                    <td>{m.director}</td>
                    <td>{m.actor}</td>
                    <td>{m.userRating}</td>
                    <td>{m.pubDate}</td>
                    </tr>
                    )}
                    </tbody>
    </table>
    )
}
MovieTable.propTypes = {
    pubDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    userRating: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired
  };
export default Table