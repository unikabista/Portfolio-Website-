import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Athlyze',
    subtitle: 'ACL Prevention Platform',
    tags: ['Computer Vision', 'MediaPipe', 'React', 'Firebase'],
    description: 'A real-time movement analysis pipeline that flags injury risk and gives athletes actionable feedback using Computer Vision.',
    image: '/project-athlyze.jpg',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Dristi',
    subtitle: 'AI Accessibility App',
    tags: ['GPT-4o Vision', 'Python', 'Real-time Audio'],
    description: 'An AI-driven agent that processes visual data into real-time audio, helping visually impaired users navigate their environment.',
    image: '/project-dristi.jpg',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Data Pipeline Framework',
    subtitle: 'Automated ETL System',
    tags: ['Python', 'SQL', 'C++', 'Pandas'],
    description: 'Automated ETL pipelines for processing 500+ monthly logs with 30% improved accuracy through rigorous validation.',
    image: '/cs-data-pipeline.jpg',
    github: '#',
    demo: '#',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-950/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium mb-4 block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects I've worked on, from AI-powered applications to data pipelines.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group relative glass-card overflow-hidden hover:bg-white/[0.05] transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 rounded-full">
                    <span className="text-xs font-medium text-violet-300">Featured</span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
