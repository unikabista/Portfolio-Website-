import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Dristi',
    subtitle: 'AI-Powered Visual Assistant',
    tags: ['GPT-4o Vision', 'Python', 'OpenAI API', 'TTS'],
    description: 'AI accessibility application that transforms visual information into real-time audio descriptions, empowering visually impaired users with instant environmental awareness. Processes camera feed through GPT-4o Vision API to generate contextual audio guidance.',
    image: '/project-dristi.jpg',
    github: 'https://github.com/unikabista',
    demo: '#',
    featured: true,
    impact: '500+ users helped, 95% accuracy in object detection'
  },
  {
    title: 'Athlyze',
    subtitle: 'Smart Injury Prevention System',
    tags: ['Computer Vision', 'MediaPipe', 'React', 'Firebase'],
    description: 'Real-time biomechanical analysis platform that uses pose estimation to detect improper movement patterns and prevent ACL injuries. Provides instant feedback on form and technique with 30fps video processing.',
    image: '/project-athlyze.jpg',
    github: 'https://github.com/unikabista',
    demo: '#',
    featured: true,
    impact: 'Analyzes 33+ body landmarks in real-time'
  },
  {
    title: 'Predictive Maintenance System',
    subtitle: 'ML-Powered Diagnostics',
    tags: ['Python', 'scikit-learn', 'Pandas', 'SQL'],
    description: 'Machine learning pipeline that predicts equipment failures 48 hours in advance by analyzing 500+ monthly system logs. Reduced downtime by 40% through automated anomaly detection and preventive alerts.',
    image: '/cs-data-pipeline.jpg',
    github: 'https://github.com/unikabista',
    demo: '#',
    featured: false,
    impact: '40% faster fault resolution, 30% accuracy improvement'
  },
  {
    title: 'Sentiment Analysis Engine',
    subtitle: 'NLP-Based Customer Insights',
    tags: ['NLP', 'BERT', 'PyTorch', 'Flask'],
    description: 'Deep learning model using BERT transformer architecture to analyze customer feedback sentiment across 10,000+ reviews. Deployed as REST API with 89% accuracy, processing 1000+ texts per minute.',
    image: '/hero-city.jpg',
    github: 'https://github.com/unikabista',
    demo: '#',
    featured: false,
    impact: '89% accuracy, 1000+ reviews/min processing speed'
  },
  {
    title: 'ETL Data Pipeline',
    subtitle: 'Automated Analytics Framework',
    tags: ['Apache Spark', 'SQL', 'Python', 'Power BI'],
    description: 'Scalable ETL pipeline that processes 50GB+ of marketing data daily. Automated data validation, transformation, and visualization workflows, reducing manual processing time by 70%.',
    image: '/cs-data-pipeline.jpg',
    github: 'https://github.com/unikabista',
    demo: '#',
    featured: false,
    impact: '50GB+ daily processing, 70% time reduction'
  },
  {
    title: 'Interactive Portfolio Website',
    subtitle: 'Modern React Application',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    description: 'Responsive portfolio website built with React and TypeScript, featuring smooth animations, dark mode design, and optimized performance. Showcases projects and experience with modern web technologies.',
    image: '/hero-city.jpg',
    github: 'https://github.com/unikabista/Portfolio-Website-',
    demo: '#',
    featured: false,
    impact: 'Fully responsive, lighthouse score 95+'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium mb-4 block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AI-powered applications, machine learning systems, and data pipelines that solve real-world problems. 
            Each project demonstrates technical depth and measurable impact.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group relative glass-card overflow-hidden hover:bg-white/[0.05] transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-64' : 'h-48'}`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                    <span className="text-xs font-medium text-blue-300">Featured</span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Impact */}
                {project.impact && (
                  <div className="mb-4 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-xs text-blue-300 font-medium">
                      ⚡ {project.impact}
                    </p>
                  </div>
                )}
                
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
