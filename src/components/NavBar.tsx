// @ts-nocheck
import logo from '../Active.png'
import { Link } from 'react-router-dom';
import GetJobListings from '../containers/GetJobListings';

const NavBar = () => {
  return (
    <div>
      <Link  to="/" onClick={()=>GetJobListings()} >
      <img src={logo} alt="logo" />
    </Link>
    </div>
  )
}

export default NavBar