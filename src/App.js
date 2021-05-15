import React, { Component } from 'react';
import Projects from './Projects';



class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {

        return (
            <div>
                <h1>Hello! </h1>
                <p>My name is Annant, I am learning React.</p>
                <p>I am investing my time to learn something new. Wish me luck!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in 42, Baker street and I learn everyday.</p>
                            <p>I use Python and JavaScript to create Apps. </p>
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
            </div>
        )
    }
}

export default App;