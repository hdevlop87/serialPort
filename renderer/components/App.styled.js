import styled from 'styled-components';


export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px 16px 16px 16px ;
    height: 100%;
    width: 100%;
    gap: 24px;
    flex-grow: 0;    
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 320px;
    flex-grow: 0; 
    flex-shrink: 0;
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: calc(100% - 320px);
    height: 100%;
`;


