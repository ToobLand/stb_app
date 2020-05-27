import React, { useEffect } from 'react';
import {MenuTop} from '../../layout';
import {NewContentblock,ContentblockList} from './components/index';
import style from './ModuleBuilder.module.scss';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const ModuleBuilder = (props) => {
    
    useEffect( () => {
        console.log(props.match.params.id_module);
        console.log(props.currentModule); 

        if(props.currentModule.id!=props.match.params.id_module){
            props.getModule(props.match.params.id_module);
            props.getContentblocks(props.match.params.id_module);
        }
        
        
    });
    const go_back = ()=>{
        props.history.goBack();
    }
    
    return (
      <div className='container'>
        <MenuTop />
        <Button onClick={()=>go_back()}>terug</Button>
       <h1>{props.currentModule.title}</h1>
       <NewContentblock
       currentModule={props.currentModule}/>
      <ContentblockList 
      contentblocks={props.contentblocks}
      />
      </div>
    );
  }

export default ModuleBuilder;
