import React, { Component } from 'react'
import { getMovies } from './MovieService';
import { MovieTable } from './MovieTable';
import Pagenation  from './common/Pagination';
import { set } from 'lodash';
import { paginate } from './utils/paginate';

export class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie:[],
            pageSize:10, //한페이지에 10개
            count:100, //이거 movie.length로 받아와서 해야하는데 도저히 오늘은 안됨....
            currentPage:1//현재페이지
          }
    }
    
    componentDidMount(){ //컴포넌트 생성 시 영화를 state에 저장하는 코드
         //https://ing-yeo.net/2020/10/react-beginner-4/ 3분의1지점 코드 참고
        this.setState({movie:getMovies()});
    }
 
    render() {
       
        const pagedMovies = paginate(this.state.movie,this.state.currentPage,this.state.pageSize);
        const handlePageChange = (page) =>{
            this.setState({currentPage:page});
        }

        return (
            <>
            <MovieTable data={pagedMovies}></MovieTable>
            <Pagenation
            itemsCount = {this.state.count}
            pageSize={this.state.pageSize}
            currentPage={this.currentPage}
            onPageChange={handlePageChange}
            ></Pagenation>
            </>
        )
    }
}

export default Movies