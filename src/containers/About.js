import React from "react";
import {Link} from "react-router-dom";

export default class About extends React.Component {
    render() {
        return(
          <div>  
            I'm about that
            <Link to="/"> 
                going to the crib
            </Link>
          
          
          </div>
        );
    }
}