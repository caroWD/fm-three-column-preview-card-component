import PropTypes from 'prop-types'
import iconSedans from '../../assets/media/icon-sedans.svg'
import iconSUVs from '../../assets/media/icon-suvs.svg'
import iconLuxury from '../../assets/media/icon-luxury.svg'

function Icon({ icon, alt }) {

  let src
  switch (icon) {
    case 'iconSedans':
      src = iconSedans
      break
    case 'iconSUVs':
      src = iconSUVs
      break
    case 'iconLuxury':
      src = iconLuxury
      break
    default:
      break
  }

  return (
    <div
      className='mb-8 2xs:mb-10'
    >
      <img
        src={src}
        alt={`Icon ${alt}`}
      />
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Icon
