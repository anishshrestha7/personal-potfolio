import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-customBorder text-textSecondary text-[14px] mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <p>@2026 <span className="cursor-pointer font-medium text-[16px] transition-colors duration-300 hover:text-primary" onClick={() => window.location.href = "/"}>Anish Shrestha</span></p>
      </div>
    </footer>
  );
};

export default Footer;
