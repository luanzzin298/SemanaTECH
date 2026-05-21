import { motion } from 'framer-motion'
import { differentials } from '../data/content'
import { FaCheckCircle } from 'react-icons/fa'

const Differentials = () => {
  return (
    <section id="differentials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER PADRONIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 rounded-full">
              Vantagens Competitivas
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001C30] mb-4">
            Diferenciais <span className="text-cyan-500">Competitivos</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Por que a H2B Plásticos é a escolha certa para sua empresa.
          </p>
        </motion.div>

        {/* GRID DE DIFERENCIAIS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Ícone com efeito */}
              <div className="relative mb-5">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <diff.icon className="text-3xl text-white" />
                </div>
                {/* Efeito de brilho */}
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-[#001C30] mb-3 group-hover:text-cyan-600 transition-colors">
                {diff.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {diff.desc || diff.text}
              </p>

              {/* Linha decorativa no hover */}
              <div className="w-0 h-0.5 bg-cyan-400 mx-auto mt-4 group-hover:w-12 transition-all duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* SELO DE QUALIDADE ADICIONAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-cyan-50 rounded-full px-6 py-3 border border-cyan-100">
            <FaCheckCircle className="text-cyan-500 text-xl" />
            <span className="text-gray-700 text-sm font-medium">Certificações ISO 9001 • Qualidade Garantida • Sustentabilidade</span>
          </div>
        </motion.div>

        {/* CHAMADA PARA AÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/contato"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Solicitar proposta comercial
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Differentials