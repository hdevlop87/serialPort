import React from 'react'
import { Container, Content, IconContainer } from './input.styled'
import { Fs_base, Fs_sm } from '../../styles'
import { Icon } from '@iconify/react';
import TextFiled from '../TextFiled'
import SelectFiled from '../SelectFiled'
import DatePickerFiled from '../DatePickerFiled'
import CheckBox from '../CheckBox';

const Input = ({ type, LabelPos, label, icon, error, options, ...rest }) => {
   const isCheckbox = type === 'checkbox'

   return (
      <Container LabelPos={LabelPos}>
         {!isCheckbox && <Fs_base bold>{label}</Fs_base>}

         <Content isCheckbox={isCheckbox} outlined = {!isCheckbox} isError={error}>
            {icon && <IconContainer>
               <Icon icon={icon} width={24} height={24} />
            </IconContainer>
            }

            {(() => {
               switch (type) {
                  case 'text':
                     return <TextFiled  {...rest} />
                  case 'select':
                     return <SelectFiled options={options} {...rest} />
                  case 'date':
                     return <DatePickerFiled {...rest} />
                  case 'checkbox':
                     return <CheckBox {...rest} />
                  default:
                     return null
               }
            })()}
         </Content>

         {isCheckbox && <Fs_base bold>{label}</Fs_base>}
      </Container>
   )
}

export default Input