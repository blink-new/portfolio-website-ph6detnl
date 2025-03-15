import { ExternalLink, Github } from 'lucide-react'

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory, personalized recommendations, and secure payment processing.',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Productivity Dashboard',
    description: 'An all-in-one productivity suite featuring task management, time tracking, and team collaboration tools.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'A tool that leverages machine learning to generate high-quality content for blogs, social media, and marketing materials.',
    tags: ['Python', 'TensorFlow', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    liveUrl: '#',
    repoUrl: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent dark:from-accent/5 dark:via-transparent dark:to-transparent pointer-events-none" aria-hidden="true"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-600 dark:text-neutral-300 backdrop-blur-md bg-background-light/30 dark:bg-background/30">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-light dark:text-foreground mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-background-light dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-accent-light dark:text-accent hover:text-accent-lightHover dark:hover:text-accent-hover transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.repoUrl} 
                    className="flex items-center text-accent-light dark:text-accent hover:text-accent-lightHover dark:hover:text-accent-hover transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
    </section>
  )
}

export default Projects