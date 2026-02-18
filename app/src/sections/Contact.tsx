import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'unika.bista0@gmail.com',
    href: 'mailto:unika.bista0@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/unikabista',
    href: 'https://github.com',
    color: 'from-gray-500 to-gray-600'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/unikabista',
    href: 'https://linkedin.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download CV',
    href: '#',
    color: 'from-emerald-500 to-teal-500'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="section relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium mb-4 block">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm open to internships, research collaborations, and freelance opportunities.
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group glass-card p-5 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <link.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm text-gray-500 mb-1">{link.label}</p>
              <div className="flex items-center gap-1">
                <p className="font-medium text-sm group-hover:text-blue-400 transition-colors">
                  {link.value}
                </p>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
        
        {/* CTA Card */}
        <div className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Have a project in mind?</h3>
          <p className="text-gray-400 mb-6">
            I'm always excited to work on new challenges and collaborate with talented people.
          </p>
          <a 
            href="mailto:unika.bista0@gmail.com"
            className="btn-primary"
          >
            <Mail className="w-4 h-4" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
