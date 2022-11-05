import React from 'react'
import { Container } from './Buttons.styled';
import { Icon } from '@iconify/react';

const Buttons = ({ children, size, bg, Licon, Ricon, ...rest }) => {

   return (
      <Container {...rest} bg={bg} size={size}>
         {Licon && <Icon icon={Licon} />}
         {children}
         {Ricon && <Icon icon={Ricon} />}
      </Container>
   )
}

export default Buttons