import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const Wrapper = styled.div``;
const Label = styled.label``;
const Input = styled.input``;


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper>
  
    <Label>
      <Icon id={icon} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Label>
    <Input type="text" placeholder={placeholder} />
  
  
  </Wrapper>
};

export default IconInput;
