import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from '../../../../../state/module/actionCreators';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const NewContentblock = (props) => {
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
  const [value, setValue] = React.useState('female');

  /*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };*/
  const handleChange = (event) => {
    setValue(event.target.value);
    
  };
  const handleSave = () => {
    alert(value);
    dispatch(actionCreators.saveContentblock({payload:{type:value,id_module:props.currentModule.id,id_user:props.currentModule.id_user}}));
    setOpen(false);
  };
    return(
    <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
       Contentblock aanmaken
      </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nieuw contentblock</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.content}
          </DialogContentText>
          <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
          <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="Theorie"
          labelPlacement="end"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Oefening"
          labelPlacement="end"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="Video"
          labelPlacement="end"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="primary" />}
          label="File"
          labelPlacement="end"
        />
        </RadioGroup>
          
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
export default NewContentblock;
