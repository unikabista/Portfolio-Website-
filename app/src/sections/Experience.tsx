import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Intern',
    company: 'University of Louisiana at Monroe',
    department: 'IT Department',
    period: 'May 2024 - Present',
    description: 'Developed C and Python diagnostic tools to automate the analysis of 500+ monthly logs, accelerating fault detection and resolution by 40%.',
    achievements: [
      'Built data validation pipelines using SQL and Pandas',
      'Increased system output accuracy by 30%',
      'Designed C++ simulation models and monitoring dashboards'
    ],
    skills: ['Python', 'SQL', 'C++', 'Pandas', 'Dashboards']
  },
  {
    title: 'Technology & UX Insights Intern',
    company: 'Design Arts Seminars, Inc',
    department: '',
    period: 'Jan 2026 - Present',
    description: 'Leveraged SQL queries and Python with scikit-learn to analyze marketing KPIs and technical ecosystems.',
    achievements: [
      'Optimized digital customer journey through data analysis',
      'Proposed AWS-based solutions for infrastructure modernization',
      'Implemented AI technologies including NLP and deep learning'
    ],
    skills: ['SQL', 'scikit-learn', 'AWS', 'NLP', 'Data Analysis']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium mb-4 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Professional experience and internships that shaped my skills.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              {i !== experiences.length - 1 && (
                <div className="absolute left-[11px] md:left-[calc(50%-1px)] top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
              )}
              
              <div className={`grid md:grid-cols-2 gap-8 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                {/* Date - hidden on mobile, shown on desktop */}
                <div className={`hidden md:block ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-6 h-6 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  
                  <div className="glass-card p-6 hover:bg-white/[0.05] transition-colors">
                    {/* Mobile date */}
                    <span className="md:hidden text-sm text-gray-500 mb-2 block">{exp.period}</span>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-blue-400">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, j) => (
                        <span key={j} className="tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
