import React, {Component} from 'react';
import axios from 'axios';
import MovieTable from './MovieTable';
import {Paginate } from './utils/Paginate';
import { Pagination } from './Pagination';
import _ from 'lodash';
import MovieDetail from './MovieDetail';
import '../css/MovieTable.css';

export class Movie extends Component {
    state = {
        isLoading: true,
        movies: [],
        value: "",
        pageSize:10,
        currentPage:1,
        path: "title", 
        order: "asc", //asc, desc
        edit:false,
        movie:[],//선택한 하나만 수정하는거
        open:false
    };
//검색어로 데이터 가져올 때 <b>"검색어"</b>이렇게되서 제목으로 필터링할때 검색어가 첫 단어일 경우 제일 먼저 나온다. 이건 뭐 어쩔 수 없다. 
    getSearchMovie = async () => {
        console.log('search Movie');
        const ID_KEY = 'lmnnx8RRbuqvKHD3QC_X';
        const SECRET_KEY='SFUhgfJCLl';
        const search = this.state.value;

        try {
            if (search === "") {
                this.setState({movies: [], isLoading: true})
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

    handleChange = (e)=>{ //이렇게 해야 화면에 글자가 뜸...
        this.setState({value: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.getSearchMovie();
    }
   
    handlePageChange = (page)=>{
        this.setState({currentPage:page});
    }

    handleSort = () =>{
        const {movies,path,order,currentPage}=this.state;
        const desc = "desc";
        const asc = "asc";
        if(order === "asc"?
        this.setState({order:desc}):
        this.setState({order:asc})
        );
        const sorted = _.orderBy(movies,[path],[order]);
        this.setState({ movies : sorted, currentPage : 1});
    }
    handleDelete=(e)=>{
        console.log(e);
        const movies = this.state.movies.filter(m=>m.link!==e.link);
        this.setState({movies});
        console.log(movies);
    }
    handleDetail=(e)=>{
        const movie = this.state.movies.filter(m=>m.link===e.link);
        this.setState({movie});
        this.setState({edit:true});
        this.setState({open:true});
    }
    handleClose=()=>{
        this.setState({open:false});
        this.setState({edit:false});
    }
    getData = () =>{
        const{pageSize, currentPage, movies}=this.state;
        const pagedMovies = Paginate(movies, currentPage, pageSize);
        return {count : movies.length,data : pagedMovies}
    }
    render() {
        const {isLoading, pageSize, currentPage, edit, movie} = this.state;
        const {count, data}=this.getData();
        return (
            <>
            <form 
                onSubmit={this.handleSubmit}>
                    <div>
                    <h1>영화검색</h1>
                        <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="영화를 입력해보세요"/>
                    </div>
            </form>
                {
                    isLoading
                        ? (<span>검색중~~</span>)
                        : (
                                <div>
                                    <MovieTable data={data} onSortPage={this.handleSort} onDelete={this.handleDelete} 
                                    onDetail={this.handleDetail}
                                    /> 
                                    {edit?<MovieDetail data={movie[0]} open={this.state.open} close={this.handleClose}/>:null}
                                    <Pagination
                                    itemsCount = {count}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={this.handlePageChange}
                                    ></Pagination>
                                </div>
                        )
                }

            </>
        )
    }
}

export default Movie
