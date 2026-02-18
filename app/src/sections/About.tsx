import { Code2, Brain, Database, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Deep Learning, NLP, Computer Vision'
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'ETL Pipelines, Analytics, Visualization'
  },
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'Python, React, Node.js, SQL'
  },
  {
    icon: Sparkles,
    title: 'Problem Solver',
    description: 'Turning complexity into simplicity'
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
              Building intelligent systems that make a difference
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a Computer Science junior at the University of Louisiana at Monroe, 
                passionate about AI, Machine Learning, and Data Science. With hands-on 
                experience developing Python-based diagnostic tools and automated data 
                pipelines, I've improved system accuracy by 30%.
              </p>
              <p>
                I work across the entire stack—from training deep learning models to 
                building modern web applications. My focus is always on creating solutions 
                that are not just technically sound, but also practical and impactful.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <p className="text-3xl font-bold gradient-text">30%</p>
                <p className="text-sm text-gray-500 mt-1">Accuracy Improvement</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">500+</p>
                <p className="text-sm text-gray-500 mt-1">Logs Processed Monthly</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">40%</p>
                <p className="text-sm text-gray-500 mt-1">Faster Resolution</p>
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
