import styled from 'styled-components';
import {match} from 'styled-is';

export const Green = styled.div`
    background-image: -moz-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);
    background-image: -ms-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);
    background-image: -o-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);  
    background-image: -webkit-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);
`;

export const Led = styled.div`
    border-radius: 15px;
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 6px black;
    margin: 10px;
    ${match("state", "green")`
        background-image: -moz-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);
        background-image: -ms-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);
        background-image: -o-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);  
        background-image: -webkit-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%);
    `};

    ${match("state", "orange")`
        background-image: -moz-linear-gradient(top, #f9a004 0%, #e0ac45 50%, #ead698 100%);
        background-image: -ms-linear-gradient(top, #f9a004 0%, #e0ac45 50%, #ead698 100%);
        background-image: -o-linear-gradient(top, #f9a004 0%, #e0ac45 50%, #ead698 100%);  
        background-image: -webkit-linear-gradient(top, #f9a004 0%, #e0ac45 50%, #ead698 100%);
    `};

    ${match("state", "red")`
        background-image: -moz-linear-gradient(top, #fb1304 0%, #e35843 50%, #edad99 100%);
        background-image: -ms-linear-gradient(top, #fb1304 0%, #e35843 50%, #edad99 100%);
        background-image: -o-linear-gradient(top, #fb1304 0%, #e35843 50%, #edad99 100%);
        background-image: -webkit-linear-gradient(top, #fb1304 0%, #e35843 50%, #edad99 100%);
    `};
`;

export const Container = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;


`;

