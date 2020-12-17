import React, {Component} from 'react';
import axios from 'axios';
import MovieTable from './MovieTable';
import { paginate } from './utils/Paginate';
import { Pagination } from './common/Pagination';
import _ from 'lodash';

export class Movie extends Component {
    state = {
        isLoading: true,
        movies: [],
        value: "",
        pageSize:10,
        currentPage:1,
        path: "title", order: "asc" //asc, desc
    };

    getSearchMovie = async () => {
        console.log('search Movie');
        const ID_KEY = 'lmnnx8RRbuqvKHD3QC_X';
        const SECRET_KEY='SFUhgfJCLl';
        const search = this.state.value;

        try {
            if (search === "") {
                this.setState({movies: [], isLoading: false})
            } else {
                 const {data: { 
                     items 
                    }} = await axios.get('/v1/search/movie.json',{ 
                        params:{ 
                            query: search, 
                            display: 100 
                        }, 
                        headers: {
                             'X-Naver-Client-Id': ID_KEY,
                             'X-Naver-Client-Secret': SECRET_KEY 
                            } }); 
                            this.setState({movies: items, isLoading: false}); 
                        }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getSearchMovie();// this.setState({movies: items, isLoading: false}) 이 코드가 있기에 가능함
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.getSearchMovie();
    }
   
    handlePageChange = (page)=>{
        this.setState({currentPage:page});
    }

    handleSort = () =>{
        const {movies,path,order}=this.state;
        const desc = "desc";
        const asc = "asc";
        if(order === "asc"?this.setState({order:desc}):this.setState({order:asc}));
        const sorted = _.orderBy(movies,[path],[order]);
        this.setState({movies:sorted});
    }
    getData = () =>{
        const{
            pageSize,currentPage,sortColumn,movies
        }=this.state;
        // const sorted = _.orderBy(movies,[sortColumn.path],[sortColumn.order]);
        const pagedMovies = paginate(movies,currentPage,pageSize);
        return {count : movies.length,data:pagedMovies}
    }
    render() {
        const {isLoading,pageSize,currentPage} = this.state;
        const {count,data}=this.getData();
        return (
            <>
                {
                    isLoading
                        ? (<span>Loading...</span>)
                        : (
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                <h1>영화검색</h1>
                                <input
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    placeholder="영화를 입력해보세요"/>
                                    </div>
                                    <div>
                                        <MovieTable data={data} onSortPage={this.handleSort}/>
                                        <Pagination
                                        itemsCount = {count}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                                        ></Pagination>
                                    </div>
                            </form>
                        )
                }

            </>
        )
    }
}

export default Movie