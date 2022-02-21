import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    padLeft: 24,
    fontSize: 16, 
    iconSize: 16,
  },
  large: {
    height: 36,
    padLeft: 36,
    fontSize: 18,
    iconSize: 24
  }
}


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLES[size];
  
  return <>
  
    <Label>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconStyles id={icon} size={style.iconSize}/>
      <Input type="text" placeholder={placeholder}  width={width} style={{ 
        '--height': style.height+'px',
        '--padLeft': style.padLeft+'px',
        '--fontSize': style.fontSize / 16 + 'rems'  

      }}/>
    </Label>
    
  
  
  </>
};

const Label = styled.label`
  position: relative;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black};
  }

`;


const Input = styled.input`
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  outline-offset: 3px;
  width: ${ ({width}) => `${width}px`};
  color:inherit;
  font-weight: 700;
  height: var(--height);
  padding-left: var(--padLeft);
  font-size: var(--fontSize);

  &::placeholder {
    color: ${COLORS.gray300};
    font-weight: 400;
  }

  &:focus {
    color: ${COLORS.gray500};
  }
`;

const IconStyles = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  margin: auto;
  bottom: 0;

`;

export default IconInput;
