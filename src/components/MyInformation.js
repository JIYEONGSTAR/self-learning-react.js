import React from 'react'

function MyInformation() {
    const name="지영", email="jiyeongstar@gmail.com", id="jiyeongstar";
    return (
        <div className="MyInfo">
            <div className="name">
                {name}
            </div>
            <div className="myemail">
                {email}
            </div>
            <div className="myid">
                {id}
            </div>
        </div>
    )
}

export default MyInformation
