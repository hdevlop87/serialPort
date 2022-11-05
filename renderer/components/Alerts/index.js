import React, { useEffect, useState } from 'react'
import { Container, CloseButton, MyIcon } from './Alert.styled'
import { Flex, Fs_sm } from '../../styles'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from '../../features/messageSlice';

const index = ({ timeout }) => {

    const alert = useSelector(state => state.message);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    let timeoutId = null;


    const Close = () => {
        setOpen(false);
        dispatch(setMessage({
            type: "",
            label: ''
        }));
    }

    useEffect(() => {
        alert.label && setOpen(true);
        const timer = setTimeout(() => {
            Close();
        }, timeout);
        return () => clearTimeout(timer);

    }, [alert]);

    return (
        <Container open={open} type={alert.type}>
            <Flex center>
                <MyIcon type={alert.type} />
                <Fs_sm>{alert.label}</Fs_sm>
            </Flex>

            <CloseButton>
                <Icon
                    icon="ep:circle-close"
                    width="20"
                    onClick={Close}
                />
            </CloseButton>

        </Container>
    )
}

export default index