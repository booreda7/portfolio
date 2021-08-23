import './skill.css'
import { CardMedia, Card, CardContent, Grid } from '@material-ui/core';
import useStyles from './skills.js'
import html from './html.png'
import css from './css.png'
import js from './jslogo.jpg'
import react from './react.png'
import git from './git.png'
import github from './github.png'
import material from './material-ui.png'
import alan from './alan-ai.png'
import jquery from './jquery-logo.png'


const Skills = () => {
    const classes = useStyles();
    const skills = [
        { img: html, title: 'HTML' },
        { img: css, title: 'CSS' },
        { img: js, title: 'JavaScript' },
        { img: react, title: 'ReactJS' },
        { img: git, title: 'Git' },
        { img: github, title: 'Github' },
        { img: material, title: 'Material ui' },
        { img: alan, title: 'Alan AI' },
        { img: jquery, title: 'jQuery' }
    ]
    return (
        <div className="skillsSection">
            <h1 className="wik">What I know</h1>
            <h1 className="skills">Skills</h1>
            <div className="line"></div>
            <div className='left'>
            <Grid className={classes.gridContainer} container spacing={3}>
                {skills.map((skill) => (
                    <Grid item xs={12} sm={6} md={4} className={classes.gridItem} >
                        <Card className={classes.card}>
                            <CardMedia image={skill.img} className={classes.img} />
                            <CardContent> <h1 > {skill.title} </h1> </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </div>
        </div>
    )
}

export default Skills;
