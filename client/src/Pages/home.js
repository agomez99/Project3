import React, {useContext, useEffect} from 'react'

import AuthContext from '../../context/authContext/authContext'


const Home = () => {

  const {getUser} = useContext(AuthContext)

  useEffect(() => {
    getUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="app-container">
      <div className="main">
        <div className="filter">
        <h1>Home</h1>
        </div>
      
      </div>
    </div>
  )
}

export default Home
