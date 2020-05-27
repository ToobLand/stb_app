import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from '../../../../../state/folder/actionCreators';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const NewFolder = (props) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle]= React.useState('');
    const [description, setDescription]= React.useState('');
    const id_folder = props.id_folder;
    const dispatch = useDispatch();
    
    const handleClickOpen = () => {
        setOpen(true);
    };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setOpen(false);
  };
  const handleSave = () => {
    alert(title+" - "+description);
    dispatch(actionCreators.saveFolder({payload:{title:title,description:description,id_folder:id_folder}}));
    setOpen(false);
  };
    return(
    <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {props.buttonText} {id_folder}
      </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nieuwe folder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.content}
          </DialogContentText>
          <TextField
            onChange={(event)=>{setTitle(event.target.value)}}
            value={title}
            autoFocus
            margin="dense"
            id="title_stb"
            label="Titel"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(event)=>{setDescription(event.target.value)}}
            value={description}
            margin="dense"
            id="description_stb"
            label="Beschrijving"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuleren
          </Button>
          <Button onClick={handleSave} color="primary">
            Aanmaken
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
}
export default NewFolder;
