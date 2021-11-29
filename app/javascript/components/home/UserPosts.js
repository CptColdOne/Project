import React from "react"
import PropTypes from "prop-types"

class UserPosts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        posts: []
    };
  }
  
  componentDidMount(){
    this.setState({posts: this.props.posts})
  }

  renderTableBody(){
    return this.state.posts.map((item)=>{
      return (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td style={{width: '400px'}}><img style={{width: '100%'}} src={item.image}/></td>
        <td>{item.caption}</td>
        <td>{item.total_views}</td>
        <td> value="Посмотреть пост" onClick </td>
      </tr>
    )})
  }

  showPost= () =>{

  }
  
  render () {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <td>Заголовок</td>
              <td>Изображение</td>
              <td>Описание</td>
              <td>Количество просмотров</td>
            </tr>
          </thead>
          <tbody>
            {this.renderTableBody()}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default UserPosts;
