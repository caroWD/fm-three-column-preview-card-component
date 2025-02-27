import PropTypes from 'prop-types'
import { motion } from 'motion/react'
import Icon from '../pure/Icon'
import Button from '../pure/Button'

function CardContainer({ id, title, description, icon, btnText }) {

  let bgColor
  let txtColor
  let delay
  switch (id) {
    case 1:
      bgColor = 'bg-bright-orange'
      txtColor = 'text-bright-orange'
      delay = 0.5
      break
    case 2:
      bgColor = 'bg-dark-cyan'
      txtColor = 'text-dark-cyan'
      delay = 1
      break
    case 3:
      bgColor = 'bg-very-dark-cyan'
      txtColor = 'text-very-dark-cyan'
      delay = 1.5
      break
    default:
      break
  }

  const viewport = window.screen.width

  return (
    <motion.article
      className={(`${bgColor} first:rounded-t-lg last:rounded-b-lg md:first:rounded-tr-none ${id < 3 && 'md:w-1/2'} ${id === 2 && 'md:rounded-tr-lg lg:rounded-tr-none'} lg:w-full lg:first:rounded-bl-lg lg:last:rounded-bl-none lg:last:rounded-tr-lg`).replaceAll('false', '').split(' ').filter(item => item !== '').join(' ')}
      initial={viewport < 1024 ? { opacity: 0 } : { opacity: 0, translateY: 100 }}
      animate={viewport < 1024 ? { opacity: 1 } : { opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Icon icon={icon} alt={title} />
      <h1
        className='mb-8 font-big-shoulder uppercase text-very-light-gray text-4xl 2xs:text-[2.5rem]'
      >
        {title}
      </h1>
      <p
        className='mb-6 text-transparent-white 2xs:mb-8 lg:mb-24'
      >
        {description}
      </p>
      <Button text={btnText} color={txtColor} />
    </motion.article>
  )
}

CardContainer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
}

export default CardContainer
