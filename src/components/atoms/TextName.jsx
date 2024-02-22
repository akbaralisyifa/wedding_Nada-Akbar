import PropTypes from "prop-types"

const TextName = ({title, style}) => {
  return (
    <p className={`${style ? style : "-mt-4"} font-playfair uppercase text-primary tracking-[5px] font-light text-lg text-center`}>{title}</p>
  )
}


TextName.PropTypes = {
    title : PropTypes.string, 
    style: PropTypes.string
}


export default TextName