import styled from 'styled-components';
import { Colors } from '../../styles'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px;
   width: 300px;
   padding: 24px;
   border: 1px gray solid;
   position: relative;
   color:${({ theme }) => theme.colors.text.primary};
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