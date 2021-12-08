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
            post_id: null,
            back: "",
            root: ""
        };
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            image: this.props.image,
            caption: this.props.caption,
            total_views: this.props.total_views,
            post_id: this.props.post_id,
            back: this.props.back,
            root: this.props.root
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

    renderBackButton(){
        return <div style={{padding:"10px", display:"flex", verticalAlign:"top", textAlign:"center"}}>
                    <a href={this.state.back}><input className="button" type="button" value="Все посты"></input></a>
            </div>
    }
    
    renderHomeButton(){
        return <div style={{padding:"10px", display:"flex", verticalAlign:"top", textAlign:"center"}}>
                    <a href={this.state.root}><input className="button" type="button" value="Домашняя страница"></input></a>
            </div>
    }

    render(){
        return(
            <React.Fragment>
                {this.renderPost()}
                {this.renderBackButton()}
                {this.renderHomeButton()}
            </React.Fragment>
        )
    }
}