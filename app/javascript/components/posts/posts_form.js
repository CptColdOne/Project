import React from "react";
import "./posts.scss";

export default class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: undefined,
            caption: "",
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageChange = this.onImageChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            image: this.props.image,
            caption: this.props.caption
        })
    }

    handleTitleChange(e){
        this.setState({title: e.target.value});
    }
    
    onImageChange(e){
        this.setState({image: e.target.value[0]});
    }

    handleCaptionChange(e){
        this.setState({caption: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('image', this.state.image);
        formData.append('caption', this.state.caption);

        console.log("start post");
        fetch('/posts', {
            method: 'POST',
            body: formData
        })
        .catch(error=>console.log(error));
    }
    
    renderForm(){
        return(
            <form  >
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
                    accept="image/*"
                    multiple={false}
                    onChange={this.onImageChange}
                />

                <label>Описание</label>
                <input 
                    type="text"
                    name="post[caption]"
                    value={this.state.caption}
                    onChange={this.handleCaptionChange}
                />

                <input type="submit" value="Сохранить" onSubmit={this.handleSubmit} />
            </form>
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