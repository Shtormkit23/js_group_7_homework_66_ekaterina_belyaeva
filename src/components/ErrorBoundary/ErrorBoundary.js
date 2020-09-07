import React, {Component} from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    };

    render () {
        if (this.state.hasError) {
            return <div className='Error'>Sorry, there was an error loading this reviews ...</div>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;