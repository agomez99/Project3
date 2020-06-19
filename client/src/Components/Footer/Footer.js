import React from 'react';
import ModalFooter from "react-bootstrap/ModalFooter";
import Nav from 'react-bootstrap/Nav';
import './style.css';

const MainFooter = ()=> {
   
        return (
            <div className='main-footer'>
                <div className='footer-container'>
                   <hr />
                    <div className='row'>
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()}|All rights reserved
                        </p>
                    </div>
                </div>         
            </div>
        );
    }

export default MainFooter;


