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
    padding: 12px 16px;
  
  `;

  const Select = styled.select`
  
  
  `;

  const CustomSelect = styled.div`

  `;


  return (
    <Wrapper>
      <CustomSelect>
        {displayedValue}
      </CustomSelect>
       <Select value={value} onChange={onChange}>
        {children}
      </Select>

    </Wrapper>
   
  );
};

export default Select;
