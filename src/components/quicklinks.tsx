function QuickLinks() {
  const links = [
    "Academic Calendar",
    "Hostel Rules",
    "Student Portal",
    "Exam Schedule",
    "Library",
    "Campus Directory",
  ];

  return (
    <section className="quick-links">
      <h2>Quick Access</h2>

      <div className="quick-links-grid">
        {links.map((link) => (
          <div className="quick-link-card" key={link}>
            <h3>{link}</h3>
            <p>Open resource</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;