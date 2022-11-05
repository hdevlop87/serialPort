import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.paper};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.Shadow.cardShadow};
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 56px;
    padding: 16px;
    border-bottom: 0.8px solid ${({ theme }) => theme.colors.text.desactived};
    justify-content:space-between;
    align-items:center;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    width:100%;
    padding:16px;
    gap:16px;
`;




