import { motion } from 'framer-motion'
import { FaLeaf, FaSolarPanel, FaWater, FaHandsHelping } from 'react-icons/fa'

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Compromisso com o Planeta</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Sustentabilidade integrada ao nosso DNA, com metas ousadas para 2030.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex gap-4 items-start">
              <FaLeaf className="text-3xl text-secondary flex-shrink-0 mt-1" />
              <div><h3 className="text-xl font-semibold text-primary">Economia Circular</h3><p className="text-gray-600">Resíduos plásticos pós-consumo e pós-industrial são reintegrados à produção, gerando novo valor.</p></div>
            </motion.div>
            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex gap-4 items-start">
              <FaSolarPanel className="text-3xl text-secondary flex-shrink-0 mt-1" />
              <div><h3 className="text-xl font-semibold text-primary">Energia Solar</h3><p className="text-gray-600">40% da energia consumida na fábrica vem de fontes renováveis, reduzindo emissões de CO₂.</p></div>
            </motion.div>
            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-4 items-start">
              <FaWater className="text-3xl text-secondary flex-shrink-0 mt-1" />
              <div><h3 className="text-xl font-semibold text-primary">Reuso de Água</h3><p className="text-gray-600">Sistema de captação e tratamento que reduz o consumo em 30% e protege os recursos hídricos.</p></div>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg text-center"
          >
            <FaHandsHelping className="text-6xl text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">+50 t/mês recicladas</h3>
            <p className="text-gray-600 mb-4">Somos signatários do Pacto Global e atuamos com certificação de material reciclado pós-consumo.</p>
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm">Meta 2027: 100% circular</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sustainability