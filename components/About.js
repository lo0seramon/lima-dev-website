import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-dark/60">
              My journey in web development and what drives me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-dark/80">
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                My journey in web development started in 2018, and since then, I've been
                constantly learning and evolving.
              </p>
              <p className="text-lg text-dark/80">
                I love creating efficient, scalable, and user-friendly solutions that solve
                real-world problems. My approach combines technical expertise with creative
                problem-solving.
              </p>
            </div>

            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <div className="ml-4">
                        <p className="font-medium">Computer Science</p>
                        <p className="text-dark/60">University Name, 2018-2022</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <div className="ml-4">
                        <p className="font-medium">Web Development Bootcamp</p>
                        <p className="text-dark/60">Academy Name, 2022</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <div className="ml-4">
                        <p className="font-medium">Senior Developer</p>
                        <p className="text-dark/60">Company Name, 2020-Present</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <div className="ml-4">
                        <p className="font-medium">Full Stack Developer</p>
                        <p className="text-dark/60">Company Name, 2018-2020</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;