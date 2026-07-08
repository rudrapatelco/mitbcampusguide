import ResourceCard from "./resourcecard";

function ResourcesSection() {
  return (
    <section className="resources">
      <h2>Essential Resources</h2>

      <div className="resource-grid">
        <ResourceCard
          icon="🏠"
          title="Hostel Guide"
          description="Everything you need to know about hostel life."
        />

        <ResourceCard
          icon="📶"
          title="Wi-Fi Setup"
          description="Connect your laptop and phone to campus Wi-Fi."
        />

        <ResourceCard
          icon="📝"
          title="Registration"
          description="Steps for academic registration and orientation."
        />

        <ResourceCard
          icon="📖"
          title="Campus Rules"
          description="Important rules and student guidelines."
        />

        <ResourceCard
          icon="🍽️"
          title="Mess Timings"
          description="Daily breakfast, lunch and dinner timings."
        />

        <ResourceCard
          icon="🎭"
          title="Student Clubs"
          description="Explore technical, cultural and sports clubs."
        />
      </div>
    </section>
  );
}

export default ResourcesSection;