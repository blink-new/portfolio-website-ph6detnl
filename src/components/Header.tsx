import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils'

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background-light/80 dark:bg-background/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-foreground-light dark:text-foreground">
          <span className="font-light">your</span>portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors text-sm">
            Home
          </a>
          <a href="#projects" className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors text-sm">
            Projects
          </a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors text-sm">
            Contact
          </a>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute w-full bg-background-light/95 dark:bg-background/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-56 py-4" : "max-h-0 py-0 overflow-hidden border-b-0"
      )}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <a 
            href="#" 
            className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header