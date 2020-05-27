
import styleCustom from './MediaCard.module.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
  card: {
    width: '250px',
    height: '300px',
    margin:0,
    color:'#ffffff'
  },
  bode2:{
    color:'#ffffff'
  },
  media: {
    height: 140,
  },
  content: {
    height:300
  },
  movingState: {
    background:'grey'
  },
  movingDropzone:{
    background:'green'
  }
});

const MediaCard = (props) => {
  
  const classes = useStyles();

  const clickHandlerLink=(e)=>{
    if(props.movingState===1){
      (e).preventDefault();
    }else{
      // doe je ding
    }
  }
const clickHandlerMoving=()=>{
  
  if(props.movingState===1){
    props.unsetmoving();
    props.setMovingIdFolder(0);
  }else{
    props.moving();
    props.setMovingIdFolder(props.id_folder);
  }
}

const checkClassname=()=>{
  if(props.moving_id_folder===props.id_folder){
    return styleCustom.movingState;
  }else{
    if(props.movingState===1){
      return styleCustom.movingDropzone;
    }else{
      return true;
    }
  }
}
  return (
    <Card className={classnames(classes.card, checkClassname())}
    onClick={props.onClick}
    >
       <Link 
       key={`folderClick_${props.id_folder}`} 
       to={`${props.linkUrl}`}
       onClick={ (e)=>{ clickHandlerLink(e); } } >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/img/test_thumb.jpg"
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>clickHandlerMoving()}>
          verplaatsen
        </Button>
        <Button size="small" color="primary">
          verwijderen
        </Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;