import TeamMember from './TeamMember';

interface DepartmentMember {
  name: string;
  position: string;
  photo: string;
  description: string;
}

interface DepartmentSectionProps {
  title: string;
  members: DepartmentMember[];
  icon: React.ComponentType<any>;
}

const DepartmentSection = ({ title, members, icon: Icon }: DepartmentSectionProps) => {
  return (
    <div className="mb-20">
      {/* Department Header */}
      <div className="department-header">
        <div className="flex items-center justify-center mb-4">
          <Icon className="text-primary mr-3" size={32} />
          <h2 className="text-3xl font-bold gradient-text">
            {title}
          </h2>
        </div>
      </div>

      {/* Department Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            photo={member.photo}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DepartmentSection;