import React from "react";
import "./posts.scss";

export default class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: undefined,
            caption: "",
            total_views: 0
        };
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            image: this.props.image,
            caption: this.props.caption,
            total_views: this.props.total_views
        })
    }

    renderPost(){
        return (
            <div className="posts-page">
                <div className="section">{this.state.title}</div>
                <div className="img"><img style={{width: '100%', alignSelf: 'center'}} src={this.state.image} alt=""/></div>
                <div>{this.state.caption}</div>
                <div>Количество просмотров: {this.state.total_views}</div>
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