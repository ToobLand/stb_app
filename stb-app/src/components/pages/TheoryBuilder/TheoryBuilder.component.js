import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Unsplash, { toJson } from 'unsplash-js';
import {SearchImage,PickDesign} from './components/index';
import Button from '@material-ui/core/Button';

const TheoryBuilder = (props) => {
        useEffect( () => {
            console.log(props.match.params.id_contentblock);
            setId_contentblock(props.match.params.id_contentblock);                         
        });
        const [image, setImage] = useState("");
        const [design, setDesign] = useState("");
        const [text, setText] = useState("");
        const [id_contentblock, setId_contentblock] = useState(0);
        const handleSave=()=>{
            let obj_theory= {design:design,image:image,text:text};
            console.log(obj_theory);
            let jsonText=JSON.stringify(obj_theory);
            props.saveTheory(id_contentblock,jsonText);
        }
        return (

        <div className='contentblocklist_container'>
            <div><SearchImage
            setImage={setImage}
            /></div>
            <div> 
            <PickDesign
            setDesign={setDesign}
            />
            </div>
            <div> <Button variant="contained" color="primary"
            onClick={()=>handleSave()}>Save</Button></div>
            <span>Selected image: {image}</span>
            <span>Selected design: {design}</span>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Vul hier je theorie in</p>"
                    onInit={ editor => {
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data);
                    } }
                    
                />
                
        </div>
    );
}

export default TheoryBuilder;