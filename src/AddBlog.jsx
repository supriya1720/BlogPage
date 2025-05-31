import { useState } from "react";
import {Link} from 'react-router-dom'
function addBlog(props){
    const dot="...";
    return(<div>
            <br></br>{props.comp.title}<br></br>{props.comp.content.slice(0,5)}{dot}<br></br>{props.comp.theme}<br></br>{props.comp.description.slice(0,5)}{dot}<br></br><br></br>
    <Link to= '/BriefDiv'state={ {title:props.comp.title,content:props.comp.content,theme:props.comp.theme,description:props.comp.description}} ><button >read more</button></Link>
    </div>)
}
export default addBlog;