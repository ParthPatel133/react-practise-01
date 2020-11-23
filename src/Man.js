import React, { useState } from 'react'
import Army from './Army'

const Man = (props) => {
    // const [gunShots, setGunShots] = useState(0);

    // const handelGunShots = (e) => {
    //     setGunShots(gunShots + 1);
    // }

    return (
        <div>
            <h2 onMouseOver={props.handelGunShots}>man gunshots : {props.gunShots}</h2>
        </div>
    )
}

export default Army(Man, 2);
