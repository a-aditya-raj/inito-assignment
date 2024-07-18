import React from 'react';

interface NavItemProps {
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
  return <div className="text-gray-800 font-medium hover:text-[#1F94AA] hover:cursor-pointer" style={{fontSize: '16px'}}>{text}</div>;
};

export default NavItem;