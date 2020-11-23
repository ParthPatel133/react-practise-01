import React, { useState } from 'react'

const Army = (ArmyPerson, Shots) => {

    const NewPerson = () => {
        const [gunShots, setGunShots] = useState(0);

        const handelGunShots = () => {
            setGunShots(gunShots + Shots);
        }

        return (
            <ArmyPerson
                handelGunShots={handelGunShots}
            />
        )
    }

    return NewPerson;
}

export default Army;
