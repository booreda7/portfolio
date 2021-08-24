import {TextField, Button} from '@material-ui/core'
import useStyles from './contact.js'
import './contact.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import emailjs from 'emailjs-com';

const Contact = () => {
    const classes = useStyles();
    
    const handleSubmit = (e) => {
        e.preventDefault()
 
        emailjs.sendForm('service_bp3v86s', 'template_6vefj4n', e.target, 'user_UeXndvr5FuNj4w77WuWry')
            .then((result) => {
          console.log(result.text);
            }, (error) => {
          console.log(error.text);
         });

        e.target.reset()
    }
    return (
        <div className='contactPage'>
            <div className='header'>Let's chat, I'd be glad to answer you questions</div>
            <form onSubmit={handleSubmit} className={classes.form} action="https://formspree.io/f/myylnpyr" method="POST"> 
                <TextField type="text" name="firstName" label='First Name'   className={classes.input} required/> <br/>
                <TextField  label='Last Name' name='lastName'  className={classes.input}/> <br/>
                <TextField type="email" name="email" label='Email' className={classes.email}   className={classes.input} required/>
                <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={12}
                    className={classes.input}
                    required
                />
                <Button className={classes.btn} variant="contained" color="primary" type='submit'>Send Message</Button>
            </form>
            <div className='alt'> You can also find me here </div>
            <div className="container">
                <a href="https://www.instagram.com/boore_da/" target="_blank"> <InstagramIcon className='icons' fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/reda-ait-cheikh-35021018b/" target="_blank"><LinkedInIcon className='icons' fontSize="large"/></a>
                <a href="https://twitter.com/ArmyBhd" target="_blank"><TwitterIcon className='icons' fontSize="large"/></a>
            </div>
        </div>
        
    )
}

export default Contact;
