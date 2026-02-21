import { Code2, Brain, Database, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Engineer',
    description: 'Building intelligent systems with PyTorch, TensorFlow, and LLMs'
  },
  {
    icon: Database,
    title: 'Data Engineer',
    description: 'Designing scalable ETL pipelines processing 50GB+ daily'
  },
  {
    icon: Code2,
    title: 'Full Stack Developer',
    description: 'Crafting responsive web apps with React, Python & SQL'
  },
  {
    icon: Sparkles,
    title: 'Innovation Focused',
    description: 'Transforming complex problems into elegant solutions'
  }
];

export default function About() {
  return (
    <section id="about" className="section relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-blue-400 text-sm font-medium mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turning data into intelligent solutions
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a Computer Science student at the University of Louisiana at Monroe, 
                specializing in <span className="text-blue-400 font-medium">Artificial Intelligence</span>, <span className="text-blue-400 font-medium">Machine Learning</span>, and{' '}
                <span className="text-blue-400 font-medium">Data Engineering</span>. Currently working as a Software Intern 
                at ULM's IT Department, where I've developed diagnostic tools that analyze 500+ 
                monthly logs and improved system accuracy by 30%.
              </p>
              <p>
                I build end-to-end solutions—from training computer vision models and NLP systems 
                to designing scalable data pipelines and modern web applications. My work focuses 
                on creating AI-powered tools that solve real-world problems, whether it's helping 
                visually impaired users navigate their environment or preventing athletic injuries 
                through biomechanical analysis.
              </p>
              <p>
                When I'm not coding, I'm exploring the latest in generative AI, contributing to 
                open-source projects, or mentoring peers in data science and machine learning.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <p className="text-3xl font-bold gradient-text">6+</p>
                <p className="text-sm text-gray-500 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">50GB+</p>
                <p className="text-sm text-gray-500 mt-1">Data Processed Daily</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">40%</p>
                <p className="text-sm text-gray-500 mt-1">Performance Boost</p>
              </div>
            </div>
          </div>
          
          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="glass-card p-6 hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
