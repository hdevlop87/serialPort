import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const MyIcon = styled(Icon)`
    cursor: pointer;
    &:active{
        transform: scale(0.8);
    }
    ${({ size }) => {
        switch (size) {
            case "sm":
                return `width:18px;height:18px;`
            case "md":
                return `width:24px;height:24px;`
            case "lg":
                return `width:32px;height:32px;`
        }
    }}

    

`;
