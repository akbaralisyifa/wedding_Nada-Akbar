const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">{children}</div>
  );
};

Layout.propTypes = {
  children: Node,
};

export default Layout;
