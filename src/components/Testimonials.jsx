import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import { testimonials } from '../data/content'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">O que nossos clientes dizem</h2>
        <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
        <div className="relative max-w-3xl mx-auto mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <p className="text-xl md:text-2xl italic">"{testimonials[index].text}"</p>
              <div className="flex justify-center mt-6">
                {[...Array(testimonials[index].rating)].map((_, i) => <FaStar key={i} className="text-accent text-xl" />)}
              </div>
              <p className="mt-6 font-bold text-lg">{testimonials[index].name}</p>
              <p className="text-gray-300">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-accent p-3 rounded-full transition-all duration-300 -ml-4 md:-ml-8"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-accent p-3 rounded-full transition-all duration-300 -mr-4 md:-mr-8"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-accent w-6' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials