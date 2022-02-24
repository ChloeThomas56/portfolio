import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function TitleAnimation() {
    return (
        <Container>Chloé Thomas</Container>
    )
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px); }
    100% {opacity: 1; transform: translateY(0); }
`

const Container = styled.h1`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
`