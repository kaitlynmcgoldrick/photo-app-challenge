import React, { Component }from 'react';
import { Link } from 'react-router-dom';

import Album from '../components/album';
import StyledTitle from '../styledComponents/styledTitle';

class Albums extends Component {
    constructor() {
        super();
        this.state = {
            name: undefined,
            albums: []
        }
      }
    
      componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`)
          .then(res => res.json())
          .then(res => this.setState({ albums: [...res] }));

        if (this.props.history.location.state) {
            this.setState({ name: this.props.history.location.state.name})
        } else {
            fetch(`https://jsonplaceholder.typicode.com/users?id=${this.props.match.params.id}`)
                .then(res => res.json())
                .then(res => res.map(res => this.setState({ name: res.name })));
        }
      }

    render() {
        return (
            <div>
                <StyledTitle>
                    <p><Link to="/">Friends ></Link></p>
                    {this.state.name && <p className="primary"> {this.state.name} Albums</p>}
                </StyledTitle>
                {this.state.albums.map(album => {
                return <Album 
                    key={album.id} 
                    albumTitle={album.title}
                    albumId={album.id}
                    id={album.userId}/>
                })}
            </div>

        );
    }
}

export default Albums;