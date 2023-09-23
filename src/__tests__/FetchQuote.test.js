import React from 'react';
import { render, screen, act } from '@testing-library/react';
import FetchQuote from '../api/FetchQuote';

describe('FetchQuote', () => {
  it('should render a quote when data is fetched successfully', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([{ quote: 'Test quote' }]),
    });

    await act(async () => {
      render(<FetchQuote />);
    });

    expect(screen.getByText(/"Test quote"/i)).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});
