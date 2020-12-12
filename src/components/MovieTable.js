import React, { Component } from 'react'

export class MovieTable extends Component {
    render() {
        var data = this.props.data;
        return (
            <table>
                 <thead>
                    <tr>
                        <th>썸네일</th>
                        <th>제목</th>
                        <th>감독</th>
                        <th>평점</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(m =>
                        <tr>
                        <td><img src={m.image} /></td>
                        <td>{m.title}</td>
                        <td>{m.director}</td>
                        <td>{m.userRating}</td>
                    </tr>
                        )}
                    
                </tbody>
            </table>
        )
    }
}

export default MovieTable
