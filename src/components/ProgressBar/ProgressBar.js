/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: {
    height: '8px',
    padding: 0,
  },
  medium: {
    height: '12px',
    padding: 0,
  },
  large: {
    height: '16px',
    padding: '4px'
  }
}

// size = ['small', 'medium', 'large'],
const ProgressBar = ({ value, size }) => {

  const style = styles[size];

  return <ProgressbarStyles role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{'--padding': style.padding}}>
    {/* {value}% */}
    <BarWrapper>
      <BarStyles width={value} style={{'--height': style.height}}></BarStyles>
    </BarWrapper>
      
    </ProgressbarStyles>
};

  const ProgressbarStyles = styled.div`
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray15};
    background: ${COLORS.transparentGray15};
    border-radius: 4px;
    padding: var(--padding);
    
    
    `;

  const BarWrapper = styled.div `
    overflow: hidden;
    border-radius: 4px;
  `
  
  const BarStyles = styled.div`
    background: ${COLORS.primary};
    width: ${({width}) => `${width}%`};
    height: var(--height);
    border-radius: 4px 0 0 4px;
   
    
  `;
export default ProgressBar;
