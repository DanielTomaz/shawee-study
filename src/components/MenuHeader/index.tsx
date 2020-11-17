import React from 'react';

import {
  MenuSelect,
} from './styles';

const MenuHeader: React.FC = () => {
  return(
    <MenuSelect >
      <li>Login</li>
      <li>Inscrições abertas</li>
    </MenuSelect>
  )
}

export default MenuHeader;