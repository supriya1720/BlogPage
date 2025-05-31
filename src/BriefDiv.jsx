import { useLocation } from 'react-router-dom';
import './BriefDiv.css'
function BriefDiv(props ){
    const location = useLocation();
    const { title,content,theme,description} = location.state;
    return(<div className='parentBriefDiv'>
        <div className='childBriefDiv'>
            <div className='top-leftBrief'></div>
           Title:{title}<br></br><br></br>
            Content:{content}<br></br><br></br>
                Theme:{theme}<br></br><br></br>
                  Description:{description}
        </div>
    </div>)
}
export default BriefDiv;