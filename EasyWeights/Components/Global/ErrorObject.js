
import React from 'react';

class ErrorObject extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return <Text>Something went wrong.</Text>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorObject