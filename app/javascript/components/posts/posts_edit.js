import React from "react";
import "./posts.scss";

export default class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <h1 class="posts-header">Редактирование поста</h1>
            </React.Fragment>
        );
    }
}