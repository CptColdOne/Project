import React from "react";
import "../home/home.scss";

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            matchPosts: [],
            root_path: ""
        };
    }

    componentDidMount(){
        this.setState({
            matchPosts: this.props.matchPosts,
            root_path: this.props.root_path
        })
    }

    renderMatchedPosts(){
        return this.state.matchPosts.map((item)=>{
            return (
              <div key={item.id} className="home-page">
                <div className="section">{item.title}</div>
                <div className="img"><img style={{width: '100%', alignSelf: 'center'}} src={item.image} alt=""/></div>
                <div>{item.caption}</div>
                <div>Количество просмотров: {item.total_views}</div>
                <div style={{padding:"10px", display:"inline-block"}}>
                    <a href={item.post_link}><input className="button" style={{margin:"auto"}} type="button" value="Посмотреть пост"></input></a>
                </div>
              </div>
            )
        })
    }

    renderBackButton(){
        return <div style={{padding:"10px"}}>
            <a href={this.state.root_path}><input className="button" type="button" value="Вернуться на домашню страницу"></input></a>
        </div>
    }

    render () {
        return (
          <React.Fragment>
            <div className="home-page-header">Результаты поиска: </div>
            {this.renderMatchedPosts()}
            {this.renderBackButton()}
          </React.Fragment>
        );
    }
}