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
      <section id="services" className="py-20 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: business.colorPrimary }}
          >
            What We Offer
          </p>
          <h2 className="oswald text-4xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-gray-500 mb-12 max-w-lg">
            From classic manicures to full acrylic sets and waxing — everything done with care and precision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 md:px-20 bg-pink-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src={business.aboutImage}
            alt="Beauty Essentials Nails & Spa — London, ON"
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
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: business.colorPrimary }}
            >
              About Us
            </p>
            <h2 className="oswald text-4xl font-bold text-gray-900 mb-4">
              Tony & Lynn — Old South's Nail Experts for 20+ Years.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Beauty Essentials Nails & Spa has been a beloved part of the Old South community in London, Ontario for over two decades. Tony and Lynn greet every client by name — because to them, you're not just a customer, you're family.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Whether it's your first visit or your 100th, you'll leave feeling refreshed, pampered, and perfectly polished.
            </p>
            <ul className="space-y-3 mb-8">
              {business.checkList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-800 text-sm"
                >
                  <span
                    className="font-bold mt-0.5"
                    style={{ color: business.colorPrimary }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={business.phoneTel}
              className="inline-block px-7 py-3 rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ backgroundColor: business.colorPrimary }}
            >
              📞 Call to Book — {business.phone}
            </a>
          </motion.div>
        </div>
      </section>

      <ReviewSection />

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-8 md:px-20"
        style={{ background: business.colorDark }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-pink-300">
            Get In Touch
          </p>
          <h2 className="oswald text-4xl font-bold text-white mb-3">
            Book Your Appointment
          </h2>
          <p className="text-pink-200 mb-12 max-w-lg">
            Call or drop by — walk-ins are always welcome at Beauty Essentials.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: "📞",
                  label: "Phone",
                  value: business.phone,
                  href: business.phoneTel,
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: business.address,
                  href: undefined,
                },
                {
                  icon: "🕐",
                  label: "Hours",
                  value: business.hours,
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-pink-300 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-pink-200 font-semibold hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-pink-100 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Walk-ins welcome callout */}
              <div
                className="rounded-2xl p-5 mt-4"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <p className="text-white font-semibold mb-1">Walk-ins Welcome</p>
                <p className="text-pink-200 text-sm leading-relaxed">
                  No appointment needed — just come in and Tony or Lynn will take care of you.
                </p>
              </div>
            </div>

            {/* Right side: big CTA + map-style info */}
            <div className="flex flex-col gap-5 justify-center">
              <a
                href={business.phoneTel}
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl text-white font-bold text-xl transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: business.colorPrimary }}
              >
                📞 Call Now — {business.phone}
              </a>

              <div
                className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <p className="text-pink-200 text-sm font-medium mb-1">Find Us At</p>
                <p className="text-white font-semibold">
                  100 Belmont Dr Unit 7
                </p>
                <p className="text-pink-200 text-sm">London, ON N6J 2N8</p>
                <p className="text-pink-300 text-sm mt-2">
                  Old South / Belmont Village
                </p>
              </div>

              <div
                className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <p className="text-pink-200 text-sm font-medium mb-1">Hours</p>
                <p className="text-white font-semibold">Mon – Sat: 10am – 6pm</p>
                <p className="text-pink-300 text-sm mt-1">Closed Sundays</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
