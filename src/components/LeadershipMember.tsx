import { useState } from 'react';
import { Crown } from 'lucide-react';

interface LeadershipMemberProps {
  name: string;
  position: string;
  photo: string;
  description: string;
}

const LeadershipMember = ({ name, position, photo, description }: LeadershipMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="leadership-card group cursor-pointer p-8 h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="leadership-avatar">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex items-center justify-center mb-3">
          <Crown className="text-primary-glow mr-2" size={20} />
          <span className="text-primary-glow font-bold text-sm">LEADERSHIP</span>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-3 gradient-text">
          {name}
        </h3>
        
        <p className="text-primary-glow text-center font-medium text-lg">
          {position}
        </p>
      </div>

      {/* Hover Description Overlay */}
      <div className="team-description">
        <div>
          <div className="flex items-center justify-center mb-4">
            <Crown className="text-primary-glow mr-2" size={24} />
            <span className="text-primary-glow font-bold">LEADERSHIP</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-primary-glow">
            {name}
          </h3>
          <p className="text-primary text-base font-medium mb-6">
            {position}
          </p>
          <p className="text-foreground/90 leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipMember;