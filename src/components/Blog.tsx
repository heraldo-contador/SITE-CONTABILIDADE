import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, PenTool, BookOpen, User, Calendar, Clock, ArrowRight, Filter, Sparkles, Plus, Trash2, Upload, Image, Link, Bold, Italic, List, ListOrdered, Quote, Code, Minus, Type } from 'lucide-react';
import { BlogPost } from '../types';

// Preset images for blog posts
const PRESET_IMAGES = [
  { label: 'Impostos', url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
  { label: 'Finanças', url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80' },
  { label: 'Escritório', url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80' },
  { label: 'Tecnologia', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
  { label: 'Legislação', url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80' },
  { label: 'Calculadora', url: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&w=800&q=80' },
  { label: 'Sucesso', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
  { label: 'Análise', url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80' },
];

// Pre-seeded high quality initial blog posts
const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Planejamento Tributário: Como pagar menos impostos legalmente em 2026',
    category: 'impostos',
    excerpt: 'Descubra as principais estratégias de elisão fiscal para enquadrar sua empresa no regime tributário mais econômico e otimizar seu fluxo de caixa.',
    content: `O planejamento tributário, também conhecido como elisão fiscal, é um conjunto de sistemas legais que visa diminuir o pagamento de tributos. O contribuinte tem o direito de estruturar o seu negócio da maneira que melhor lhe conviver, procurando a diminuição dos custos com impostos.\n\n### Simples Nacional, Lucro Presumido ou Lucro Real?\nA escolha correta do regime tributário pode representar uma economia de até 40% no faturamento da empresa. \n\n1. **Simples Nacional:** Geralmente indicado para micro e pequenas empresas com faturamento de até R$ 4,8 milhões anuais. Possui facilidade de arrecadação unificada, mas nem sempre é a opção mais barata se a margem de lucro for muito baixa ou a folha de pagamento pequena.\n2. **Lucro Presumido:** Recomendado para empresas com faturamento de até R$ 78 milhões anuais e cujas margens de lucro superem os limites da presunção (32% para serviços, por exemplo).\n3. **Lucro Real:** Obrigatório para faturamentos acima de R$ 78 milhões e altamente recomendado para empresas com margens de lucro muito apertadas ou em fase de prejuízo operacional, pois permite compensar créditos fiscais e deduzir despesas operacionais reais.\n\n### Como iniciar um planejamento tributário?\nO primeiro passo é realizar um levantamento do faturamento, compras e folha de pagamento dos últimos 12 meses. Com esses dados, nosso time projeta o impacto em cada regime fiscal para traçar o caminho mais seguro e econômico para a sua operação.`,
    author: 'Heraldo Júnior',
    readTime: '5 min de leitura',
    date: '28 Jun 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-2',
    title: 'Fator R do Simples Nacional: O guia definitivo para Prestadores de Serviços',
    category: 'legislacao',
    excerpt: 'Sua empresa de tecnologia ou saúde está no Anexo V pagando 15.5%? Entenda como reduzir sua alíquota para 6% usando o pró-labore de forma estratégica.',
    content: `O Fator R é um cálculo realizado mensalmente para determinar se uma empresa prestadora de serviços será tributada pelo Anexo III (alíquota inicial de 6%) ou pelo Anexo V (alíquota inicial de 15,5%) do Simples Nacional.\n\n### Qual a fórmula do Fator R?\nA regra básica do Fator R consiste na relação entre a folha de salários (incluindo pró-labore, FGTS e salários de funcionários) nos últimos 12 meses e a receita bruta acumulada no mesmo período.\n\n**Fator R = Folha de Salários / Receita Bruta**\n\n- Se o resultado for **igual ou superior a 28% (0,28)**, a empresa migra para o Anexo III, economizando imediatamente no imposto pago.\n- Se for **menor que 28%**, a tributação ocorre pelas regras do Anexo V, que possui uma carga inicial muito mais pesada.\n\n### Estratégia de Ajuste de Pró-labore\nSe a sua folha de pagamento natural não atinge os 28% do faturamento, é possível realizar um ajuste planejado no pró-labore dos sócios para atingir essa proporção. É crucial que este ajuste seja feito com acompanhamento de um contador qualificado para emitir as guias de INSS e IRPF de maneira regular, garantindo a conformidade e a máxima economia fiscal de forma legal.`,
    author: 'Equipe Técnica Heraldo',
    readTime: '4 min de leitura',
    date: '15 Jun 2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-3',
    title: 'BPO Financeiro: O segredo para escalar sua empresa terceirizando a gestão',
    category: 'financas',
    excerpt: 'Entenda por que delegar o contas a pagar, contas a receber e conciliação bancária diária pode reduzir seus custos operacionais e liberar seu tempo para focar nas vendas.',
    content: `BPO é a sigla para Business Process Outsourcing (Terceirização de Processos de Negócios). No âmbito financeiro, significa delegar toda a rotina de controle monetário de sua empresa para uma equipe de especialistas contábeis externos.\n\n### Principais Vantagens do BPO Financeiro:\n\n1. **Redução de Custos:** Contratar um funcionário interno exclusivo para o financeiro envolve custos trabalhistas elevados, encargos, e riscos de turnover. Com o BPO, você paga uma assinatura proporcional ao tamanho da sua operação.\n2. **Decisões Baseadas em Dados:** Receba relatórios periódicos de fluxo de caixa, DRE (Demonstração do Resultado do Exercício) e projeções financeiras automatizadas sem precisar preencher planilhas complexas.\n3. **Foco no Core Business:** O empresário livre de tarefas burocráticas diárias como agendar pagamentos e conciliar extratos pode direcionar 100% de sua energia para o desenvolvimento de produtos, marketing e captação de clientes.\n\nTerceirizar o financeiro com a Heraldo Contabilidade Digital garante integração total entre as movimentações do banco e a escrituração contábil, evitando retrabalho e riscos fiscais.`,
    author: 'Mariana Silva',
    readTime: '6 min de leitura',
    date: '02 Jun 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'todos' | 'impostos' | 'financas' | 'legislacao' | 'geral'>('todos');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Create Post Form state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'impostos' | 'financas' | 'legislacao' | 'geral'>('geral');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [readTime, setReadTime] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imgTab, setImgTab] = useState<'preset' | 'url' | 'upload'>('preset');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('A imagem é muito grande. Escolha uma imagem de até 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const insertFormat = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('composer-content') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    const replacement = prefix + selectedText + suffix;

    const newContent = text.substring(0, start) + replacement + text.substring(end);
    setContent(newContent);

    // Restore focus and update cursor selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
    }, 0);
  };

  // Load posts from local storage or set default
  useEffect(() => {
    const saved = localStorage.getItem('heraldo_blog_posts');
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        setPosts(DEFAULT_POSTS);
      }
    } else {
      setPosts(DEFAULT_POSTS);
      localStorage.setItem('heraldo_blog_posts', JSON.stringify(DEFAULT_POSTS));
    }
  }, []);

  // Save posts function
  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('heraldo_blog_posts', JSON.stringify(newPosts));
  };

  // Handle write/publish post
  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !excerpt || !content || !author) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newPost: BlogPost = {
      id: 'custom-' + Date.now().toString(36),
      title,
      category,
      excerpt,
      content,
      author,
      readTime: readTime || '3 min de leitura',
      date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }),
      image: imageUrl || 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
    };

    const updated = [newPost, ...posts];
    savePosts(updated);

    // Reset form states
    setTitle('');
    setExcerpt('');
    setContent('');
    setAuthor('');
    setReadTime('');
    setImageUrl('');
    setImgTab('preset');
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsFormOpen(false);
    }, 2500);
  };

  // Delete post
  const handleDeletePost = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening the article modal
    if (window.confirm('Tem certeza de que deseja excluir esta publicação do blog?')) {
      const updated = posts.filter(p => p.id !== id);
      savePosts(updated);
    }
  };

  // Filtering posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 sm:py-24 bg-bg-light font-sans text-primary scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase mb-3 block">
            Conteúdo e Inteligência Fiscal
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-primary">
            Nosso Blog e Canal de Conhecimento
          </h2>
          <p className="text-primary-light/80 text-sm sm:text-base mt-4">
            Acompanhe artigos exclusivos escritos por nossos especialistas para descomplicar a contabilidade, reduzir impostos e alavancar a gestão de seu negócio.
          </p>
        </div>

        {/* Toolbar: Categories, Search, write button */}
        <div className="bg-white border border-primary/5 rounded-2xl p-4 mb-10 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 order-2 lg:order-1">
            {(['todos', 'impostos', 'financas', 'legislacao', 'geral'] as const).map((cat) => (
              <button
                id={`cat-filter-${cat}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-1.5 px-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent text-primary font-bold shadow-sm'
                    : 'bg-bg-light text-primary-light/70 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {cat === 'todos' && 'Todos'}
                {cat === 'impostos' && 'Impostos'}
                {cat === 'financas' && 'Finanças'}
                {cat === 'legislacao' && 'Legislação'}
                {cat === 'geral' && 'Geral'}
              </button>
            ))}
          </div>

          {/* Search bar & Write Draft button */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 order-1 lg:order-2 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-light/50 pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                id="blog-search-input"
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-light text-primary text-xs pl-9 pr-4 py-2 border border-primary/10 rounded-xl focus:outline-none focus:border-accent/60 placeholder:text-primary-light/40"
              />
            </div>

            <button
              id="toggle-blog-composer-button"
              onClick={() => {
                setIsFormOpen(!isFormOpen);
                setFormSuccess(false);
              }}
              className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-xl text-xs transition-all cursor-pointer hover:shadow-md w-full sm:w-auto justify-center whitespace-nowrap"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>{isFormOpen ? 'Fechar Editor' : 'Escrever Artigo'}</span>
            </button>
          </div>

        </div>

        {/* Interactive Expandable Writer Panel (CMS Composer) */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              id="blog-composer-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-white border-2 border-accent/20 rounded-2xl p-6 sm:p-8 shadow-sleek">
                <div className="flex items-center gap-2 mb-6 border-b border-primary/5 pb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary">Campo de Redação & Publicação no Blog</h3>
                    <p className="text-xs text-primary-light/75">Crie rascunhos ou artigos informativos para simular a postagem imediata.</p>
                  </div>
                </div>

                {formSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center space-y-2">
                    <h4 className="font-bold text-sm">✓ Publicação Publicada com Sucesso!</h4>
                    <p className="text-xs text-green-700/90">Seu artigo contábil já foi adicionado ao topo do blog e está pronto para leitura.</p>
                  </div>
                ) : (
                  <form onSubmit={handlePublish} className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Title */}
                      <div className="md:col-span-2 space-y-1">
                        <label className="text-xs font-bold text-primary block" htmlFor="composer-title">
                          Título do Artigo <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="composer-title"
                          type="text"
                          required
                          placeholder="Ex: Guia de Impostos para Profissionais Liberais"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full bg-bg-light border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:outline-none focus:border-accent"
                        />
                      </div>

                      {/* Category */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-primary block" htmlFor="composer-category">
                          Categoria <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="composer-category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value as any)}
                          className="w-full bg-bg-light border border-primary/10 rounded-xl px-3 py-2.5 text-xs text-primary focus:outline-none focus:border-accent cursor-pointer"
                        >
                          <option value="impostos">Impostos & Tributação</option>
                          <option value="financas">Gestão Financeira & BPO</option>
                          <option value="legislacao">Legislação & Conformidade</option>
                          <option value="geral">Geral & Empreendedorismo</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Author */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-primary block" htmlFor="composer-author">
                          Autor / Escritor <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="composer-author"
                          type="text"
                          required
                          placeholder="Ex: Heraldo Júnior, Mariana Silva..."
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className="w-full bg-bg-light border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:outline-none focus:border-accent"
                        />
                      </div>

                      {/* Read Time */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-primary block" htmlFor="composer-readtime">
                          Tempo Estimado de Leitura
                        </label>
                        <input
                          id="composer-readtime"
                          type="text"
                          placeholder="Ex: 5 min de leitura (padrão)"
                          value={readTime}
                          onChange={(e) => setReadTime(e.target.value)}
                          className="w-full bg-bg-light border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-primary block" htmlFor="composer-excerpt">
                        Resumo Rápido (Subtítulo do Card) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="composer-excerpt"
                        type="text"
                        required
                        placeholder="Ex: Entenda em poucos passos os tributos federais e municipais para médicos e dentistas autônomos."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full bg-bg-light border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-primary block" htmlFor="composer-content">
                        Conteúdo Completo do Artigo <span className="text-red-500">*</span>
                      </label>
                      
                      {/* Formatting Controls Toolbar */}
                      <div className="flex flex-wrap items-center gap-1 bg-bg-light border border-primary/10 rounded-t-xl px-3 py-2 border-b-0">
                        {/* Negrito */}
                        <button
                          type="button"
                          onClick={() => insertFormat('**', '**')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer"
                          title="Negrito"
                        >
                          <Bold className="w-3.5 h-3.5" />
                        </button>

                        {/* Itálico */}
                        <button
                          type="button"
                          onClick={() => insertFormat('*', '*')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer"
                          title="Itálico"
                        >
                          <Italic className="w-3.5 h-3.5" />
                        </button>

                        <div className="h-4 w-px bg-primary/10 mx-1" />

                        {/* Título Grande (H2) */}
                        <button
                          type="button"
                          onClick={() => insertFormat('\n## ', '\n')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer flex items-center gap-0.5 text-[10px] font-bold"
                          title="Título H2"
                        >
                          <Type className="w-3.5 h-3.5" />
                          <span>H2</span>
                        </button>

                        {/* Título Médio (H3) */}
                        <button
                          type="button"
                          onClick={() => insertFormat('\n### ', '\n')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer flex items-center gap-0.5 text-[10px] font-bold"
                          title="Título H3"
                        >
                          <Type className="w-3.5 h-3.5 text-primary-light" />
                          <span>H3</span>
                        </button>

                        <div className="h-4 w-px bg-primary/10 mx-1" />

                        {/* Lista Marcadores */}
                        <button
                          type="button"
                          onClick={() => insertFormat('\n- ', '\n')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer"
                          title="Lista com Marcadores"
                        >
                          <List className="w-3.5 h-3.5" />
                        </button>

                        {/* Lista Numerada */}
                        <button
                          type="button"
                          onClick={() => insertFormat('\n1. ', '\n')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer"
                          title="Lista Numerada"
                        >
                          <ListOrdered className="w-3.5 h-3.5" />
                        </button>

                        <div className="h-4 w-px bg-primary/10 mx-1" />

                        {/* Citação */}
                        <button
                          type="button"
                          onClick={() => insertFormat('\n> ', '\n')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer"
                          title="Citação"
                        >
                          <Quote className="w-3.5 h-3.5" />
                        </button>

                        {/* Bloco de Código / Destaque */}
                        <button
                          type="button"
                          onClick={() => insertFormat('\n```\n', '\n```\n')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer"
                          title="Bloco de Destaque / Código"
                        >
                          <Code className="w-3.5 h-3.5" />
                        </button>

                        {/* Linha Divisória */}
                        <button
                          type="button"
                          onClick={() => insertFormat('\n---\n')}
                          className="p-1.5 hover:bg-primary/5 rounded text-primary hover:text-accent-dark transition-all cursor-pointer"
                          title="Linha Divisória"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <textarea
                        id="composer-content"
                        required
                        rows={8}
                        placeholder="Escreva aqui o artigo completo contendo orientações, tabelas e explicações detalhadas para seus clientes. Utilize a barra de formatação acima para enriquecer seu texto com títulos, listas e destaques."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-bg-light border border-primary/10 rounded-b-xl rounded-t-none border-t-0 px-4 py-3 text-xs text-primary focus:outline-none focus:border-accent resize-y font-sans leading-relaxed"
                      />
                    </div>

                    {/* Image Selection / Upload */}
                    <div className="space-y-2 border border-primary/5 rounded-xl p-4 bg-bg-light/40">
                      <label className="text-xs font-bold text-primary flex items-center gap-1.5">
                        <Image className="w-4 h-4 text-accent-dark" />
                        <span>Imagem de Capa do Artigo</span>
                      </label>
                      
                      {/* Image selection tabs */}
                      <div className="flex gap-4 border-b border-primary/5 pb-2 mb-3">
                        <button
                          type="button"
                          onClick={() => setImgTab('preset')}
                          className={`text-xs font-semibold pb-1 border-b-2 transition-all cursor-pointer ${
                            imgTab === 'preset'
                              ? 'border-accent text-primary font-bold'
                              : 'border-transparent text-primary-light/60 hover:text-primary'
                          }`}
                        >
                          Banco de Imagens
                        </button>
                        <button
                          type="button"
                          onClick={() => setImgTab('url')}
                          className={`text-xs font-semibold pb-1 border-b-2 transition-all cursor-pointer ${
                            imgTab === 'url'
                              ? 'border-accent text-primary font-bold'
                              : 'border-transparent text-primary-light/60 hover:text-primary'
                          }`}
                        >
                          Link da Internet (URL)
                        </button>
                        <button
                          type="button"
                          onClick={() => setImgTab('upload')}
                          className={`text-xs font-semibold pb-1 border-b-2 transition-all cursor-pointer ${
                            imgTab === 'upload'
                              ? 'border-accent text-primary font-bold'
                              : 'border-transparent text-primary-light/60 hover:text-primary'
                          }`}
                        >
                          Enviar Arquivo
                        </button>
                      </div>

                      {/* Tab Contents */}
                      {imgTab === 'preset' && (
                        <div className="space-y-2">
                          <p className="text-[10px] text-primary-light/70">Selecione uma imagem profissional focada em contabilidade, tributos e gestão:</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {PRESET_IMAGES.map((preset) => (
                              <button
                                type="button"
                                key={preset.url}
                                onClick={() => setImageUrl(preset.url)}
                                className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer group ${
                                  imageUrl === preset.url ? 'border-accent shadow-md scale-[1.02]' : 'border-transparent hover:border-primary/25'
                                }`}
                              >
                                <img
                                  src={preset.url}
                                  alt={preset.label}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-end p-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                  <span className="text-[9px] text-white font-medium truncate w-full text-left">{preset.label}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {imgTab === 'url' && (
                        <div className="space-y-1">
                          <label className="text-[10px] text-primary-light/70 block" htmlFor="composer-image-url">
                            Insira a URL direta da imagem desejada:
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-light/50 pointer-events-none">
                              <Link className="w-3.5 h-3.5" />
                            </span>
                            <input
                              id="composer-image-url"
                              type="url"
                              placeholder="https://images.unsplash.com/photo-..."
                              value={imageUrl.startsWith('data:') ? '' : imageUrl}
                              onChange={(e) => setImageUrl(e.target.value)}
                              className="w-full bg-white border border-primary/10 rounded-xl pl-9 pr-4 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                            />
                          </div>
                        </div>
                      )}

                      {imgTab === 'upload' && (
                        <div className="space-y-2">
                          <div className="border-2 border-dashed border-primary/10 hover:border-accent/40 rounded-xl p-4 bg-white transition-all text-center">
                            <input
                              id="composer-image-file"
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <label htmlFor="composer-image-file" className="cursor-pointer block space-y-1">
                              <Upload className="w-5 h-5 text-primary-light/40 mx-auto mb-1" />
                              <p className="text-xs font-semibold text-primary">Escolha uma imagem do seu dispositivo</p>
                              <p className="text-[10px] text-primary-light/60">Arquivos JPG, PNG, GIF, WEBP de até 2MB</p>
                            </label>
                          </div>
                        </div>
                      )}

                      {/* Live Selected Image Preview */}
                      {imageUrl && (
                        <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-primary/5 mt-2">
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-primary/10 flex-shrink-0">
                            <img
                              src={imageUrl}
                              alt="Pré-visualização"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <p className="text-xs font-semibold text-primary">Miniatura de Capa Selecionada</p>
                            <p className="text-[10px] text-primary-light/60 truncate">
                              {imageUrl.startsWith('data:') ? 'Imagem carregada localmente' : imageUrl}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setImageUrl('')}
                            className="text-red-500 hover:text-red-700 text-xs font-semibold px-2.5 py-1 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                          >
                            Remover
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end gap-3 pt-2 border-t border-primary/5">
                      <button
                        id="cancel-composer-button"
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="bg-bg-light hover:bg-primary/5 text-primary-light font-bold py-2.5 px-5 rounded-xl text-xs transition-all cursor-pointer"
                      >
                        Cancelar
                      </button>
                      <button
                        id="submit-composer-button"
                        type="submit"
                        className="bg-accent hover:bg-accent-dark text-primary font-bold py-2.5 px-6 rounded-xl text-xs transition-all cursor-pointer hover:shadow-lg"
                      >
                        Publicar no Blog
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white border border-primary/10 rounded-2xl p-12 text-center max-w-xl mx-auto shadow-sm">
            <BookOpen className="w-10 h-10 text-primary-light/30 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-lg text-primary">Nenhum artigo encontrado</h3>
            <p className="text-xs text-primary-light/75 mt-1.5 leading-relaxed">
              Não encontramos nenhuma publicação correspondente aos filtros aplicados. Tente buscar por outros termos ou clique em "Escrever Artigo" para publicar um novo!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onClick={() => setSelectedPost(post)}
                className="bg-white border border-primary/5 rounded-2xl overflow-hidden shadow-sleek hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                {/* Article Header (with optional placeholder/Unsplash image) */}
                <div className="relative h-44 overflow-hidden bg-primary/10">
                  <img
                    src={post.image || 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-accent font-semibold text-[10px] rounded-md px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs">
                      {post.category === 'impostos' && 'Impostos'}
                      {post.category === 'financas' && 'Finanças'}
                      {post.category === 'legislacao' && 'Legislação'}
                      {post.category === 'geral' && 'Geral'}
                    </span>
                  </div>
                </div>

                {/* Article body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-3.5 text-[11px] text-primary-light/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent-dark" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent-dark" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="font-serif font-bold text-base text-primary leading-snug group-hover:text-accent-dark transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-primary-light/85 text-xs leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Action row */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/5 mt-auto">
                    <span className="flex items-center gap-1.5 text-xs text-primary font-bold">
                      <User className="w-3.5 h-3.5 text-accent" />
                      <span>Por {post.author}</span>
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {/* Delete button (only for user-created posts to keep the interface tidy) */}
                      {post.id.startsWith('custom-') && (
                        <button
                          type="button"
                          onClick={(e) => handleDeletePost(post.id, e)}
                          className="p-1 text-primary-light/40 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50 cursor-pointer"
                          title="Excluir publicação"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      
                      <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Footer info banner: newsletter / direct consult */}
        <div className="mt-16 bg-white border border-accent/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-accent block">
              Precisa de ajuda personalizada?
            </span>
            <p className="text-sm text-primary-light leading-relaxed mt-1.5">
              Nossos artigos dão insights valiosos, mas o planejamento ideal depende dos dados particulares da sua empresa. Agende um diagnóstico gratuito e exclusivo.
            </p>
          </div>
          <a
            id="blog-footer-cta"
            href="#contato"
            className="bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-6 rounded-xl transition-all text-xs hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            Fazer Diagnóstico Gratuito
          </a>
        </div>

      </div>

      {/* Immersive Article Viewer Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="article-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            />

            {/* Modal content box */}
            <motion.div
              id="article-modal-box"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white border border-primary/10 rounded-2xl shadow-2xl p-0 max-h-[90vh] overflow-hidden text-primary z-10 flex flex-col"
            >
              {/* Image banner */}
              <div className="relative h-56 sm:h-64 bg-primary flex-shrink-0">
                <img
                  src={selectedPost.image || 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                
                {/* Close Button top-right */}
                <button
                  id="close-article-modal-top"
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-black/45 text-white hover:bg-black/75 transition-all p-2 rounded-full font-mono text-xs cursor-pointer"
                  aria-label="Fechar artigo"
                >
                  ✕
                </button>

                <div className="absolute bottom-5 left-6 right-6">
                  <span className="bg-accent text-primary font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2 inline-block">
                    {selectedPost.category === 'impostos' && 'Impostos'}
                    {selectedPost.category === 'financas' && 'Finanças'}
                    {selectedPost.category === 'legislacao' && 'Legislação'}
                    {selectedPost.category === 'geral' && 'Geral'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable body content */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6 max-h-[calc(90vh-16rem)]">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-primary-light/60 pb-4 border-b border-primary/5">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-accent-dark" />
                    <span className="text-primary font-semibold">Por {selectedPost.author}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-accent-dark" />
                    <span>{selectedPost.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-accent-dark" />
                    <span>{selectedPost.readTime}</span>
                  </span>
                </div>

                {/* Subtitle / Excerpt */}
                <p className="text-sm font-medium leading-relaxed italic text-primary-light text-left pl-3 border-l-2 border-accent">
                  "{selectedPost.excerpt}"
                </p>

                {/* Markdown / Core Rich Text Renderer */}
                <div className="text-xs sm:text-sm text-primary-light/90 space-y-4 leading-relaxed whitespace-pre-wrap font-sans text-left">
                  {selectedPost.content}
                </div>

                {/* Bottom interactive action */}
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <h5 className="font-bold text-xs text-primary">Quer falar com o autor ou com nosso time?</h5>
                    <p className="text-[11px] text-primary-light/80 mt-0.5">Nós agendamos uma videoconferência rápida de 15 minutos sem compromisso.</p>
                  </div>
                  <a
                    id="article-whatsapp-cta"
                    href="https://api.whatsapp.com/send/?phone=5591993608142&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent-dark text-primary font-bold py-2 px-4 rounded-xl text-xs transition-all cursor-pointer whitespace-nowrap shadow-sm"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Close footer button */}
              <div className="bg-bg-light p-4 flex justify-end border-t border-primary/5 flex-shrink-0">
                <button
                  id="close-article-modal-bottom"
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="bg-primary hover:bg-primary-light text-white font-semibold py-2 px-5 rounded-xl text-xs transition-all cursor-pointer"
                >
                  Fechar Artigo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
