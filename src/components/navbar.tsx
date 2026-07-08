function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        MITB Campus Navigator
      </div>

      <nav>
        <a href="#">Map</a>
        <a href="#" className="active">Campus Guide</a>
        <a href="#">Meet the Team</a>
        <a href="#">Feedback</a>
      </nav>

      <button>Campus Info</button>
    </header>
  );
}

export default Navbar;