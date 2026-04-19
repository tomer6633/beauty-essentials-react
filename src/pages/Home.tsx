import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ServiceCard from "../components/ServiceCard";
import ReviewSection from "../components/ReviewSection";
import { motion } from "framer-motion";
import { business } from "../data/BusinessData";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />

      {/* Services */}
      <section id="services" className="py-20 px-8 md:px-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: business.colorPrimary }}>
            What We Do
          </p>
          <h2 className="oswald text-4xl font-bold text-gray-900 mb-3">
            Professional Drywall Services
          </h2>
          <p className="text-gray-500 mb-12 max-w-lg">
            From new builds to finishing touches — every stage handled with care and craftsmanship.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src={business.aboutImage}
            alt="Drywall professional at work"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: business.colorPrimary }}>
              About Us
            </p>
            <h2 className="oswald text-4xl font-bold text-gray-900 mb-4">
              Perfection Is the Standard, Not the Exception.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Absolute Drywall is a locally owned London, ON business specializing in residential drywall that meets — and exceeds — expectations. New builds, renovations, additions and repairs.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              We use only the best materials and our efficient timelines keep your project moving on schedule.
            </p>
            <ul className="space-y-3 mb-8">
              {business.checkList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-800 text-sm">
                  <span className="font-bold mt-0.5" style={{ color: business.colorPrimary }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3 rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ backgroundColor: business.colorPrimary }}
            >
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <ReviewSection />

      {/* Contact */}
      <section id="contact" className="py-20 px-8 md:px-20" style={{ background: business.colorDark }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-blue-400">
            Get In Touch
          </p>
          <h2 className="oswald text-4xl font-bold text-white mb-3">
            Ready for a Free Quote?
          </h2>
          <p className="text-slate-400 mb-12 max-w-lg">
            Tell us about your project and we'll get back to you fast. No obligation, no pressure.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: "📞", label: "Phone", value: business.phone, href: `tel:${business.phoneRaw}` },
                { icon: "📍", label: "Location", value: business.address, href: undefined },
                { icon: "🕐", label: "Hours", value: business.hours, href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-blue-300 font-semibold hover:text-blue-200">{item.value}</a>
                    ) : (
                      <p className="text-slate-200 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400">First Name</label>
                  <input type="text" placeholder="John" className="bg-white/8 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500" style={{ background: "rgba(255,255,255,0.07)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400">Last Name</label>
                  <input type="text" placeholder="Smith" className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500" style={{ background: "rgba(255,255,255,0.07)" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400">Phone</label>
                <input type="tel" placeholder="(519) 000-0000" className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500" style={{ background: "rgba(255,255,255,0.07)" }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400">Service Needed</label>
                <select className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500" style={{ background: business.colorDark }}>
                  {business.services.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                  <option>Repair / Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none" style={{ background: "rgba(255,255,255,0.07)" }} />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: business.colorPrimary }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
