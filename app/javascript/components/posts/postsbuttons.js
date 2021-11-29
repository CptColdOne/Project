import React from "react";

export default class PostsButtons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            new_post_path: "test",
            root_path: "test"
        }
    }

    componentDidMount() {
        this.setState({
            new_post_path: this.props.new_post_path,
            root_path: this.props.root_path
        })
    }

    renderNewPostButton(){
        return <div style={{padding:"10px"}}><a href={this.state.new_post_path}><input className="button" type="button" value="Создать новый пост"></input></a></div>
    }

    renderBackButton(){
        return <div style={{padding:"10px"}}><a href={this.state.root_path}><input className="button" type="button" value="Вернуться на домашню страницу"></input></a></div>
    }

    render(){
        return (
            <React.Fragment>
                {this.renderNewPostButton()}
                {this.renderBackButton()}
            </React.Fragment>
        );
    }
}