import React from "react";
import "./home.scss";

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='home-page-header'>
                    Домашняя страница {this.props.name}
                </div>
                <div className='home-page'>
                    Здравствуйте, {this.props.name}!
                </div>
            </React.Fragment>
        );
    };
};
