import { ArrowRight, Sparkles, Zap, LayoutTemplate, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useSelector } from "react-redux"

const Home = () => {    
  const navigate = useNavigate()
  const { userData } = useSelector(state => state.user)

  return (
    <>
      <Navbar/>

      {/* GLOBAL BACKGROUND WRAPPER */}
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >

        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-6 pt-32 pb-20 text-center">

          {/* overlay (dark for readability) */}
          <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm" />

          {/* glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-125 h-125 bg-indigo-600/20 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[140px]" />
          </div>

          {/* grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff15 1px, transparent 1px), linear-gradient(to bottom, #ffffff15 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">
                Next-Gen AI Builder
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Turn Ideas Into
              <br />
              <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                AI-Powered Websites Instantly
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mt-6 text-lg text-gray-400"
            >
              Create modern, production-ready websites in seconds.
              <br></br>
              From idea to live website, all in one seamless flow.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button
                onClick={()=>navigate('/generate')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition"
              >
                Start Building
                <ArrowRight size={18} />
              </button>

              <button className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl transition">
                See It in Action
              </button>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition">
                <Zap className="text-yellow-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Instant Build</h3>
                <p className="text-sm text-gray-400">
                  Describe your idea and get a complete website instantly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition">
                <LayoutTemplate className="text-indigo-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Responsive Layout</h3>
                <p className="text-sm text-gray-400">
                  Perfect across mobile, tablet, and desktop.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition">
                <Download className="text-green-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Export & Own</h3>
                <p className="text-sm text-gray-400">
                  Download clean production-ready code instantly.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* FOOTER */}
        <Footer />

      </div>
    </>
  )
}

export default Home