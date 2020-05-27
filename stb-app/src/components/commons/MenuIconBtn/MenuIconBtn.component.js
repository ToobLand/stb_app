import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import style from './MenuIconBtn.module.scss';
import PropTypes from 'prop-types';

const MenuIconBtn = ({Icon,onClick}) => {
   
    return(
        
            <div className={style.btn_icon} onClick={onClick}>
                {Icon}
            </div>
        
    );
}
export default MenuIconBtn;