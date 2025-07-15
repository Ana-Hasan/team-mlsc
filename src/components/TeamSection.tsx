import LeadershipMember from './LeadershipMember';
import DepartmentSection from './DepartmentSection';
import { Code, Palette, TrendingUp } from 'lucide-react';

// Leadership Team Photos
import alexandraPhoto from '@/assets/head-alexandra.jpg';
import jamesPhoto from '@/assets/head-james.jpg';
import sophiaPhoto from '@/assets/head-sophia.jpg';
import ryanPhoto from '@/assets/head-ryan.jpg';
import priyaPhoto from '@/assets/head-priya.jpg';
import michaelPhoto from '@/assets/head-michael.jpg';

// Engineering Team Photos
import alexPhoto from '@/assets/eng-alex.jpg';
import mariaPhoto from '@/assets/eng-maria.jpg';
import carlosPhoto from '@/assets/eng-carlos.jpg';

// Design Team Photos
import emmaPhoto from '@/assets/design-emma.jpg';
import lucasPhoto from '@/assets/design-lucas.jpg';
import zoePhoto from '@/assets/design-zoe.jpg';

// Product Team Photos
import noahPhoto from '@/assets/product-noah.jpg';
import lilaPhoto from '@/assets/product-lila.jpg';
import diegoPhoto from '@/assets/product-diego.jpg';
import anaPhoto from '@/assets/product-ana.jpg';

const leadershipTeam = [
  {
    name: "Alexandra Chen",
    position: "Chief Executive Officer",
    photo: alexandraPhoto,
    description: "Alexandra leads our company vision with over 15 years of executive experience. She's passionate about building innovative products that solve real-world problems and fostering a culture of excellence and inclusion."
  },
  {
    name: "James Rodriguez",
    position: "Chief Technology Officer",
    photo: jamesPhoto,
    description: "James drives our technical strategy and architecture with deep expertise in scalable systems. He leads technology innovation and ensures our platform can handle millions of users while maintaining peak performance."
  },
  {
    name: "Sophia Kim",
    position: "Chief Design Officer",
    photo: sophiaPhoto,
    description: "Sophia shapes our design philosophy and user experience strategy. With a background in human-centered design, she ensures every interaction is intuitive, beautiful, and accessible to all users."
  },
  {
    name: "Ryan O'Connor",
    position: "Chief Product Officer",
    photo: ryanPhoto,
    description: "Ryan leads product strategy and roadmap planning with keen market insights. He ensures our products meet customer needs while driving business growth through data-driven decision making."
  },
  {
    name: "Priya Patel",
    position: "Chief Operations Officer",
    photo: priyaPhoto,
    description: "Priya orchestrates our operations with precision and efficiency. She optimizes processes, manages strategic partnerships, and ensures our teams have everything they need to deliver exceptional results."
  },
  {
    name: "Michael Johnson",
    position: "Chief Financial Officer",
    photo: michaelPhoto,
    description: "Michael oversees financial strategy and business planning. With expertise in scaling technology companies, he guides our financial growth while maintaining fiscal responsibility and transparency."
  }
];

const engineeringTeam = [
  {
    name: "Alex Thompson",
    position: "Senior Software Engineer",
    photo: alexPhoto,
    description: "Alex specializes in backend systems and microservices architecture. He's passionate about clean code, testing best practices, and mentoring junior developers to reach their full potential."
  },
  {
    name: "Maria Santos",
    position: "DevOps Engineer",
    photo: mariaPhoto,
    description: "Maria manages our cloud infrastructure and deployment pipelines. She ensures 99.9% uptime through automated monitoring, scaling strategies, and disaster recovery planning."
  },
  {
    name: "Carlos Williams",
    position: "Mobile Developer",
    photo: carlosPhoto,
    description: "Carlos builds our mobile applications for iOS and Android. He focuses on performance optimization, user experience, and keeping up with the latest mobile development trends."
  }
];

const designTeam = [
  {
    name: "Emma Davis",
    position: "Senior UI/UX Designer",
    photo: emmaPhoto,
    description: "Emma creates intuitive user interfaces and seamless user experiences. She conducts user research, designs wireframes, and prototypes that bring our product vision to life."
  },
  {
    name: "Lucas Garcia",
    position: "Visual Designer",
    photo: lucasPhoto,
    description: "Lucas crafts our brand identity and visual communications. From marketing materials to product illustrations, he ensures consistent and compelling visual storytelling across all touchpoints."
  },
  {
    name: "Zoe Martinez",
    position: "UX Researcher",
    photo: zoePhoto,
    description: "Zoe conducts user research and usability testing to inform design decisions. She uses both qualitative and quantitative methods to understand user behavior and improve product experiences."
  }
];

const productTeam = [
  {
    name: "Noah Brown",
    position: "Product Analyst",
    photo: noahPhoto,
    description: "Noah analyzes user data and market trends to drive product decisions. He creates insights dashboards, conducts A/B tests, and helps prioritize features that deliver maximum impact."
  },
  {
    name: "Lila Anderson",
    position: "Marketing Manager",
    photo: lilaPhoto,
    description: "Lila develops and executes marketing strategies that drive user acquisition and engagement. She manages campaigns across multiple channels and analyzes performance metrics."
  },
  {
    name: "Diego Hernandez",
    position: "Growth Strategist",
    photo: diegoPhoto,
    description: "Diego focuses on user growth and retention strategies. He experiments with growth hacks, optimizes conversion funnels, and identifies opportunities for market expansion."
  },
  {
    name: "Ana Wilson",
    position: "Customer Success Manager",
    photo: anaPhoto,
    description: "Ana ensures our customers achieve their goals with our product. She provides onboarding support, gathers feedback, and works closely with product teams to improve user satisfaction."
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're a diverse group of 16 passionate professionals dedicated to creating exceptional experiences. 
            From our executive leadership to our talented department teams, get to know the people behind the innovation.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Our executive team provides strategic direction and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadershipTeam.map((leader, index) => (
              <LeadershipMember
                key={index}
                name={leader.name}
                position={leader.position}
                photo={leader.photo}
                description={leader.description}
              />
            ))}
          </div>
        </div>

        {/* Department Teams */}
        <div className="space-y-20">
          <DepartmentSection
            title="Engineering"
            members={engineeringTeam}
            icon={Code}
          />
          
          <DepartmentSection
            title="Design"
            members={designTeam}
            icon={Palette}
          />
          
          <DepartmentSection
            title="Product & Growth"
            members={productTeam}
            icon={TrendingUp}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Ready to Join Our Team?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-primary hover:border-primary-glow text-primary hover:text-primary-glow rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-primary/5">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;