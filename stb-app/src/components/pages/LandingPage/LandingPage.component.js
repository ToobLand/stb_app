//import React, { Component } from './node_modules/react';
import React, { Component } from 'react';
//import PropTypes from './node_modules/prop-types';

//import { BackButton } from '../../commons';
import {MenuTop} from '../../layout';
import style from './LandingPage.module.scss';

class LandingPage extends Component {


  
  render() {
    const user_name = 'Tobias Landman';
    console.log(style);
    console.log(style.test);
    return (
      <div className='container'>
        <MenuTop />
        <div className={style.landing_container}>
          
          <span>Test</span><span>{user_name}</span>
        </div>
      </div>
    );
  }
}

export default LandingPage;
