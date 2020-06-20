import React from 'react';
import './style.css';

const MainFooter = ()=> {
   
        return (
            <div className='main-footer'>
                   <hr />
                    <div className='row'>
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()}|All rights reserved
                        </p>
                </div>         
            </div>
        );
    }

export default MainFooter;


