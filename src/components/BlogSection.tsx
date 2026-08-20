import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/dentistData';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 mb-20">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C29B72] flex items-center gap-2">
            <span>DICAS & CONTEÚDOS</span>
            <span className="w-2 h-2 rounded-full bg-[#C29B72]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
            Informação para a sua saúde bucal
          </h2>
        </div>
        <p className="text-xs text-gray-500 max-w-xs">
          Artigos escritos pelo Dr. Yan Guilherme para esclarecer suas dúvidas e orientar seus cuidados diários.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer transform hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] text-gray-500">
                <span className="bg-[#EADEC9]/50 text-[#8B6137] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C29B72]" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#C29B72] transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#C29B72]">
              <span className="flex items-center gap-1 text-gray-400 font-normal">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Ler artigo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ARTICLE READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white text-[#2C2A29] p-6 md:p-8 rounded-3xl max-w-2xl w-full relative shadow-2xl border border-gray-100 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#C29B72] uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>{selectedPost.category} • {selectedPost.readTime}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 leading-tight">{selectedPost.title}</h3>
            
            <p className="text-xs text-gray-400 mb-6 pb-4 border-b border-gray-100">
              Publicado em {selectedPost.date} pelo Dr. Yan Guilherme
            </p>

            <div className="prose prose-sm text-gray-700 leading-relaxed space-y-4">
              <p className="font-semibold text-gray-900 text-sm bg-[#F5F2EC] p-4 rounded-2xl border-l-4 border-[#C29B72]">
                {selectedPost.summary}
              </p>
              <p className="text-sm">
                {selectedPost.content}
              </p>
              <p className="text-sm">
                A orientação de um profissional capacitado é sempre o passo principal antes de iniciar qualquer procedimento estético ou funcional. Caso você deseje tirar dúvidas específicas sobre o seu caso, agende uma avaliação presencial no nosso consultório em Porto de Galinhas.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-[#18181B] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors"
              >
                FECHAR LEITURA
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
