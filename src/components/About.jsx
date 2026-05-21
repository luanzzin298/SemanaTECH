import { motion } from 'framer-motion'
import { FaRecycle, FaIndustry, FaLeaf, FaTrophy, FaChartLine, FaUsers, FaCheckCircle } from 'react-icons/fa'
import { company } from '../data/content'
import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { icon: FaIndustry, value: company.employees, label: 'Funcionários', suffix: '+', color: 'cyan' },
    { icon: FaUsers, value: company.clients, label: 'Clientes ativos', suffix: '+', color: 'cyan' },
    { icon: FaRecycle, value: company.recycledMonthly, label: 'Toneladas recicladas/mês', suffix: 't', color: 'cyan' },
    { icon: FaTrophy, value: new Date().getFullYear() - company.founded, label: 'Anos de experiência', suffix: '+', color: 'cyan' },
  ]

  const values = [
    {
      icon: FaLeaf,
      title: 'Compromisso Ambiental',
      description: 'Mais de 50 toneladas de plástico reciclado por mês, reduzindo resíduos e emitindo menos CO₂.',
      color: 'cyan'
    },
    {
      icon: FaChartLine,
      title: 'Inovação Contínua',
      description: 'Laboratório próprio e parcerias com universidades para desenvolver novas resinas e processos.',
      color: 'cyan'
    },
    {
      icon: FaUsers,
      title: 'Relacionamento Transparente',
      description: 'Atendimento próximo, consultoria técnica e soluções sob medida para cada cliente.',
      color: 'cyan'
    },
  ]

  return (
    <section className="pt-32 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 rounded-full">Sobre nós</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001C30] mb-4">Sobre a <span className="text-cyan-500">H2B Plásticos</span></h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Inovação, resistência e sustentabilidade em cada grânulo – há mais de 15 anos transformando a indústria plástica brasileira.
          </p>
        </motion.div>

        {/* Conteúdo principal: texto + imagem */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#001C30] mb-4 relative inline-block">
              Nossa História
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-400 rounded-full"></span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 mt-4">
              Fundada em <span className="font-semibold text-cyan-600">{company.founded}</span>, a H2B Plásticos nasceu com um propósito claro: oferecer soluções plásticas de alta performance sem abrir mão da responsabilidade ambiental. Desde o início, investimos em tecnologia de ponta e capacitação de equipe, tornando-nos referência nacional na produção de filmes plásticos, sacos industriais e embalagens personalizadas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoje, atendemos os setores alimentício, construção civil, logística e agrícola, sempre com foco na redução de impacto ambiental e na inovação contínua. Nossa missão é superar as expectativas de desempenho, durabilidade e segurança de nossos clientes, contribuindo ativamente para a economia circular.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-500" />
                <span className="text-sm text-gray-600">Certificação ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-500" />
                <span className="text-sm text-gray-600">Selo Verde</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#001C30] to-[#0A4A6E] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/800x500/0A4A6E/cyan?text=Fábrica+H2B"
                alt="Fábrica H2B Plásticos"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001C30]/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Tecnologia e sustentabilidade lado a lado</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards de estatísticas animados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-[#001C30] mb-8">
            Números que comprovam nossa <span className="text-cyan-500">excelência</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 border border-cyan-100"
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-3xl text-cyan-600" />
                </div>
                <div className="text-3xl font-bold text-[#001C30]">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Valores e compromissos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-[#001C30] mb-12">
            Nossos <span className="text-cyan-500">Valores</span> e Compromissos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <value.icon className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#001C30] mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Linha do tempo / Diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#001C30] to-[#0A4A6E] rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-300">2008</div>
              <p className="text-white/70 text-sm mt-2">Fundação da empresa</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">2015</div>
              <p className="text-white/70 text-sm mt-2">Certificação ISO 9001</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">2020</div>
              <p className="text-white/70 text-sm mt-2">Expansão nacional</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">2025</div>
              <p className="text-white/70 text-sm mt-2">Meta de 100% reciclagem</p>
            </div>
          </div>
        </motion.div>

        {/* Chamada para ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#001C30] mb-4">Pronto para transformar sua embalagem?</h3>
          <p className="text-gray-600 mb-6">Solicite uma cotação ou agende uma visita à nossa fábrica.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Fale com um especialista
            </Link>
            <Link
              to="/produtos"
              className="border-2 border-[#001C30] text-[#001C30] hover:bg-[#001C30] hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              Conheça os produtos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About