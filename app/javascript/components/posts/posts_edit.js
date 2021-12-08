import React from "react";
import "./posts.scss";

export default class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: [],
            caption: "",
            private: false,
            root_path: "",
            post_id: null
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
        this.handlePrivateChange = this.handlePrivateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            root_path: this.props.root_path,
            post_id: this.props.post_id
        })
    }

    handleTitleChange(e){
        this.setState({title: e.target.value});
    }
    
    handleImageChange(e){
        console.log(e.target.files[0])
        this.setState({image: e.target.files[0]});
    }

    handleCaptionChange(e){
        this.setState({caption: e.target.value});
    }

    handlePrivateChange(e){
        this.setState({private: e.target.checked});
    }

    handleSubmit(e){
        // e.preventDefault();
        console.log('test')
        const csrfToken = document.querySelector("[name='csrf-token']").content
        const url = '/posts/' + this.state.post_id
        const home = '' + this.state.root_path
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('image', this.state.image);
        formData.append('caption', this.state.caption);
        formData.append('private', this.state.private);

        for (var value of formData.values()) {
            console.log(value);
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                "X-CSRF-Token": csrfToken,
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .catch(error=>console.log(error))
            .then(() => {
                window.location = home;
            });
    }
    
    renderForm(){
        return(
            <div className="posts-page">
                <p>
                    <label>Заголовок: </label>
                    <input 
                        type="text"
                        name="post[title]"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                </p>
                <p>
                <label>Изображение: </label>
                    <input 
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={this.handleImageChange}
                    />
                </p>
                <p>
                <label>Описание: </label>
                    <input 
                        type="text"
                        name="post[caption]"
                        value={this.state.caption}
                        onChange={this.handleCaptionChange}
                    />
                </p>
                <p>
                <label>Сделать пост приватным: </label>
                    <input 
                        type="checkbox"
                        name="post[private]"
                        checked={this.state.private}
                        onChange={this.handlePrivateChange}
                    />
                </p>
                <p>
                    <input className="button" style={{margin:"auto"}} type="button" value="Сохранить" onClick={this.handleSubmit} />
                </p>
            </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                <h1 className="posts-header">Редактирование поста</h1>
                {this.renderForm()}
                <div style={{padding:"10px"}}>
                    <a href={this.state.root_path}><input className="button" type="button" value="Вернуться на домашню страницу"></input></a>
                </div>
            </React.Fragment>
        );
    }
}