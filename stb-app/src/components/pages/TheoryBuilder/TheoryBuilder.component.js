import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Unsplash, { toJson } from 'unsplash-js';
import {SearchImage,PickDesign} from './components/index';
import Button from '@material-ui/core/Button';
import style from './TheoryBuilder.module.scss';

const validator = require('validator');

const TheoryBuilder = (props) => {
        
        useEffect( () => {
            console.log(props.match.params.id_contentblock);
            setId_contentblock(props.match.params.id_contentblock);    
            
            if(props.theory.id_contentblock!=props.match.params.id_contentblock){
                loadTheory(props.match.params.id_contentblock);
            }                     
        },[props.match.params.id_contentblock]);
       
        const [image, setImage] = useState("");
        const [design, setDesign] = useState("");
        const [text, setText] = useState("");
        const [id_contentblock, setId_contentblock] = useState(0);
        const handleSave=()=>{
            let obj_theory= {image:image,text:text};
            console.log(obj_theory);
            let jsonText=JSON.stringify(obj_theory);
            if(props.theory){
                console.log('update');
                props.updateTheory(props.theory.id,design,jsonText);
            }else{
                console.log('save');
                props.saveTheory(id_contentblock,design,jsonText);    
            }
        }

        const loadTheory= async () =>{
            let result = await props.getTheory(props.match.params.id_contentblock);
            console.log(props);  
            console.log(result);  
        }
        ///// MARK UP JSX, ADD BUTTONS STEP BY STEP
        let stepsToDo='';
        let html_content='';
        let html_design='';
        let loading=false;
    if(props.theory){
    // existing theory or still loading
        if( props.theory.id_theorytemplate=='empty'){
            stepsToDo="loading...";
            loading=true;
        }else{
            if(props.theory.id_theorytemplate && props.theory.id_theorytemplate!=design){
                    setDesign(props.theory.id_theorytemplate);
                    console.log(validator.unescape(props.theory.text));
                    let text=JSON.parse(validator.unescape(props.theory.text));
                    setText(text.text);
                    setImage(text.image);
            }
        }
    }else{
// new theory 

    }   
        
        
        
        if(!loading){

        html_design=<div className={style.designBar}><PickDesign
        setDesign={setDesign}
        /></div>;
        
        let step=0;

        if(design===""){
            step=1;
        }else{
            step=2;
            if(design=='2'){
                html_content=<div className={style.contentWrapper}>
                    <div className={style.imageLeft}>
                    <SearchImage
                    setImage={setImage}
                    /></div>
                    <div className={style.textRight}>
                    <CKEditor
                    editor={ ClassicEditor }
                    data={text}
                    onInit={ editor => {
                        const data = editor.getData();
                        setText(data);
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data);
                    } }
                    
                /></div></div>;
                    

                
            }

        }
    }

        return (

        <div className='contentblocklist_container'>
            {html_design}
            {html_content}
            <div> <Button variant="contained" color="primary"
            onClick={()=>handleSave()}>Save</Button></div>
            <span>Selected image: {image}</span>
            <span>Selected design: {design}</span>
            
                
        </div>
    );
        }

export default TheoryBuilder;