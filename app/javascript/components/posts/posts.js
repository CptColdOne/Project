import React from "react";
import "./posts.scss";
import PostsButtons from "./posts_buttons";
import ScrollButton from "../home/home_scroll_button";
import { AllPosts } from "./posts_all";

export default class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        this.setState({posts: this.props.posts})
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 className="posts-header">Посты всех пользователей</h1>
                    <AllPosts posts={this.state.posts} />
                    <PostsButtons new_post_path={this.props.new_post_path} root_path={this.props.root_path} />
                </div>
                <ScrollButton />
            </React.Fragment>
        )
    }
}