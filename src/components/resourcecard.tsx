type ResourceCardProps = {
  icon: string;
  title: string;
  description: string;
};

function ResourceCard({ icon, title, description }: ResourceCardProps) {
  return (
    <div className="resource-card">
      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href="#" className="learn-more">
        Learn More →
      </a>
    </div>
  );
}

export default ResourceCard;