import React from 'react'
import { CardContainer, CardHeader, CardBody } from './card.styled';
import { H6, Flex } from '../../styles'
import IconButton from '../IconButton';
import { Icon } from '@iconify/react';

const card = ({ children, title, iconR, iconTitle, btnHeader = true }) => {

   return (
      <CardContainer>
         {title ?
            <CardHeader>
               <Flex center>
                  <Icon icon={iconTitle} width="20" />
                  <H6 bold>{title}</H6>
               </Flex>
               {btnHeader && <IconButton icon={iconR} size="sm" />}
            </CardHeader> : ""
         }
         <CardBody>
            {children}
         </CardBody>
      </CardContainer>
   )
}

export default card