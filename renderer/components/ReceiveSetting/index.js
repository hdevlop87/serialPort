import React from 'react'
import Input from '../Input'
import BoxCard from '../BoxCard'
import setting from '../../setting.json'
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik';
import CheckBox from '../CheckBox';

const ReceiveSetting = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            receiveType: 'Text'
        },

        onSubmit: async (values) => {
            // const { port, baudrate } = values;
            // dispatch(login({ username, password }));
        },
    });
    return (
        <BoxCard title="Receive Setting">
            {
                setting.receiveSetting.map((item, i) =>
                    <Input
                        key={i}
                        label={item.label}
                        type={item.type}
                        options={item.options}
                        value={formik.values[item.id]}
                        callback={formik.handleChange(item.id)}
                        LabelPos="left"
                    />
                )
            }
        </BoxCard>
    )
}

export default ReceiveSetting