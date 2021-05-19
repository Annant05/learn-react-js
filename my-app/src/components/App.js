import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile_img from '../assets/profile_img.jpg';


class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {

        return (
            <div>
                <img src={profile_img} alt="ProfileImage" className="profile" />
                <h1>Hello World! </h1>
                <p>Hi from <b><em>Annant Gupta</em></b></p>
                <Title />
                <p>Doing dark magic with programming. Wish me luck!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>Learning new stuff daily. Growing in every direction</p>
                            <p>I use Python and JavaScript to create Apps.</p>
                            <p>Besides coding, I also love music and science videos.</p>
                            <button onClick={this.toggleDisplayBio}> Show Less </button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}


export default App;