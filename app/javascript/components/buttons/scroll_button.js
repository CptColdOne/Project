import React from "react";
import "../home/home.scss"

export default class ScrollButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        }
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener('scroll', function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div>
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <a className="scroll-button" title="Наверх">&uarr;</a>
                    </div>
                )}
            </div>
        )
    }
}