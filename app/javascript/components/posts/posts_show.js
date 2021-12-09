import React from "react";
import "./posts.scss";
import { ShareButtons } from "../share/share_buttons";

export default class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: undefined,
            caption: "",
            total_views: 0,
            post_id: null
        };
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            image: this.props.image,
            caption: this.props.caption,
            total_views: this.props.total_views,
            post_id: this.props.post_id
        })
    }

    renderPost(){
        const url = '127.0.0.1:3000/posts/' + this.state.post_id
        return (
            <div className="posts-page">
                <div className="section">{this.state.title}</div>
                <div className="img"><img style={{width: '100%', alignSelf: 'center'}} src={this.state.image} alt=""/></div>
                <div>{this.state.caption}</div>
                <div>Количество просмотров: {this.state.total_views}</div>
                <div><ShareButtons url={url} title={this.state.title} caption={this.state.caption} image={this.state.image}/></div>
            </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                {this.renderPost()}
            </React.Fragment>
        )
    }
}