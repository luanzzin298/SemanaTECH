import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Diferenciais', path: '/diferenciais' },
    { name: 'Sustentabilidade', path: '/sustentabilidade' },
    { name: 'Clientes', path: '/clientes' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ]

  // Divide os links em dois grupos para melhor organização
  const mainLinks = links.slice(0, 5)
  const moreLinks = links.slice(5)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#001C30]/95 backdrop-blur-md shadow-xl py-3' 
            : 'bg-[#001C30] py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo com animação */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <NavLink to="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-white">H2B</span>
              <span className="text-cyan-300">Plásticos</span>
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainLinks.map((link, idx) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-300 bg-white/10' 
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-cyan-300 rounded-full"
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Dropdown para links adicionais */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-300 hover:bg-white/5 transition-all duration-300 flex items-center gap-1"
              >
                Mais <FaChevronDown className={`text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-[#001C30]/95 backdrop-blur-md rounded-xl shadow-xl border border-cyan-300/20 overflow-hidden"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {moreLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm transition-all duration-300 ${
                          isActive 
                            ? 'text-cyan-300 bg-white/10' 
                            : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white hover:text-cyan-300 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#001C30]/95 backdrop-blur-md shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-2">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'text-cyan-300 bg-white/10 font-semibold' 
                          : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Espaçador para compensar a navbar fixa */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar