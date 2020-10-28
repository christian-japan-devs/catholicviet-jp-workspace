import React from 'react';
import { render } from '@testing-library/react';

import NesseiUi from './nessei-ui';

describe('NesseiUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NesseiUi />);
    expect(baseElement).toBeTruthy();
  });
});
