/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const ProgressbarStyles = styled.div`
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray15};
  background: ${COLORS.transparentGray15};
  

`;

const BarStyles = styled.div`
  background: ${COLORS.primary};
  width: ${({width}) => `${width}%`};
  height: 8px;
  
`;


const ProgressBar = ({ value, size }) => {
  return <ProgressbarStyles role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    {/* {value}% */}
      <BarStyles width={value}></BarStyles>
    </ProgressbarStyles>
};

export default ProgressBar;
