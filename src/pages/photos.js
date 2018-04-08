import React, { Component }from 'react';

import Photo from '../components/photo';
import StyledTitle from '../styledComponents/styledTitle';

class Photos extends Component {
    constructor() {
        super();
        this.state = {
          photos: []
        }
      }
    
      componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.location.state.albumId}`)
          .then(res => res.json())
          .then(res => this.setState({ photos: [...res] }))
      }

    render() {
        return (
            <div>
                <StyledTitle>
                    <hi>{this.props.location.state.albumTitle}</hi>
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