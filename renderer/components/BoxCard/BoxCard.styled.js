import styled from 'styled-components';
import is from 'styled-is';
import { number } from 'yup/lib/locale';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 14px;
   width: 100%;
   padding: ${({ pd }) => typeof pd == "number" ? `${pd}px` : "20px"};
   border: 1px gray solid;
   position: relative;
   color:${({ theme }) => theme.colors.text.primary};
   //height: ${({ height }) => typeof height == "number" ? `${height}px` : "100%"};
   ${is('full')`
      height: 100%;
   `};

   ${is('row')`
      flex-direction: row;
   `};
   
`;

export const Title = styled.div`
   display: flex;
   flex-direction: column;
   position: absolute;
   top: -12px;
   background-color: #f2f2f2;
   padding-left: 16px;
   padding-right: 16px;
`;