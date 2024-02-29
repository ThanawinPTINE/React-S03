function Hello({name, message}) {
    console.log('Hello component');
    return (  
      <div>
        <h1>Hello {name} {message}</h1>
      </div>
    )
  }
  
  export default Hello

  import PropTypes from 'prop-types';
  Hello.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string
  }
    Hello.defaultProps = {
        name: "Guest",
        message: "Good morning"
    }
