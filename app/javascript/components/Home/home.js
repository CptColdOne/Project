import React from "react";
import "./home.scss";

export default class Home extends React.Component {
    
    renderHeader(){
        return <div className='home-page-header'> Домашняя страница {this.props.name} </div>
    }
    
    renderPageBody(){
        return  <div className='home-page'> Контактные данные пользователя: email - {this.props.email}, телефон - {this.props.telephone}. </div>
    }

    render() {
        return (
            <React.Fragment>
                <div> 
                    {this.renderHeader()}
                    {this.renderPageBody()}
                </div>
            </React.Fragment>
        );
    };
};
