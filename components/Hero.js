import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-light to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="min-h-screen flex items-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-mono text-primary/80">
                  Hello, I'm
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-gradient">Your Name</span>
                </h1>
                <p className="text-xl md:text-2xl text-dark/60 font-light">
                  Full Stack Developer crafting modern web experiences
                </p>
              </div>

              <p className="text-lg text-dark/80 max-w-2xl">
                I specialize in building exceptional digital experiences that are fast,
                accessible, and built with best practices. My main focus is creating
                intuitive and dynamic user interfaces that bring ideas to life.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-outline">
                  Get in Touch
                </a>
              </div>

              <div className="flex items-center gap-6 pt-8">
                {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-dark/60 hover:text-primary transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-dark/60">Scroll down</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;