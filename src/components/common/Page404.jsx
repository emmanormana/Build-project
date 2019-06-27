import React, {Component} from 'react';

class Page404 extends Component {
    componentDidMount() {
        // setTimeout(()=>this.props.history.push('/dashboard'),10000);
    }

    render() {
        return (
            <h1>404, Page not found, redirecting you in 10 seconds</h1>
        )
    }
}

export default Page404;