import React, { useEffect, useState } from 'react'
import Input from '../Input';
import { useDispatch, useSelector } from "react-redux";
import JSon from '../../setting.json'
import BoxCard from '../BoxCard'
import { setPortSetting } from '../../features/settingSlice';
import { updatePort,statePort } from '../../features/portSlice';
import { getPorts } from '../../features/portsSlice';
import { deleteBrackets } from '../../utils/global'

const SerialSetting = () => {

    const dispatch = useDispatch();
    const listPorts = useSelector((state) => state.listPorts);
    const ports = useSelector((state) => state.ports);

    const [mySetting, setMySetting] = useState(JSon)

    const listPortByName = () => {
        let array = listPorts.map(e => {
            return e.name
        })
        return array;
    }

    const [values, setValues] = useState({
        path: 'COM1',
        baudRate: 9600,
        dataBits: '8',
        parity: 'None',
        stopBits: '1',
        flowType: 'None',

    });

    const handleChange = (e, v) => {
        if(e=="path"){
            dispatch(statePort(v))
        }
        setValues(prevValues => ({ ...prevValues, [e]: v }));
    }

    useEffect(() => {
        let newObj = {
            ...values, path: deleteBrackets(values.path)
        }
        dispatch(setPortSetting(newObj))


        ports.find(e => {
            if (e.option.path === values.path && e.option.baudRate !== values.baudRate) {
                dispatch(updatePort(newObj))
            }
        });

    }, [values])

    // useEffect(() => {
    //    dispatch(getPorts());
    // }, [])

    useEffect(() => {
        if (listPorts.length) {
            const array = {
                ...JSon,
                portSetting: [
                    ...JSon.portSetting.slice(0, 0),
                    {
                        ...JSon.portSetting[0],
                        options: listPortByName()
                    },
                    ...JSon.portSetting.slice(1)
                ]
            }
            setMySetting(array);
        }
    }, [listPorts])


    return (

        <BoxCard title="Serial Port Setting">
            {
                mySetting.portSetting.map((item, i) =>
                    <Input
                        key={i}
                        label={item.label}
                        type={item.type}
                        options={item.options}
                        value={values[item.id]}
                        callback={value => handleChange(item.id, value)}
                        LabelPos="left"
                    />
                )
            }
        </BoxCard>

    )
}

export default SerialSetting