import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "20px",
    marginBottom:"30px",
    "width":"85%",
    "marginLeft": "7%"
  },
  avatar: {
    backgroundColor: red[500],
  },
  actions:{
    borderTop: "1px solid gray",
    margin: "auto 15px"
  },
  button:{
    color:"#439e75",
    border:"1px solid #439e75",
    margin:"5px 10px 5px 0",
    fontSize: "9px"
  }
}));


const NewsItems = (props) =>{
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props.key} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={props.source.url} width="100" height="100" title="image" alt="image"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <RssFeedIcon style={{color:"#439e75"}}/>
          </IconButton>
        }
        title={props.source.title}
      />
   
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{"fontWeight":"bold"}}>
        {props.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p" style={{ "marginTop": "25px"}}>
            {moment(new Date(props.created_at)).format("dddd [,] d MMMM YYYY [AT] H:mm")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        {props.keywords.map(data=>(
            <Button variant="outlined" className={classes.button} key={data.id}>
            {data.name}
          </Button> ))}
      </CardActions>
     
    </Card>
  );
}

export default NewsItems;