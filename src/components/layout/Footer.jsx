import React from 'react';
import { PERSONAL_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark-green)] py-8 text-center text-sm text-[var(--color-cream)]/70">
      <p className="font-medium">Designed & Built by {PERSONAL_INFO.name} © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;