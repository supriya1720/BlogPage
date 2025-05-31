import {Link} from 'react-router-dom'
import './NavBar.css'
function Navbar(){
    return(<div>
                <div className='upper-blog'>
                    <div className='upper11'>
                        <Link to="/Home"><button className='nav-but'>Home</button></Link>
                        <Link to="/Blog"><button className='nav-but'>Blog</button></Link>
                    </div>
                    <div className='upper12'>
                        <Link to="/Services"><button className='nav-but'>Services</button></Link>
                        <Link to="/About"><button className='nav-but'>About</button></Link>
                    </div>
                </div>
            </div>);
}
export default Navbar;