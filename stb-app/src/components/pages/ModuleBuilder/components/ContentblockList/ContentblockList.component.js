import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const ContentblockList = (props) => {
    
    const contenttype= (type) =>{
        switch(type){
            case 1:
                return "theoryblock";
            case 2:
                    return "questionblock";
            case 3:
                return "videoblock";
            case 4:
                return "fileblock";
            default:
                return "error";
        }
    }

    console.log(props);
    let blocks = (<CircularProgress />);
    if ( props.contentblocks && props.contentblocks.length>0 ) {
        blocks = ( <div>
        {Object.values(props.contentblocks).map((block,index) => {
            
            return <Link 
            key={contenttype(block.contenttype)+"_"+block.id }
            to={"/"+contenttype(block.contenttype)+"/"+block.id }
            >
            <div>{block.title} {block.contenttype}</div>
            </Link>
        })}
    </div>
    );
    }
    return (

        <div className='contentblocklist_container'>
            {blocks}
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
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

export default ContentblockList;