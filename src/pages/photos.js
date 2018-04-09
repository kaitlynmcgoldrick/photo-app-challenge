import React, { Component }from 'react';

import { Link } from 'react-router-dom';

import Photo from '../components/photo';
import StyledTitle from '../styledComponents/styledTitle';

class Photos extends Component {
    constructor() {
        super();
        this.state = {
            name: undefined,
            albumName: undefined, 
            photos: []
        }
      }
    
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.albumId}`)
          .then(res => res.json())
          .then(res => this.setState({ photos: [...res] }));
        fetch(`https://jsonplaceholder.typicode.com/users?id=${this.props.match.params.id}`)
          .then(res => res.json())
          .then(res => res.map(res => this.setState({ name: res.name })));

        if (this.props.history.location.state) {
            this.setState({ albumName: this.props.history.location.state.albumTitle})
        } else {
            fetch(`https://jsonplaceholder.typicode.com/albums?id=${this.props.match.params.albumId}`)
                .then(res => res.json())
                .then(res => res.map(res => this.setState({ albumName: res.title })));
        }
      }

    render() {
        return (
            <div>
                <StyledTitle>
                    <p>
                        <Link to="/">
                            <span role="img" aria-label="Professional-Woman">👩🏽‍💼 </span>
                            Friends →
                        </Link>
                    </p>
                    {this.state.name && 
                    <p>
                        <Link to={"/albums/"+this.props.match.params.id}> 
                            <span role="img" aria-label="Camera"> 📸 </span>
                            {this.state.name} Albums →
                        </Link>
                    </p>}
                    {this.state.albumName && 
                    <p className="primary"> 
                        <span role="img" aria-label="Picture"> 🖼 </span>
                        {this.state.albumName}
                    </p>}
                </StyledTitle>
                {this.state.photos.map(photo => {
                return <Photo 
                    key={photo.id} 
                    photoTitle={photo.title} 
                    photoId={photo.id}
                    url={photo.thumbnailUrl}/>
                })}
            </div>

        );
    }
}

export default Photos;