import styled from 'styled-components';
import { Colors } from '../../styles'
import is from 'styled-is'; 

export const Container = styled.div`
    display: flex;
    flex-direction: ${p => p.LabelPos == 'left' ? "row" : "column"};
    justify-content: start;
    width: 100%;
    gap: 8px;
    color:${({ theme }) => theme.colors.text.primary};
    align-items: center;
    height: 32px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: white;
    justify-content: center;
    align-items: center;

    padding: 0px 8px;

    ${is('isCheckbox')`
        background-color: transparent;
        width:16px;
    `};

    ${is('outlined')`
        border: 1.4px solid ${({ theme }) => theme.colors.text.desactived};
    `};

    ${is('isError')`
        border: 1.4px solid ${Colors.red_normal};
    `};

    border-radius:0 6px 6px 0;

    max-width: 180px;

`;

export const IconContainer = styled.div`
    display: flex;
    padding: 8px;
    gap: 8px;
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.background_light};
    color: ${({ theme }) => theme.colors.background_pressed}; 
`;






