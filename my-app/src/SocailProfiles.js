import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocailProfile extends Component {
    render() {

        const { link, image } = this.props.socialprofile;

        return (
            <span >
                <a href={link}>
                    <img src={image} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }} />
                </a>
            </span>
        )
    }
}

class SocailProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return (
                                <SocailProfile key={SOCIAL_PROFILE.id} socialprofile={SOCIAL_PROFILE} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocailProfiles;