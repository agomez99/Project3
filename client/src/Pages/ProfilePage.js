import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../context/authContext/authContext'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  SignUp = (props) =>{
  const classes = useStyles();
  const {registerUser, userAuth, errors, setError, clearErrors} = useContext(AuthContext)
  
  useEffect(() => {
    if(userAuth) {
      props.history.push('/')
    }
  }, [userAuth, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        avatar: ''
    })
    const {name, email, password, password2,avatar}= user

    const handleChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
        clearErrors()
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(password !== password2) {
            setError({msg: "passwords don't match"})
        } else {
            registerUser({name, email, password,avatar})
            clearErrors()
        }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className="reg-form">
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                type="text"
                id="Name"
                label="Name"
                autoFocus
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               type="text"
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Password Again"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password2}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            value="Sign Up" 
            variant="contained"
            color="primary"
            className="btne"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp;