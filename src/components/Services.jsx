import { motion } from 'framer-motion'
import { services } from '../data/content'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight, FaClock, FaChartLine, FaHandshake } from 'react-icons/fa'

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  // FORÇA A APLICAÇÃO DO CSS AO CARREGAR A PÁGINA
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Benefícios adicionais
  const benefits = [
    { title: 'Atendimento Personalizado', desc: 'Consultores dedicados para cada cliente', icon: FaHandshake },
    { title: 'Suporte Técnico 24/7', desc: 'Equipe sempre disponível para emergências', icon: FaClock },
    { title: 'Relatórios Gerenciais', desc: 'Acompanhamento de KPIs e métricas', icon: FaChartLine },
  ]

  return (
    <section id="services" className="services-section pt-32 pb-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 rounded-full">
              Soluções Completas
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001C30] mb-4 tracking-normal">
            Serviços <span className="text-cyan-500 inline-block tracking-normal">Especializados</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Da consultoria estratégica à logística inteligente, entregamos valor em cada etapa da sua cadeia produtiva.
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradiente de fundo no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Ícone com efeito */}
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svc.icon className="text-3xl text-white" />
                </div>
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-bold text-[#001C30] mb-3 text-center group-hover:text-cyan-600 transition-colors">
                {svc.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-600 text-center leading-relaxed mb-4">
                {svc.desc}
              </p>
              
              {/* Link "Saiba mais" animado */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hoveredCard === idx ? 1 : 0, y: hoveredCard === idx ? 0 : 10 }}
                className="text-center"
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Solicitar este serviço <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Seção de Diferenciais / Benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#001C30] mb-4">
              Por que escolher a <span className="text-cyan-500">H2B Plásticos</span>?
            </h3>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="bg-cyan-100 p-3 rounded-xl">
                  <benefit.icon className="text-2xl text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001C30] mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-500">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metodologia / Processo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#001C30] to-[#0A4A6E] rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-2 tracking-normal">Nossa Metodologia de Trabalho</h3>
            <p className="text-cyan-100">Como transformamos ideias em soluções reais</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Diagnóstico', desc: 'Análise detalhada das suas necessidades' },
              { step: '02', title: 'Projeto', desc: 'Desenvolvimento da solução personalizada' },
              { step: '03', title: 'Execução', desc: 'Implementação com acompanhamento' },
              { step: '04', title: 'Otimização', desc: 'Melhoria contínua e suporte' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-300 mb-2 tracking-normal">{item.step}</div>
                <div className="w-12 h-0.5 bg-cyan-300 mx-auto my-3"></div>
                <h4 className="font-semibold text-white mb-1 tracking-normal">{item.title}</h4>
                <p className="text-sm text-cyan-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cases / Clientes que confiam */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-xl font-semibold text-[#001C30] mb-6 tracking-normal">
            +200 empresas confiam nos nossos serviços
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['Indústria Alimentícia', 'Construção Civil', 'Agronegócio', 'Logística', 'Varejo'].map((sector, idx) => (
              <span key={idx} className="text-gray-500 text-sm">{sector}</span>
            ))}
          </div>
        </motion.div>

        {/* Chamada para ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <FaCheckCircle className="text-5xl text-cyan-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#001C30] mb-3 tracking-normal">
            Pronto para elevar a qualidade da sua embalagem?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Entre em contato com nossos especialistas e descubra como podemos otimizar seus processos e reduzir custos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Solicitar diagnóstico gratuito
            </Link>
            <Link
              to="/produtos"
              className="border-2 border-[#001C30] text-[#001C30] hover:bg-[#001C30] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Conhecer produtos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services