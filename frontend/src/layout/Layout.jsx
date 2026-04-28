import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-white relative overflow-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[#050505]">
        
        {/* stars */}
        <div className="absolute inset-0 opacity-40 animate-pulse"
          style={{
            backgroundImage:
              "radial-gradient(2px 2px at 20px 30px, white, transparent), radial-gradient(2px 2px at 200px 150px, white, transparent), radial-gradient(2px 2px at 400px 80px, white, transparent), radial-gradient(2px 2px at 600px 200px, white, transparent)",
            backgroundSize: "800px 400px",
          }}
        />

        {/* gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-purple-900/30" />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

    </div>
  )
}

export default Layout