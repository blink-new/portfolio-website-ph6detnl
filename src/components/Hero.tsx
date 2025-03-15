import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent dark:from-accent/10 dark:via-transparent dark:to-transparent pointer-events-none" aria-hidden="true"></div>
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-6 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-600 dark:text-neutral-300 backdrop-blur-md bg-background-light/30 dark:bg-background/30">
            Full-Stack Developer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground-light dark:text-foreground mb-6 tracking-tight">
            <span className="block">Creating digital</span>
            <span className="block">experiences that <span className="text-accent-light dark:text-accent">matter</span></span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl leading-relaxed">
            I design and build applications that are not only beautiful but also functional and user-friendly. Let's turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-accent-light hover:bg-accent-lightHover dark:bg-accent dark:hover:bg-accent-hover text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-foreground-light dark:text-foreground font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
    </section>
  )
}

export default Hero