import React from 'react'
import {Link} from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <Link to={props.path} className="card_item">
                <img className='card_img' src = 'https://www.poom.co.kr/Upload2/Product/201901/1901300532_detail1.jpg' />
                <h2>{props.text}</h2>
            </Link>
        </>
    )
}

export default CardItem
