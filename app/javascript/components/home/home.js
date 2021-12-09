import React from "react";
import "./home.scss";
import HomePosts from "./home_posts";
import ScrollButton from "../buttons/scroll_button";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "UserName",
            email: "UserMail",
            telephone: "UserTelephone"
        }
    }

    componentDidMount(){
        this.setState({name: this.props.name, email: this.props.email, telephone: this.props.telephone})
    }
    
    renderHeader(){
        return <div className='home-page-header'> Домашняя страница {this.state.name} </div>
    }
    
    renderPageBody(){
        return  <div className='home-page'> Контактные данные пользователя: email - {this.state.email}, телефон - {this.state.telephone}. </div>
    }

    render() {
        return (
            <React.Fragment>
                <div> 
                    {this.renderHeader()}
                    {this.renderPageBody()}
                    <HomePosts posts={this.props.posts}/>
                </div>
                <ScrollButton />
            </React.Fragment>
        );
    };
};
