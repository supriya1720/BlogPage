import NavBar from './NavBar.jsx'
import './Services.css'
import RefreshIcon from '/mind-mapping.png'
import CompIcon from '/components.png'
import SpeedIcon from '/monitor.png'
import CustomIcon from '/flexible.png'
import UpdateIcon from '/pen.png'
function service(){
    return(<div><NavBar/>
                <div className='services1'>Sevices Page</div>
                <div className='services2'><span >Our services</span><span className='second111'>What we offer</span></div>
                <div className='services3'>
                    <div className='serviceDisplay'><img className='serviceIcon'src={RefreshIcon}></img>
                    <h1>Refreshing Design</h1></div>
                    <div className='serviceDisplay'><img className='serviceIcon'src={CompIcon}></img>
                    <h1>300+ Components</h1></div>
                    <div className='serviceDisplay'><img className='serviceIcon'src={SpeedIcon}></img>
                    <h1>Speed Optimized</h1></div>
                    <div className='serviceDisplay'><img className='serviceIcon'src={CustomIcon}></img>
                    <h1>Fully Customizable</h1></div>
                    <div className='serviceDisplay'><img className='serviceIcon'src={UpdateIcon}></img>
                    <h1>Regular Updates</h1></div>
                </div>
        </div>)
}
export default service;