import React, { Component } from 'react';

// class RegularClass { }
// class ComponentClass extends Component { }

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    state = { displayBio: false };
    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('Component this', this);

    //     // this.readMore = () => {
    //     //     console.log('readMore this', this);
    //     //     this.setState({ displayBio: true });

    //     // }
    //     //  learn about bind method.
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        // const bio = 

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
            </div>
        )
    }
}

export default App;