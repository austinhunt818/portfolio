import { render, fireEvent } from '@testing-library/react';
import { NavDrawer } from '../navDrawer';

describe('NavDrawer', () => {
  beforeEach(() => {
    document.documentElement.className = '';
    localStorage.clear();
  });

  it('toggles dark mode and stores preference', () => {
    const { getByRole } = render(<NavDrawer />);
    const toggle = getByRole('button', { name: /toggle dark mode/i });

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('isDarkMode')).toBe('true');

    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('isDarkMode')).toBe('false');
  });

  it('opens on mouse enter and closes on mouse leave', () => {
    const { getByLabelText } = render(<NavDrawer />);
    const drawer = getByLabelText('Main navigation');

    // closed state should translateX(240px)
    expect(drawer).toHaveStyle('transform: translateX(240px)');

    fireEvent.mouseEnter(drawer);
    expect(drawer).toHaveStyle('transform: translateX(0px)');

    fireEvent.mouseLeave(drawer);
    expect(drawer).toHaveStyle('transform: translateX(240px)');
  });
});
