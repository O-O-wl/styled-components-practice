import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
        display:inline-block;
        border: solid black 1px;
        border-radius: 3px;
        padding : 1rem;

        font-size:${props=>props.fontSize};
        ${props=>props.big&&`font-size:2rem;
          padding : 2rem`
        }
        &:hover{
          background:black;
          color:white;
        }
        `
const StyledButton = ({
    children,
    big,
    ...rest
}) => {
    return ( <Wrapper big = {
            big
        }
        fontSize = "1.25rem" { ...rest
        } > {
            children
        } </Wrapper>
    )
}
export default StyledButton;