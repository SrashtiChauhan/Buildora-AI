import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#050505] via-[#070713] to-[#050505] text-white overflow-hidden mt-0">

      {/* glow background (animated breathing) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-indigo-600/10 blur-[140px]" />
      </motion.div>

      {/* top divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-gray-300"
      >

        {/* LEFT */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="space-y-4"
        >
          <h3 className="text-white font-semibold text-xl">
            About the Platform
          </h3>
          <p className="text-base leading-relaxed text-gray-400">
            Build modern, production-ready websites instantly using AI.
            Designed for creators, startups, and developers who move fast.
          </p>
        </motion.div>

        {/* MIDDLE */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="relative space-y-4"
        >
          {/* vertical divider */}
          <div className="hidden md:block absolute left-[-30px] top-0 h-full w-[1px] bg-white/10" />

          <h3 className="text-white font-semibold text-xl">
            About Us
          </h3>
          <p className="text-base leading-relaxed text-gray-400">
            Buildora AI is crafted to simplify web creation using AI - helping
            you go from idea to live product faster, cleaner, and smarter.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="relative space-y-4"
        >
          {/* vertical divider */}
          <div className="hidden md:block absolute left-[-30px] top-0 h-full w-[1px] bg-white/10" />

          <h3 className="text-white font-semibold text-xl">
            Contact
          </h3>

          <div className="space-y-3 text-base">

            <p>
              Email:{" "}
              <a
                href="mailto:srashtichauhan24@gmail.com"
                className="hover:text-indigo-400 transition hover:underline"
              >
                srashtichauhan24@gmail.com
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/SrashtiChauhan"
                target="_blank"
                className="hover:text-indigo-400 transition hover:underline"
              >
                github.com/SrashtiChauhan
              </a>
            </p>

            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/srashtichauhan/"
                target="_blank"
                className="hover:text-indigo-400 transition hover:underline"
              >
                Srashti Chauhan
              </a>
            </p>

          </div>
        </motion.div>

      </motion.div>

      {/* bottom */}
      <div className="text-center text-sm text-gray-500 pb-8 border-t border-white/5 pt-6">
        © 2026 Buildora AI — Built by Srashti Chauhan | Software Engineer
      </div>
    </footer>
  );
};

export default Footer;