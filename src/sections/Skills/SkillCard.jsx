function SkillCard({ name, level }) {
  return (
    <div className="skill-card">
      <h3>{name}</h3>
      <p>{level}</p>
    </div>
  );
}

export default SkillCard;