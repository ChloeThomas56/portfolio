import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GoChevronRight } from 'react-icons/go';

export default function TitleAnimation() {
    return (
        <Container><GoChevronRight /></Container>
    )
}

const animation = keyframes`
    0% {transform: translate(0) }
    50% {transform: translate(-2rem) }
    100% {transform: translate(0rem) }
`

const Container = styled.h1`
    transform: translate(0);
    animation-name: ${animation};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`