import React from 'react'
import { browserHistory } from 'react-router';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

import exampleImage from '../react-share-pin-example.png';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  VKShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  VKShareCount,

} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const VKIcon = generateShareIcon('vk');



export default React.createClass({
  handleRedirect(){
      browserHistory.push('/world');
  },

  render() {
    const url = "http://github.com"
    const newsData = this.props.route.data;
    const id = this.props.params.id;
    const newsMass = newsData.filter(function( item ){
                if( item.id == id ){
                  return item;
                }
    });
    return (
      <div>
          <button onClick={this.handleRedirect.bind(this)}>back</button>
          <img className="img" src={newsMass[0].urlB}/>
          <h3>{newsMass[0].title}</h3>
          <div className="discr" >{newsMass[0].description}</div>
        <div className="share">
          <div className="some-network">
            <GooglePlusShareButton
              url={url}
              title={newsMass[0].title}
              className="some-network__share-button">
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>
            </div>

        <div className="some-network">
          <FacebookShareButton
            url={url}
            title={newsMass[0].title}
            picture={`${String(window.location)}/${exampleImage}`}
            className="some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>
        <div className="some-network">
          <VKShareButton
            url={url}
            title={newsMass[0].title}
            image={`${String(window.location)}/${exampleImage}`}
            windowWidth={660}
            windowHeight={460}
            className="some-network__share-button">
            <VKIcon
              size={32}
              round />
          </VKShareButton>
          </div>
        </div>
      </div>
    )
  }
})
