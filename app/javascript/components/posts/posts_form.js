import React from "react";
import "./posts.scss";

export default class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: "",
            caption: "",
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            image: this.props.image,
            caption: this.props.caption
        })
    }

    handleTitleChange(title){
        this.setState({title: title.target.value});
    }
    
    handleImageChange(image){
        this.setState({image: image.target.value});
    }

    handleCaptionChange(caption){
        this.setState({caption: caption.target.value});
    }

    renderForm(){
        return(
            <div>
                <label>Заголовок</label>
                <input 
                    type="text"
                    name="post[title]"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />

                <label>Изображение</label>
                <input 
                    type="file"
                    name="post[image]"
                    value={this.state.image}
                    onChange={this.handleImageChange}
                />

                <label>Описание</label>
                <input 
                    type="text"
                    name="post[caption]"
                    value={this.state.caption}
                    onChange={this.handleCaptionChange}
                />

                <input type="submit" value="Сохранить" />
            </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                {this.renderForm()}
            </React.Fragment>
        );
    }
}