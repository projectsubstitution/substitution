import React from 'react';

const NavigationMenu: React.FC = () => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;