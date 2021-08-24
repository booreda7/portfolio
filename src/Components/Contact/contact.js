import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    form:{
        width:'500px',
        height:'500px',
        position:'relative',
        left:'900px',
        top:'-120px',
        [theme.breakpoints.down('md')]: {
            left:'83px',
            top:'150px',
          },
          [theme.breakpoints.down('xs')]: {
            left:'5px',
            top:'190px',
          },
    },
    email:{
        marginBottom:'30px'
    },
    btn:{
        height:'50px',
        marginTop:'20px',
        position:'relative',
        left:'125px',
        width:'50%',
        display:'flex',
        top:'20px',
    },
    input:{
        width:'100%',
    }
    }))
   

export default useStyles;