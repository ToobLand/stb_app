import React, { useContext } from 'react';
import MenuIconBtn from '../../commons/MenuIconBtn/MenuIconBtn.component';
import { history } from '../../../routes';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { style } from '@material-ui/system';
import styleCustom from './MenuTop.module.scss';

const MenuTop = () => {

    /*const handleClick = pathname => () => {
        history.push(pathname);
        alert('clicked');
    };*/
    const handleClick = (pathname) => () => {
      
      //history.push('/test/');
      alert(pathname);
    };
    return (
      <div className={styleCustom.menuContainer}>
          <MenuIconBtn Icon={<AccessAlarm/>} onClick={handleClick('/test/')} />
          <MenuIconBtn Icon={<ThreeDRotation/>} onClick={handleClick('/test/2')} />
          <MenuIconBtn Icon={<AccessAlarm/>} onClick={handleClick('/test/3')} />
          <MenuIconBtn Icon={<ThreeDRotation/>} onClick={handleClick('/test/4')} />
      
          
      </div>
    );
  };

export default MenuTop;
