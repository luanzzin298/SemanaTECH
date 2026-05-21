import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <FaWhatsapp size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Fale conosco</span>
    </motion.a>
  )
}

export default WhatsAppButton