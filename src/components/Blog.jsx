import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaUser, FaFolderOpen, FaSearch, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import { blogPosts } from '../data/content'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', ...new Set(blogPosts.map(post => post.category))]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blog e Novidades</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Fique por dentro das tendências, inovações e cases do setor plástico. Conteúdo técnico e estratégico para sua indústria.
          </p>
        </motion.div>

        {/* Barra de busca e filtros */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-secondary" /> {post.date}</span>
                  <span className="flex items-center gap-1"><FaUser className="text-secondary" /> {post.author}</span>
                  <span className="flex items-center gap-1"><FaFolderOpen className="text-secondary" /> {post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                >
                  Ler artigo completo <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum artigo encontrado com os filtros atuais.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Receba conteúdos exclusivos</h3>
          <p className="mb-6">Assine nossa newsletter e fique por dentro de lançamentos, dicas e cases.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="Seu melhor e-mail" className="flex-1 px-4 py-3 rounded-full text-gray-800" />
            <button className="bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition">Assinar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog