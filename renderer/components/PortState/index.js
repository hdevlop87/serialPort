import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Fs_base } from '../../styles';
import { Led, Container } from './portState.styled';

const PortState = () => {

    const ports = useSelector(state => state.ports);
    const path = useSelector(state => state.setting.portSetting.path);

    const msg = useSelector(state => state.message);

    const [ledState, setLedState] = useState("red");
    const [message, setMessage] = useState("COM1 CLOSED");


    useEffect(() => {
        if (ports.length > 0) {
            ports.map(e => {
                if (e.option.path == path) {
                    let label = e.portState.label
                    setMessage(label)
                    if (label.includes("OPENED")) {
                        setLedState("green")
                    }
                    else if (label.includes("PAUSED")) {
                        setLedState("orange")
                    }
                    else {
                        setLedState("red")
                    }

                } 
            })
        }

        if (msg.type==="error") {
            setMessage(msg.label)
            setLedState("red")
        }
    }, [msg, ports])




    // const message = useSelector(state => state.message.label);
    // const ledState = () => {
    //     if (message.includes("OPENED")) {
    //         return "green"
    //     }
    //     else if (message.includes("PAUSED")) {
    //         return "orange"
    //     }
    //     else {
    //         return "red"
    //     }
    // }


    return (
        <Container>
            <Led state={ledState} />
            <Fs_base>{message}</Fs_base>
        </Container>
    )
}

export default PortState