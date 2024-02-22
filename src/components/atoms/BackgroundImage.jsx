import PropTypes from "prop-types";

const BackgroundImage = ({bg}) => {
  return (
    <img
      src={bg}
      alt="background"
      className="min-w-full min-h-screen absolute -z-10"
    />
  );
};

BackgroundImage.PropTypes = {
  bg: PropTypes.string,
}

export default BackgroundImage;
