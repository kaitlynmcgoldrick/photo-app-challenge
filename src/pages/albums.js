import React, { Component }from 'react';

import Album from '../components/album';

class Albums extends Component {
    constructor() {
        super();
        this.state = {
          albums: []
        }
      }
    
      componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.location.state.id}`)
          .then(res => res.json())
          .then(res => this.setState({ albums: [...res] }))
      }

    render() {
        return (
            this.state.albums.map(album => {
                return <Album key={album.id} albumTitle={album.title} albumId={album.id}/>
            })
        );
    }
}

export default Albums;