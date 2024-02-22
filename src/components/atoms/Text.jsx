const Text = ({ title, style }) => {
  return <p className={style ? style : ""}>{title}</p>;
};

Text.propTypes = {
  title: String,
  style: String,
};

export default Text;
