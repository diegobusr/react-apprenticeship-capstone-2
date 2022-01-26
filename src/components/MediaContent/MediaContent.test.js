import React from 'react';
import MediaContent from '.';
import { render, waitFor } from '@testing-library/react';
import { mockData } from '../../utils/nasa-data-mock.json';

describe('Media Content', () => {
  test('must render the media content', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const { debug } = render(<MediaContent />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    console.log('debug()', debug());
  });
});
