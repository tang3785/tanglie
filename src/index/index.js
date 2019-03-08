import React from 'react'
import './component.css'
// import './default.css'
import img1 from './images/1.png'
class mypic extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
         <div>
             <ul className={"grid cs-style-"+this.props.num}>
                 <li>
                     <figure>
                         <img src={this.props.imgSrc} alt=""/>
                             <figcaption>
                                 <h3>{this.props.title}</h3>
                                 <span>{this.props.content}</span>
                                 <a href="http://dribbble.com/shots/1115632-Camera">{this.props.a}</a>
                             </figcaption>
                     </figure>
                 </li>
             </ul>
         </div>
        )
    }
}

export default mypic