import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';

function Home() {
  return (
    <div className='home'>
      <div className="home-header">
        <div className="header-left">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="header-right">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon className='icons'/>
          <AccountCircleIcon className='icons'/>

        </div>
      </div>
      <div className="home-body">
             <img src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png" alt="" />
             <div className="home-inputContainer">
               <Search hideButtons/>
             </div>
      </div>
    </div>
  )
}

export default Home