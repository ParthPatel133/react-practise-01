import React, { useState } from 'react'
import Army from './Army'

const Woman = () => {
    // const [gunShots, setGunShots] = useState(0);

    // const handelGunShots = (e) => {
    //     setGunShots(gunShots + 1);
    // }

    return (
        <div>
            <h2 onMouseOver={handelGunShots}>Women gunshots : {gunShots}</h2>
        </div>
    )
}

export default Army(Woman, 5);
