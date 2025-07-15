import { useState } from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  photo: string;
  description: string;
}

const TeamMember = ({ name, position, photo, description }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="team-card group cursor-pointer p-6 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="team-avatar">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="text-xl font-bold text-center mb-2 gradient-text">
          {name}
        </h3>
        
        <p className="text-primary text-center font-medium mb-4">
          {position}
        </p>
      </div>

      {/* Hover Description Overlay */}
      <div className="team-description">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-primary-glow">
            {name}
          </h3>
          <p className="text-primary text-sm font-medium mb-4">
            {position}
          </p>
          <p className="text-foreground/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;