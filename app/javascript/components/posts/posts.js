import React from "react";
import "./posts.scss";
import PostsButtons from "./posts_buttons";

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

    renderPosts(){
        return this.state.posts.map((item)=>{
            return (
              <div key={item.id} className="posts-page">
                <div className="section">{item.title}</div>
                <div className="img"><img style={{width: '100%', alignSelf: 'center'}} src={item.image} alt=""/></div>
                <div>{item.caption}</div>
                <div>Количество просмотров: {item.total_views}</div>
                <div style={{padding:"10px"}}>
                    <a href={item.post_link}><input className="button" style={{margin:"auto"}} type="button" value="Посмотреть пост"></input></a>
                </div>
              </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="posts-header">Посты всех пользователей</h1>
                {this.renderPosts()}
                <PostsButtons new_post_path={this.props.new_post_path} root_path={this.props.root_path} />
            </React.Fragment>
        )
    }
}