import React, { useEffect, useState } from 'react'
import { CheckInput } from './checkbox.styled';

const CheckBox = (p) => {

    const [isChecked, setIsChecked] = useState(p.value);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        if(isChecked!==undefined){
            p.callback(isChecked)
        }
    }, [isChecked])

    return (
        <>
            <CheckInput
                type="checkbox"
                value={isChecked}
                onChange={() => handleOnChange()}
                checked={isChecked}
            />
        </>
    )
}

export default CheckBox