import React, { Component } from 'react';

const TITLES = [
    'a software engineer',
    'a tech trainer',
    'an enthusiastic learner',
    'a kind homo-sapien'
]

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title component is mounted');

        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex })

        }, 1500);
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }

}

export default Title;