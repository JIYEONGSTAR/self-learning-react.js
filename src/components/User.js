import React from 'react';
import CardItem from './CardItem';
import ProfileIMG from './ProfileIMG';
import MyInformation from './MyInformation';
import '../css/User.css';
function User() {
    return (
        <>
        <div className="img_info">
        <ProfileIMG />
        <MyInformation />
        </div>
            <h1>User Card</h1>
            <div className="card">
                <ul className="cards__items">
                <CardItem text="내 단어장 1" path='/moviepage' />
                <CardItem text="내 단어장 2" path='/moviepage' />
                <CardItem text="내 단어장 3" path='/moviepage' />
                </ul>
            </div>
        </>
    )
}

export default User
