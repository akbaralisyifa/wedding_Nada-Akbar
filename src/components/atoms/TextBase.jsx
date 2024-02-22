import PropTypes from 'prop-types'

const TextBase = ({title, span, style}) => {
  return (
    <p className={`${style ? style : "text-base mt-5 w-full font-normal"}  font-playfair uppercase text-primary tracking-[5px] font-light  text-center`}>{title}{span && span }</p>

  )
}

TextBase.propTypes = {
  title: PropTypes.string,
  span: PropTypes.node, 
  style : PropTypes.string
}

export default TextBase