import { useState } from 'react'
import { Send, Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }
  
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent dark:from-accent/5 dark:via-transparent dark:to-transparent pointer-events-none" aria-hidden="true"></div>
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-600 dark:text-neutral-300 backdrop-blur-md bg-background-light/30 dark:bg-background/30">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-light dark:text-foreground mb-4 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground mb-4">
                  Get in Touch
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  Feel free to reach out through the form or connect with me directly via email or social media.
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 rounded-full text-accent-light dark:text-accent">
                  <Mail size={20} />
                </div>
                <div className="ml-3">
                  <a href="mailto:your.email@example.com" className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 rounded-full text-accent-light dark:text-accent">
                  <Github size={20} />
                </div>
                <div className="ml-3">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors">
                    github.com/yourusername
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 rounded-full text-accent-light dark:text-accent">
                  <Linkedin size={20} />
                </div>
                <div className="ml-3">
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-300 hover:text-accent-light dark:hover:text-accent transition-colors">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-background-light dark:bg-neutral-900 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-accent focus:border-accent bg-neutral-100 dark:bg-neutral-800 text-foreground-light dark:text-foreground"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-accent focus:border-accent bg-neutral-100 dark:bg-neutral-800 text-foreground-light dark:text-foreground"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-accent focus:border-accent bg-neutral-100 dark:bg-neutral-800 text-foreground-light dark:text-foreground resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent-light hover:bg-accent-lightHover dark:bg-accent dark:hover:bg-accent-hover text-white font-medium rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
    </section>
  )
}

export default Contact