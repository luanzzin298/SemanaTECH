import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ]

  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sustentabilidade', path: '/sustentabilidade' },
    { name: 'Contato', path: '/contato' },
  ]

  const policies = [
    { name: 'Política de Privacidade', path: '#' },
    { name: 'Termos de Uso', path: '#' },
    { name: 'Trabalhe Conosco', path: '#' },
    { name: 'Código de Ética', path: '#' },
  ]

  return (
    <footer className="bg-[#001C30] text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-300/50 via-cyan-300 to-cyan-300/50"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-300/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-300/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Coluna 1 - Logo e Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold tracking-tight">
              <span className="text-white">H2B</span>
              <span className="text-cyan-300">Plásticos</span>
            </h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Soluções plásticas com responsabilidade ambiental, inovação contínua e compromisso com a economia circular.
            </p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-cyan-300 text-gray-400 hover:text-[#001C30] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Coluna 2 - Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white text-lg mb-4 relative inline-block">
              Links rápidos
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-cyan-300 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3 - Políticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white text-lg mb-4 relative inline-block">
              Políticas
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-cyan-300 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {policies.map((policy, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={policy.path}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {policy.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 4 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white text-lg mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-cyan-300 rounded-full"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Receba novidades, lançamentos e ofertas exclusivas.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-cyan-300/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-300 hover:bg-cyan-200 text-[#001C30] p-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaArrowRight size={16} />
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-300 text-xs mt-2"
              >
                ✓ Inscrição realizada com sucesso!
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Linha divisória com gradiente */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-cyan-300/10"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} H2B Plásticos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-xs">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-xs">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-xs">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer