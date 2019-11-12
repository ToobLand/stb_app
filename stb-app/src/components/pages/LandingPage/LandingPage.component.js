import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import { BackButton } from '../../commons';
import {MenuTop,MediaCard} from '../../layout';
import style from './LandingPage.module.scss';
import Button from '@material-ui/core/Button';



class LandingPage extends Component {

  
  
  render() {
    const user_name = 'Tobias Landman';
    
    return (
      <div className='container'>
        <MenuTop />
        <div className={style.landing_container}>
          <input type='text' value={this.props.change} onChange={(e)=>this.props.changeVal(e.target.value)} />
          <Button variant="contained" color="primary" onClick={()=>this.props.onIncrementCounter(this.props.change)}>Klik hier</Button> - <span>{this.props.ctr}</span><span>{user_name}</span>
          <div className={style.card_container}>
        <MediaCard 
        title='Aardrijkskunde 12'
        description='Dit is een module die beschrijft wat je wil doen'
        />
        <MediaCard 
        title='Aardrijkskunde 12'
        description='Dit is een module die beschrijft wat je wil doen'
        />
        <MediaCard 
        title='Aardrijkskunde 12'
        description='Dit is een module die beschrijft wat je wil doen'
        />
        <MediaCard 
        title='Aardrijkskunde 12'
        description='Dit is een module die beschrijft wat je wil doen'
        />
        <MediaCard 
        title='Aardrijkskunde 12'
        description='Dit is een module die beschrijft wat je wil doen'
        />
        <MediaCard 
        title='Aardrijkskunde 12'
        description='Dit is een module die beschrijft wat je wil doen'
        />
          </div>

        </div>
      </div>
    );
  }
}
LandingPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  subjectContent: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    groups: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    latestEdition: PropTypes.string.isRequired,
    theory: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingPage;
