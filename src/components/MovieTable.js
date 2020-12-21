import React from 'react'
import PropTypes from "prop-types";
import '../css/MovieTable.css';

function MovieTable(props) {
    console.log("데이터 기져오기");
    return (
        
    <table>
         <thead>
                    <tr>
                        <th>썸네일</th>
                        <th onClick={()=>props.onSortPage('title')}>제목<i className="fas fa-sort" /></th>
                        <th>감독</th>
                        <th>배우</th>
                        <th>평점</th>
                        <th>제작년도</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(m=>
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
export default MovieTable