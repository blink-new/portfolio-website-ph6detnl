import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold text-foreground-light dark:text-foreground">
              <span className="font-light">your</span>portfolio
            </a>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
              Crafting digital experiences with precision.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-accent-light dark:hover:text-accent transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-accent-light dark:hover:text-accent transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-accent-light dark:hover:text-accent transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-accent-light dark:hover:text-accent transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-accent-light dark:hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-accent-light dark:hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer