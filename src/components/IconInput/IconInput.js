import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';



const Label = styled.label`
  position: relative;
`;


const Input = styled.input`
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  outline-offset: 3px;
  width: ${ ({width}) => `${width}px`}
`;

const IconStyles = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  margin: auto;

`;


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <>
  
    <Label>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconStyles id={icon} />
      <Input type="text" placeholder={placeholder}  width={width} />
    </Label>
    
  
  
  </>
};

export default IconInput;
