import React from 'react';
import { InputContainer,  SelectContainer, Item, PlaceHolder } from './SelectFiled.styled'
import { Fs_base } from '../../styles'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import useOutsideClick from '../../Hooks/outsideClick'

const SelectFiled = (p) => {

   const [showMenu, setShowMenu] = useState(false);
   const ref = useOutsideClick(() => setShowMenu(false));
   const [selectedOption, setSelectedOption] = useState(p.value);

   const onOptionClicked = (value) => {
      setSelectedOption(value);
      setShowMenu(false);
      p.callback(value)
   };

   return (
      <>
         <InputContainer {...p} ref={ref} onClick={() => setShowMenu(state => !state)}>
            {
               !selectedOption ?
                  <PlaceHolder full>{p.placeholder}</PlaceHolder> :
                  <Fs_base full>{selectedOption}</Fs_base>
            }
            <Icon icon="bxs:down-arrow" width={13} />
         </InputContainer>
         <SelectContainer show={showMenu}>
            {
               p.options.map((e, i) =>
                  <Item key={i} onClick={() => onOptionClicked(e)}>
                     <Fs_base full>{e}</Fs_base>
                  </Item>
               )
            }
         </SelectContainer>
      </>
   )
}

export default SelectFiled