import PropTypes from 'prop-types'
import { HiArrowLongRight } from "react-icons/hi2";

function Button({ text, color }) {
  return (
    <a
      href="#"
      className={`relative inline-block py-3 px-8 capitalize ${color} bg-very-light-gray rounded-full border-2 border-solid border-very-light-gray transition-all duration-300 *:opacity-0 *:text-very-light-gray hover:bg-transparent hover:pr-16 hover:text-very-light-gray hover:*:block hover:*:opacity-100`}
    >
      {text}
      <HiArrowLongRight className='absolute top-1/2 right-4 -translate-y-1/2 size-8 ml-4 transition-all duration-300' />
    </a>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Button
