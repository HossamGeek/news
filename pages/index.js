import Head from 'next/head'
import NavBar from '../components/Navbar'
import Newsitem from '../components/Newsitem'
import Hidden from '@material-ui/core/Hidden';
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Alert} from 'react-bootstrap'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {useState,useEffect} from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:"75px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
    position: "fixed",
    width: "20%",
    height: "100%"

  },
}));

export default function Home() {
  const classes = useStyles();
  const [items,setItems] = useState([])
  useEffect(()=>{
    axios.get('http://80.240.21.204:1337/news?skip=10&limit=20',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      }).then(res=>{
      console.log("res >>" ,res)

      setItems(res.data.news)
    }).catch(err=>{console.log("err",err);})
  },[])
  return (
    <div>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main>
        <NavBar/>
        <div className={classes.root}>
      <Grid container >
      <Hidden mdDown>
             <Grid item xs={3} style={{"paddingLeft":"50px"}}>
              <Paper className={classes.paper}></Paper>     
        </Grid>
        </Hidden>
        
        <Grid item xs={12} lg={6} style={{"padding":"0px 35px"}}>
          {items.length ? items.map(data=>(
          <Newsitem source={data.source}
          created_at={data.created_at} title ={data.title} keywords={data.keywords} />))
          : <Alert  variant="danger">No News fetch data</Alert>}
        </Grid>
        <Hidden mdDown>
        <Grid item xs={3}>
          <Paper className={classes.paper}></Paper>
        </Grid> 
        </Hidden>
      </Grid>
    </div>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
