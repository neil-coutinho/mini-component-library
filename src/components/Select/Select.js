import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';




const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    color: ${COLORS.gray700};
    width: max-content;
    position: relative;
    padding: 12px 16px;
    padding-right: 24px;
    
    `;

  const Select = styled.select`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    
    
    `;

  const CustomSelect = styled.div`
    padding-right: 16px;

    ${Select}:focus + & { 
      outline-color: #4374CB;
      -webkit-outline: 2px solid #4374CB;
    }

    ${Select}:hover + & { 
      color: ${COLORS.black}
    }
  `;

  const IconStyles = styled(Icon)`
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    pointer-events: none;
    font-size: 1rem;
  `; 


  return (
    <Wrapper>
     
       <Select value={value} onChange={onChange}>
        {children}
      </Select>
      <CustomSelect>
        {displayedValue}
        <IconStyles id="chevron-down" size={16}></IconStyles>
      </CustomSelect>

    </Wrapper>
   
  );
};

export default Select;
