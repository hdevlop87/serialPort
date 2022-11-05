import React from 'react'
import { Container, Title } from './BoxCard.styled'
import { H6 } from '../../styles'

const BoxCard = ({children,title,...rest}) => {
    return (
        <Container {...rest}>
            <Title>
                <H6 bold>
                    {title}
                </H6>
            </Title>
            {children}
        </Container>
    )
}

export default BoxCard