import React from "react";
import "./posts.scss";

export default class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: [],
            caption: "",
            private: false
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
        this.handlePrivateChange = this.handlePrivateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
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
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('image', this.state.image);
        formData.append('caption', this.state.caption);
        formData.append('private', this.state.private);

        for (var value of formData.values()) {
            console.log(value);
        };

        fetch('/posts', {
            method: 'POST',
            headers: {
                "X-CSRF-Token": csrfToken,
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .catch(error=>console.log(error))
            .then(() => {
                window.location.reload();
            });
    }
    
    renderForm(){
        return(
            <div className="posts-page">
                <p>
                    <label>??????????????????: </label>
                    <input 
                        type="text"
                        name="post[title]"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                </p>
                <p>
                <label>??????????????????????: </label>
                    <input 
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={this.handleImageChange}
                    />
                </p>
                <p>
                <label>????????????????: </label>
                    <input 
                        type="text"
                        name="post[caption]"
                        value={this.state.caption}
                        onChange={this.handleCaptionChange}
                    />
                </p>
                <p>
                <label>?????????????? ???????? ??????????????????: </label>
                    <input 
                        type="checkbox"
                        name="post[private]"
                        checked={this.state.private}
                        onChange={this.handlePrivateChange}
                    />
                </p>
                <p>
                    <input className="button" style={{margin:"auto"}} type="button" value="??????????????????" onClick={this.handleSubmit} />
                </p>
            </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                <h1 className="posts-header">?????????????? ?????????? ????????</h1>
                {this.renderForm()}
            </React.Fragment>
        );
    }
}