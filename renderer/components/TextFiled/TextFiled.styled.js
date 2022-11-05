import styled from 'styled-components';
import { Colors } from '../../styles'
import is from 'styled-is'; 

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;
    gap: 16px;
    height: 100%;
    overflow: hidden;
`;


export const TextInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color:transparent;
    color:${({ theme }) => theme.colors.text.primary};
    font-size: 14px;

    ::placeholder {
        font-family: 'Roboto Slab', serif;
        font-size: 14px;
        font-weight: 400;
        color:${({ theme }) => theme.colors.text.secondary};
        background-color:transparent; 
        opacity: 1;
    }

    &:focus{
        border: none;
    }

      &:active {
        border: none;
    }
    overflow: hidden;
    
`;