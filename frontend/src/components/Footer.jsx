import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative flex justify-center mt-24 px-6">

      {/* floating glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/20 blur-[160px]" />
      </motion.div>

      {/* glass container */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative w-full max-w-7xl rounded-[40px] border border-white/10 
        bg-black/40 backdrop-blur-2xl 
        shadow-[0_0_100px_rgba(99,102,241,0.2)] 
        px-14 py-20 mb-16"
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-gray-300">

          {/* LEFT */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img src="/ai2.png" className="w-9 h-9" />
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Buildora AI
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Build modern, production-ready websites instantly using AI.
              <br></br>
              
              Designed for creators, startups, and developers who move fast.
            </p>
          </motion.div>

          {/* MIDDLE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="relative space-y-4"
          >
            <div className="hidden md:block absolute left-[-25px] top-0 h-full w-[1px] bg-white/10" />

            <h3 className="text-white font-semibold text-lg">
              About Us
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              Buildora AI simplifies web creation using AI that help you go from
              idea to live product faster, cleaner, and smarter.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="relative space-y-4"
          >
            <div className="hidden md:block absolute left-[-25px] top-0 h-full w-[1px] bg-white/10" />

            <h3 className="text-white font-semibold text-lg">
              Contact
            </h3>

            <div className="space-y-2 text-sm text-gray-300">

              <a
                href="mailto:srashtichauhan24@gmail.com"
                className="block hover:text-indigo-400 transition duration-500"
              >
                Email
              </a>

              <a
                href="https://github.com/SrashtiChauhan"
                target="_blank"
                className="block hover:text-indigo-400 transition duration-500"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/srashtichauhan/"
                target="_blank"
                className="block hover:text-indigo-400 transition duration-500"
              >
                LinkedIn
              </a>

            </div>
          </motion.div>

        </div>

        {/* bottom */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          © 2026 Buildora AI ~ Built by Srashti Chauhan
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;