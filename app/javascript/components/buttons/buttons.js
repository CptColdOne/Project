import React from "react";
import "../home/home.scss"

export default class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            root: "",
            posts: "",
            new_post: "",
            edit_reg: "test"
        }
    }

    componentDidMount(){
        this.setState({
            root: this.props.root_path,
            posts: this.props.posts_path,
            new_post: this.props.new_post_path,
            edit_reg: this.props.edit_reg
        })
    }

    renderHomeButton(){
        return <div style={{padding:"10px", display:"inline-block", verticalAlign:"top", textAlign:"center"}}>
                    <a href={this.state.root}><input className="button" type="button" value="Домашняя страница"></input></a>
                </div>
    }

    renderPostsButton(){
        return <div style={{padding:"10px", display:"inline-block", verticalAlign:"top", textAlign:"center"}}>
                    <a href={this.state.posts}><input className="button" type="button" value="Все посты"></input></a>
                </div>
    }

    renderNewPostButton(){
        return <div style={{padding:"10px", display:"inline-block", verticalAlign:"top", textAlign:"center"}}>
                    <a href={this.state.new_post}><input className="button" type="button" value="Новый пост"></input></a>
                </div>
    }

    renderEditUserButton(){
        return <div style={{padding:"10px", display:"inline-block", verticalAlign:"top", textAlign:"center"}}>
                    <a href={this.state.edit_reg}><input className="button" type="button" value="Изменить регистрационные данные"></input></a>
                </div>
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    {this.renderHomeButton()}
                    {this.renderPostsButton()}
                    {this.renderNewPostButton()}
                    {this.renderEditUserButton()}
                </div>
            </React.Fragment>
        )
    }
}