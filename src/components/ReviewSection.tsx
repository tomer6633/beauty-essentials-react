import { motion } from "framer-motion";
import { business } from "../data/BusinessData";

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-20 px-8 md:px-20 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-2"
          style={{ color: business.colorPrimary }}
        >
          What Clients Say
        </p>
        <h2 className="oswald text-4xl font-bold text-gray-900 mb-3">
          Loyal Clients. Consistent Care.
        </h2>
        <p className="text-gray-500 mb-12 max-w-lg">
          London families have trusted Tony & Lynn at Beauty Essentials for over 20 years — and it shows.
        </p>

        {/* Key Insight Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 mb-10 border-l-4 bg-white shadow-sm"
          style={{ borderColor: business.colorPrimary }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: business.colorPrimary }}
          >
            From a 20-Year Client
          </p>
          <blockquote className="text-gray-800 text-lg italic leading-relaxed mb-2">
            "{business.reviewInsight}"
          </blockquote>
          <cite className="text-sm font-semibold text-gray-600 not-italic">
            — {business.reviewAuthor}
          </cite>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {business.reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="text-yellow-400 text-lg mb-3">
                {"★".repeat(r.stars)}
              </div>
              <p className="text-sm text-gray-500 italic leading-relaxed mb-4">
                "{r.text}"
              </p>
              <div className="text-sm font-semibold text-gray-800">
                {r.author}
              </div>
              <div className="text-xs text-gray-400">{r.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
