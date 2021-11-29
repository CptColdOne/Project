import React from "react";

export default class HomeButtons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts_path: "test",
            new_post_path: "test",
            edit_user_registration_path: "test"
        }
    }

    componentDidMount(){
        this.setState({
            posts_path: this.props.posts_path,
            new_post_path: this.props.new_post_path,
            edit_user_registration_path: this.props.edit_user_registration_path
        })
    }

    renderPostsButton(){
        return <div style={{padding:"10px"}}><a href={this.state.posts_path}><input className="button" type="button" value="Посмотреть все посты"></input></a></div>
    }

    renderNewPostButton(){
        return <div style={{padding:"10px"}}><a href={this.state.new_post_path}><input className="button" type="button" value="Создать новый пост"></input></a></div>
    }

    renderEditUserButton(){
        return <div style={{padding:"10px"}}><a href={this.state.edit_user_registration_path}><input className="button" type="button" value="Изменить регистрационные данные"></input></a></div>
    }

    render(){
        return (
            <React.Fragment>
              {this.renderPostsButton()}
              {this.renderNewPostButton()}
              {this.renderEditUserButton()}
            </React.Fragment>
        );
    }
}