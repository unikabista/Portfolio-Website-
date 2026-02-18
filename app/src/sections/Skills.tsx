import { Brain, Database, Code, Cloud } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Computer Vision', 'LLMs', 'NLP', 'Deep Learning']
  },
  {
    icon: Database,
    title: 'Data Science',
    color: 'from-blue-500 to-cyan-500',
    skills: ['SQL', 'Pandas', 'NumPy', 'Apache Spark', 'ETL Pipelines', 'Power BI', 'Data Cleaning']
  },
  {
    icon: Code,
    title: 'Languages & Frameworks',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'React', 'Node.js', 'HTML/CSS']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    color: 'from-orange-500 to-amber-500',
    skills: ['AWS', 'Docker', 'Git/GitHub', 'Azure DevOps', 'Linux', 'CI/CD']
  }
];

const additionalSkills = [
  'MediaPipe', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'Jupyter', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase'
];

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium mb-4 block">My Toolkit</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, i) => (
            <div 
              key={i} 
              className="glass-card p-6 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-lg text-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="glass-card p-6 text-center">
          <p className="text-sm text-gray-500 mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {additionalSkills.map((skill, i) => (
              <span key={i} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
