import React, { useEffect, useState } from 'react'
import Input from '../Input'
import BoxCard from '../BoxCard'
import setting from '../../setting.json'
import { useDispatch } from "react-redux";
import { setSendSetting } from '../../features/settingSlice';
import delay from 'delay';

const SendSetting = () => {

    const dispatch = useDispatch();

    const [values, setValues] = useState({
        sendType: 'Text',
        append: 'None',
        time: '1000',
        loop: false
    });

    const handleChange = async (e, v) => {
        setValues(prevValues => ({ ...prevValues, [e]: v }));
    }

    useEffect(() => {
        dispatch(setSendSetting(values));
    }, [values])

    return (
        <BoxCard title="Send Setting">
            {
                setting.sendSetting.map((item, i) =>
                    <Input
                        key={i}
                        label={item.label}
                        type={item.type}
                        options={item.options}
                        value={values[item.id]}
                        callback={value => handleChange(item.id, value)}
                        LabelPos="left"
                        Ricon={item.Ricon}
                    />
                )
            }
        </BoxCard>
    )
}

export default SendSetting