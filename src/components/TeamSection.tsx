import TeamMember from './TeamMember';
import sarahPhoto from '@/assets/team-sarah.jpg';
import marcusPhoto from '@/assets/team-marcus.jpg';
import elenaPhoto from '@/assets/team-elena.jpg';
import davidPhoto from '@/assets/team-david.jpg';

const teamMembers = [
  {
    name: "Sarah Chen",
    position: "Lead Software Engineer",
    photo: sarahPhoto,
    description: "Sarah leads our engineering team with 8+ years of experience in full-stack development. She's passionate about clean code, mentoring junior developers, and building scalable systems that solve real-world problems."
  },
  {
    name: "Marcus Rodriguez",
    position: "Senior UX Designer",
    photo: marcusPhoto,
    description: "Marcus brings creative vision to every project with his background in design thinking and user research. He specializes in creating intuitive interfaces that users love and has won several design awards."
  },
  {
    name: "Elena Volkov",
    position: "Product Manager",
    photo: elenaPhoto,
    description: "Elena drives product strategy and roadmap planning with her keen eye for market trends. With an MBA and 6 years in product management, she ensures our solutions meet both user needs and business goals."
  },
  {
    name: "David Kim",
    position: "Data Scientist",
    photo: davidPhoto,
    description: "David transforms complex data into actionable insights using machine learning and advanced analytics. His PhD in Statistics and expertise in AI help drive data-informed decisions across all our products."
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a diverse group of passionate professionals dedicated to creating exceptional experiences. 
            Get to know the people behind the innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              photo={member.photo}
              description={member.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to join our amazing team?
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;