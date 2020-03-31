import React from 'react';
import { MobileNav as MobileNavStyled } from  './styles';

const MobileNav = props => {
  return (
    <MobileNavStyled {...props}>
      {props.name}
    </MobileNavStyled>
  );
};

export default MobileNav;
