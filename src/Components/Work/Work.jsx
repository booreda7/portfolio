import React from 'react'
import { Card, CardActions, CardContent, Button, CardMedia, CardHeader, Typography, Grid} from '@material-ui/core'
import chat from './chat.PNG'
import covid from './covid.PNG'
import ecom from './ecom.PNG'
import news from './news.PNG'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card:{
        height: '480px',
        width: '420px',
    },
    cardHeader:{
        textAlign:'center',
    },
    media: {
        height: '100px',
        paddingTop: '56.25%', 
      },
      cardActions:{
        display: 'flex',
        justifyContent: 'space-around',
      },
      gridContainer:{
          height:'100%',
          width:'1400px',
          position:'absolute',
          top:'100px',
          left:'200px',
          [theme.breakpoints.down('md')]: {
            left:'0px',
          },
      }
  }));

const Work = () => {
    const classes = useStyles();

    const works = [
            {title:'Chat App', img:chat, text:'This is a chat app made with react chat engine, I used react, Js, html, css, axios and chat engine. if you want to check it out, username and password are "123"', demo:'https://booreda7.github.io/Chat-App/' , code:'https://github.com/booreda7/Chat-App'},
            {title:'e-commerce app', img:ecom, text:'This is an e-commerce website, I used react, Js, html, css, material ui, stripe js, react router dom, react hook form and commerce js', demo:'https://booreda7.github.io/ecomv2/' , code:'https://github.com/booreda7/ecomv2'},
            {title:'voice assistent news app', img:news, text:'This is a voice assistant news app, I used react, Js, html, css, material ui, alan ai, classnames and words to numbers', demo:'https://booreda7.github.io/News-Alan-Ai/' , code:'https://github.com/booreda7/News-Alan-Ai'},
            {title:'covid tracker', img:covid, text:'This is an app that tracks covid cases around the world, I used react, Js, html, css, axios, react countup and react chart js', demo:'https://booreda7.github.io/Covid-19-Tracker/' , code:'https://github.com/booreda7/Covid-19-Tracker'},
        ]
    
    

    return (
        <div >
            <div >
                <Grid container spacing={10} className={classes.gridContainer}>
                    {works.map((work) => (
                    <Grid item xs={12}  lg={6} className={classes.gridItem}>
                        <Card className={classes.card}>
                            <CardHeader title={work.title} className={classes.cardHeader}/>
                            <CardMedia image={work.img} className={classes.media}/>
                            <CardContent>
                                <Typography variant="body1" color="textPrimary" component="p">
                                    {work.text}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions} >
                                <Button size="small" color="primary" variant='contained' href={work.demo}  target="_blank"> Demo </Button>
                                <Button size="small" color="primary" href={work.code} target="_blank"> code </Button>
                            </CardActions>
                        </Card> 
                    </Grid> 
                    ) )}
                </Grid>
            </div>
        </div>
    )
}

export default Work;