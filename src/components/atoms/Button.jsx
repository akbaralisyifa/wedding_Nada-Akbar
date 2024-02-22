import PropTypes from 'prop-types';

const Button = ({title, handleClick, icon, style}) => {
  return (
    <button
          onClick={handleClick}
          className={`hover:bg-gray-800 transition duration-300 bg-gray-950 font-alice text-sm uppercase rounded-full border border-orange-400 text-white py-2 px-10 ${style ? style : "my-10"}`}
        >
          {icon || null}
          {title}
        </button>
  )
};

Button.propTypes = {
  title: PropTypes.string.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  style : PropTypes.string
}

export default Button