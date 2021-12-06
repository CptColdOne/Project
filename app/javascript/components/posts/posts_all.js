import React from "react";

export function AllPosts(props) {
    var posts = props.posts.map((post)=>{
        return (
          <div key={post.id} className="posts-page">
            <div className="section">{post.title}</div>
            <div className="img"><img style={{width: '100%', alignSelf: 'center'}} src={post.image} alt=""/></div>
            <div>{post.caption}</div>
            <div>Количество просмотров: {post.total_views}</div>
            <div style={{padding:"10px"}}>
                <a href={post.post_link}><input className="button" style={{margin:"auto"}} type="button" value="Посмотреть пост"></input></a>
            </div>
          </div>
        )
    })

    return(
        <div>
            {posts}
        </div>
    )
}

