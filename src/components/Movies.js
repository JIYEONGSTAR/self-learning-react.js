import React, { Component } from 'react'

export class Movies extends Component {
    state = {
        movie: [
            {
                "title": "아픈 만큼 사랑한다",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=182777",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1827/182777_P13_144610.jpg",
                "subtitle": "LOVE AS MUCH AS PAIN",
                "pubDate": "2019",
                "director": "임준현",
                "actor": "박누가",
                "userRating": "9.79"
            },
            {
                "title": "아직 사랑하고 있습니까?",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=187390",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1873/187390_P16_133842.jpg",
                "subtitle": "HOW TO LIVE IN THIS WORLD",
                "pubDate": "2019",
                "director": "신양중",
                "actor": "김인권|이나라|서태화",
                "userRating": "7.67"
            },
            {
                "title": "사랑하고 있습니까",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=167600",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1676/167600_P12_101533.jpg",
                "subtitle": "",
                "pubDate": "2019",
                "director": "김정권",
                "actor": "김소은|성훈",
                "userRating": "4.81"
            },
            {
                "title": "미친사랑",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=152471",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1524/152471_P01_100834.jpg",
                "subtitle": "Crazy Love",
                "pubDate": "2019",
                "director": "문시현",
                "actor": "공형진|이시원|송재림",
                "userRating": "5.40"
            },
            {
                "title": "찌질이의 사랑",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=188497",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1884/188497_P01_160026.jpg",
                "subtitle": "The Way of Math Nerd's Love Confession",
                "pubDate": "2019",
                "director": "조영래",
                "actor": "김명수",
                "userRating": "10.00"
            },
            {
                "title": "9월의 사랑과 만날 때까지",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=182520",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1825/182520_P01_161335.jpg",
                "subtitle": "Until I Meet September's Love",
                "pubDate": "2019",
                "director": "야마모토 토루",
                "actor": "타카하시 잇세이|카와구치 하루나|하마노 겐타|나카무라 유코",
                "userRating": "8.67"
            },
            {
                "title": "양과 늑대의 사랑과 살인",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=193817",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1938/193817_P01_142333.jpg",
                "subtitle": "My Girlfriend is a Serial Killer",
                "pubDate": "2019",
                "director": "카요코 아사쿠라",
                "actor": "스기노 요스케|후쿠하라 하루카",
                "userRating": "0.00"
            },
            {
                "title": "사랑하지 않는 자들의 최후",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=194903",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1949/194903_P00_161053.jpg",
                "subtitle": "Gone with the Light",
                "pubDate": "2019",
                "director": "동윤연",
                "actor": "황보|왕뤄단|탁 탄|황루",
                "userRating": "0.00"
            },

            {
                "title": "미니멈 걸과 터지는 사랑",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=194012",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1940/194012_P01_170239.jpg",
                "subtitle": "",
                "pubDate": "2019",
                "director": "다나카 켄타로",
                "actor": "",
                "userRating": "0.00"
            },

            {
                "title": "틴더시대 사랑",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=194938",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1949/194938_P01_100329.jpg",
                "subtitle": "Love in the Tinder age",
                "pubDate": "2019",
                "director": "정인혁",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "연애의 참견: 사랑 공포증",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=195434",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1954/195434_P01_102336.jpg",
                "subtitle": "Philophobia: or the Fear of Falling in Love",
                "pubDate": "2019",
                "director": "타일러 콜",
                "actor": "데이빗 렌젤|아론 버트|에밀리 피어스",
                "userRating": "1.00"
            },
            {
                "title": "내 사랑, 그대를 사랑하오",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=199048",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1990/199048_P01_170434.JPG",
                "subtitle": "Amo Te Vita",
                "pubDate": "2019",
                "director": "배채연",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "사랑의 작은 역사",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=193982",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1939/193982_P01_105723.jpg",
                "subtitle": "A History Of Love",
                "pubDate": "2019",
                "director": "코시카와 미치오",
                "actor": "세토 카호|우노 쇼헤이|후카미 모토키",
                "userRating": "0.00"
            },
            {
                "title": "나의 영혼은 사랑으로 만들었다",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=199054",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1990/199054_P01_162422.jpg",
                "subtitle": "The Teacher",
                "pubDate": "2019",
                "director": "천민랑",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "얽힌 사랑이라 해도",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=190678",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1906/190678_P01_110826.jpg",
                "subtitle": "The love tied up",
                "pubDate": "2019",
                "director": "미사키 키쿠치",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "사랑에 관하여",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=189654",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1896/189654_P01_162500.jpg",
                "subtitle": "About Love",
                "pubDate": "2019",
                "director": "아차나 파드크",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "사랑의 3부작 : 부활",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=189447",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1894/189447_P01_181541.jpg",
                "subtitle": "Love Trilogy: Reborn",
                "pubDate": "2019",
                "director": "야론 샤니",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "사랑폭탄",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=188832",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1888/188832_P01_153249.jpg",
                "subtitle": "Love Bomb",
                "pubDate": "2019",
                "director": "유나래",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "새와 나무의 사랑이야기",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=195346",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1953/195346_P01_152552.png",
                "subtitle": "Friends Love",
                "pubDate": "2019",
                "director": "디야 M",
                "actor": "",
                "userRating": "0.00"
            },

            {
                "title": "사랑의 언어",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=189394",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1893/189394_P01_155648.jpg",
                "subtitle": "Lingua Franca",
                "pubDate": "2019",
                "director": "빈센트 산도발",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "우리 사랑할까요",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=194999",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1949/194999_P01_133341.jpg",
                "subtitle": "Let's make a love",
                "pubDate": "2019",
                "director": "O.에르데니",
                "actor": "",
                "userRating": "0.00"
            },
            {
                "title": "사랑의 3부작 : 속박",
                "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=183040",
                "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1830/183040_P03_180919.jpg",
                "subtitle": "Love Trilogy: Chained",
                "pubDate": "2019",
                "director": "야론 샤니",
                "actor": "에란 나임",
                "userRating": "0.00"
            }
        ]
    }

    render() {
 
        return (
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th>썸네일</th>
                        <th>제목</th>
                        <th>감독</th>
                        <th>평점</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movie.map(m =>
                        <tr>
                        <td><img src={m.image} /></td>
                        <td>{m.title}</td>
                        <td>{m.director}</td>
                        <td>{m.userRating}</td>
                    </tr>
                        )}
                    
                </tbody>
            </table>
            </>
        )
    }
}

export default Movies
