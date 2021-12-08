import React from "react";
import { ShareButtons } from "../share/share_buttons";

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
          <div><ShareButtons url={item.post_link} title={item.title} caption={item.caption} image={item.image}/></div>
        </div>
    )})
  }
  
  deletePost = (post) => {
    const csrfToken = document.querySelector("[name='csrf-token']").content
    console.log(post)
    fetch(post, {
      method: "delete",
      headers: {
        "X-CSRF-Token": csrfToken,
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      window.location.reload();
    })
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
