import React from 'react'
import { IconContainer, MyIcon } from './IconButton.styled'

const IconButton = ({ size, icon, color }) => {

    return (
        <IconContainer>
            <MyIcon icon={icon} size={size} color={color} />
        </IconContainer>
    )
}

export default IconButton