function Nav(props) {
  const navStyle = {
    width: "100%",
    backgroundColor: "pink",
    padding: "15px",
  };

  return (
    <nav style={navStyle} className="main-nav">
      <ul>
        <li>{props.name}</li>
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
