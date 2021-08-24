import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    card:{
        height:'310px',
        width:'300px'
    },
    img:{
        height:'230px'
    },
    gridContainer:{
        position:'relative',
        top:'150px',
        left:'400px',
        width:'1000px',
        [theme.breakpoints.down('md')]: {
            left:'0px',
     },
    },
    
}))
   

export default useStyles;