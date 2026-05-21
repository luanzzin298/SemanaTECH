import { motion } from 'framer-motion'
import { partners } from '../data/content'

const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-gray-500 uppercase tracking-wider text-sm font-semibold mb-8">Empresas que confiam na H2B</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, idx) => (
            <motion.img
              key={idx}
              src={partner.logo}
              alt={partner.name}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients