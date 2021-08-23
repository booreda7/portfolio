import './home.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    github:{
        fontSize:'2.5rem',
    },
    linkedin:{
        fontSize:'2.5rem',
    },
    email:{
        fontSize:'2.5rem',
    }
     
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <div className="home">
            <Typography> <h1 className="title">Hi, I'm Reda, </h1></Typography>
            <Typography> <h2 className="title2" >a software developer, </h2></Typography>
            <Typography> <h3 className="text">I specialize in front-end web development, using <u className="under"> Javascript </u> and <u className="under"> React</u> with multiple react libraries.</h3></Typography>
            <div className="photo"></div>
            <div className='links' >
               <a href='https://github.com/booreda7' target="_blank"> <GitHubIcon className={classes.github} /></a> 
               <a href='https://www.linkedin.com/in/boo-reda-23051921a/' target="_blank"> <LinkedInIcon className={classes.linkedin} /></a> 
               <a href='mailto:ratr908@gmail.com'> <EmailIcon className={classes.email} /></a> 
            </div>
        </div>
    )
}

export default Home;