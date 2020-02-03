import React from 'react';
import Styled from 'styled-components';

import percentFormat from '../../../helpers/percentFormat.js';

const CustomizeButton = Styled.button`
  color: #0c82a5;
  background-color: transparent;
  border-color: transparent;
  float: right;
  height: 16px;
  font-size: 1rem;
`;


const CustomizeBar = ({loanType, rate}) => (
  <div>
    <span>{`${loanType}, ${percentFormat(rate)}`}</span>
    <CustomizeButton>
      <span>Customize Calculations</span>
    </CustomizeButton>
  </div>
);

export default CustomizeBar;
