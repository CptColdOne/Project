import React from "react";
import PropTypes from "prop-types";

class HomePosts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        posts: [],
    };
  }
  
  componentDidMount(){
    this.setState({posts: this.props.posts})
  }

  renderHomePosts(){
    return this.state.posts.map((item)=>{
      return (
        <div key={item.id} className="home-page">
          <div className="section">{item.title}</div>
          <div className="img"><img style={{width: '100%', alignSelf: 'center'}} src={item.image} alt=""/></div>
          <div>{item.caption}</div>
          <div>Количество просмотров: {item.total_views}</div>
          <div style={{padding:"10px", display:"inline-block"}}>
            <a href={item.post_link}><input className="button" style={{margin:"auto"}} type="button" value="Посмотреть пост"></input></a>
          </div>
          <div style={{padding:"10px", display:"inline-block"}}>
            <a href={item.post_link_edit}><input className="button" style={{margin:"auto"}} type="button" value="Изменить пост"></input></a>
          </div>
          <div style={{padding:"10px", display:"inline-block"}}>
            <input className="button" style={{margin:"auto"}} type="button" value="Удалить пост" onClick={() => this.deletePost(item.post_link)}></input>
          </div>
        </div>
    )})
  }
  // Не получается удалить
  // Can't verify CSRF token authenticity.
  deletePost = (post) => {
    console.log(post)
    fetch(post, {method: "delete"})
  }

  hashtags = (caption) => {

  }

  render () {
    return (
      <React.Fragment>
        {this.renderHomePosts()}
      </React.Fragment>
    );
  }
}

export default HomePosts;
