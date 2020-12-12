import React, { Component } from 'react'

export class Movie extends Component {
    state = {
        movies:[
            { id: 0, title: "기생충", release: "2019-05-30" },
            { id: 1, title: "라이온 킹", release: "2019-07-17" },
            { id: 2, title: "알라딘", release: "2019-05-23" },
            { id: 3, title: "나랏말싸미", release: "2019-07-24" },
            { id: 4, title: "주전장", release: "2019-07-25" },
            { id: 5, title: "어벤져스: 엔드게임", release: "2019-04-24" }
        ]
    }

    handleDelete = (movie) =>{
        const movies = this.state.movies.filter(m => m.id !== movie.id);
        this.setState({movies});
    }
    render() {
        const {length:count}=this.state.movies;
        if(count===0)
        return<p>영화정보가없습니다.</p>
        
        return (
            <React.Fragment>
            <p>{count} 개의 영화 정보가 있습니다.</p>
    
            {/* VS Code에서 table.table>thead>tr>th*4를 입력하면 아래와 같이 table 태그를 쉽게 만들 수 있음. (th*4: th 태그를 4개 생성) */}
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>제목</th>
                  <th>출시일</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(movie =>
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.release}</td>
                    <td><button onClick={() => this.handleDelete(movie)}>Delete</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </React.Fragment>
        )
    }
}

export default Movie
