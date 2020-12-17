//버리기싫은 코드
import React, {Component} from 'react';
import axios from 'axios';
import Table from './Table';
import { paginate } from './utils/Paginate';
import { Pagination } from './common/Pagination';
export class Search extends Component {
    state = {
        isLoading: true,
        movies: [],
        value: "",
        pageSize:10,
        count:100,
        currentPage:1
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

    render() {
        const {movies, isLoading,currentPage,pageSize,count } = this.state;
        const pagedMovies = paginate(movies,currentPage,pageSize);
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
                                        <Table data={pagedMovies}/>
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

export default Search
