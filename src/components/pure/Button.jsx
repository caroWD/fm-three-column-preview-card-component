import PropTypes from 'prop-types'

function Button({ text, color }) {
  return (
    <a
      href="#"
      className={`inline-block py-3 px-8 capitalize ${color} bg-very-light-gray rounded-full border-2 border-solid border-very-light-gray transition-colors duration-300 hover:bg-transparent hover:text-very-light-gray`}
    >
      {text}
    </a>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Button
