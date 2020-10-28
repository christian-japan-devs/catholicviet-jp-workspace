import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NesseiUiProps {}

const StyledNesseiUi = styled.div`
  color: pink;
`;

export const NesseiUi = (props: NesseiUiProps) => {
  return (
    <StyledNesseiUi>
      <h1>Welcome to nessei-ui!</h1>
    </StyledNesseiUi>
  );
};

export default NesseiUi;
