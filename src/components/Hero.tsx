import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm </span>
            <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            I'm a passionate developer specializing in creating beautiful and functional web experiences. I love turning ideas into reality through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg border border-indigo-600 dark:border-indigo-400 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero