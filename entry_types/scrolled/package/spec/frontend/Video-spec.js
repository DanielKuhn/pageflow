import React from 'react';
import '@testing-library/jest-dom/extend-expect'

import {render} from '@testing-library/react'

import {Video} from 'frontend/Video';

describe('Video', () => {
  it('renders', () => {
    const {getByRole} =
      render(<Video id="TODO" />)

    expect(getByRole('img')).toHaveAttribute('src', expect.stringContaining('mp4'));
  });
});
