import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import image from './butter.png';
import './style.css'
export default function Footer()  {   
    return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="md">
      <a href="https://buttercms.com/"><img src={image} className="footer" alt = "footer"></img> </a>

      </Container>
    </AppBar>
)
}