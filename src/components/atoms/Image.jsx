import propTypes from 'prop-types'

const Image = ({image, style}) => {
  return (
    <img className={style && style} src={`../../../src/assets/${image}`} alt="" />
  )
}

Image.propTypes = {
  image: propTypes.node,
  style: propTypes.string
}



export default Image