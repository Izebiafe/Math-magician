import { render, screen } from '@testing-library/react';
import {
  FirstLine,
  SecondLine,
  ThirdLine,
  FourthLine,
  FifthLine,
} from '../components/buttons';

describe('Buttons', () => {
  it('should render four buttons with correct classNames', () => {
    const handleClick = jest.fn();
    render(<FirstLine handleClick={handleClick} />);
    expect(screen.getAllByRole('button')).toHaveLength(4);
    expect(screen.getByText('AC')).toHaveClass('first-line-button');
    expect(screen.getByText('+/-')).toHaveClass('first-line-button');
    expect(screen.getByText('%')).toHaveClass('first-line-button');
    expect(screen.getByText('÷')).toHaveClass('first-line-button last');
  });
});

describe('Buttons', () => {
  it('should render four buttons with correct classNames', () => {
    const handleClick = jest.fn();
    render(<SecondLine handleClick={handleClick} />);
    expect(screen.getAllByRole('button')).toHaveLength(4);
    expect(screen.getByText('7')).toHaveClass('second-line-button');
    expect(screen.getByText('8')).toHaveClass('second-line-button');
    expect(screen.getByText('9')).toHaveClass('second-line-button');
    expect(screen.getByText('x')).toHaveClass('second-line-button last');
  });
});

describe('Buttons', () => {
  it('should render four buttons with correct classNames', () => {
    const handleClick = jest.fn();
    render(<ThirdLine handleClick={handleClick} />);
    expect(screen.getAllByRole('button')).toHaveLength(4);
    expect(screen.getByText('4')).toHaveClass('third-line-button');
    expect(screen.getByText('5')).toHaveClass('third-line-button');
    expect(screen.getByText('6')).toHaveClass('third-line-button');
    expect(screen.getByText('-')).toHaveClass('third-line-button last');
  });
});

describe('Buttons', () => {
  it('should render four buttons with correct classNames', () => {
    const handleClick = jest.fn();
    render(<FourthLine handleClick={handleClick} />);
    expect(screen.getAllByRole('button')).toHaveLength(4);
    expect(screen.getByText('1')).toHaveClass('fourth-line-button');
    expect(screen.getByText('2')).toHaveClass('fourth-line-button');
    expect(screen.getByText('3')).toHaveClass('fourth-line-button');
    expect(screen.getByText('+')).toHaveClass('fourth-line-button last');
  });
});

describe('Buttons', () => {
  it('should render four buttons with correct classNames', () => {
    const handleClick = jest.fn();
    render(<FifthLine handleClick={handleClick} />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByText('0')).toHaveClass('fifth-line-button');
    expect(screen.getByText('.')).toHaveClass('fifth-line-button');
    expect(screen.getByText('=')).toHaveClass('last equal');
  });
});
