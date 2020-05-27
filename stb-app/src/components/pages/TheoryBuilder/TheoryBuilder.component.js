import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Unsplash, { toJson } from 'unsplash-js';
import {SearchImage,PickDesign} from './components/index';
import Button from '@material-ui/core/Button';

const TheoryBuilder = (props) => {
   
        const [image, setImage] = useState("");
        const [design, setDesign] = useState("");
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
            <div> <Button variant="contained" color="primary">Save</Button></div>
            <span>Selected image: {image}</span>
            <span>Selected design: {design}</span>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Vul hier je theorie in</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                
        </div>
    );
}

export default TheoryBuilder;