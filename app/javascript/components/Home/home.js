import React from "react";
import "./home.scss";

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div> 
                    <div className='home-page-header'>
                        Домашняя страница {this.props.name}
                    </div>
                    <div className='home-page'>
                        Контактные данные пользователя: email - {this.props.email}, телефон - {this.props.telephone}.
                    </div>
                </div>
            </React.Fragment>
        );
    };
};
