'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Code2,
  Database,
  Globe,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  Download,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Desenvolvedor Full Stack'

  useEffect(() => {
    setIsVisible(true)

    // Typewriter effect
    let i = 0
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)

    return () => clearInterval(typeTimer)
  }, [])

  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vue.js',
      'Angular'
    ],
    backend: ['Node.js', 'Python', 'Java', 'Express', 'FastAPI', 'Spring Boot'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code']
  }

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      image: '/placeholder.svg?height=200&width=300',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description:
        'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: '/placeholder.svg?height=200&width=300',
      github: '#',
      demo: '#'
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Dashboard de analytics com visualizações interativas e relatórios em tempo real.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      image: '/placeholder.svg?height=200&width=300',
      github: '#',
      demo: '#'
    }
  ]

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description:
        'Desenvolvimento de aplicações web escaláveis usando React, Node.js e AWS. Liderança técnica de equipe de 5 desenvolvedores.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description:
        'Criação de sites e aplicações web para clientes diversos. Especialização em e-commerce e sistemas de gestão.'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description:
        'Desenvolvimento de interfaces responsivas e experiências de usuário otimizadas. Trabalho com React e Vue.js.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-xl border-b border-gray-800 z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              DevPortfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                'Início',
                'Sobre',
                'Skills',
                'Experiência',
                'Projetos',
                'Contato'
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .replace('ê', 'e')
                    .replace('í', 'i')}`}
                  className="hover:text-purple-400 transition-all duration-300 hover:scale-110 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Olá, eu sou{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse">
                    Guilherme Vieira
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-4xl text-gray-300 font-light">
                  {typedText}
                  <span className="animate-pulse text-purple-400">|</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  Especializado em criar experiências digitais excepcionais com
                  tecnologias modernas. Transformo ideias em soluções web
                  escaláveis e performáticas.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Entre em Contato
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex space-x-6">
                {[
                  {
                    icon: Github,
                    url: 'https://github.com/GuiVSilva'
                  },
                  {
                    icon: Linkedin,
                    url: 'https://www.linkedin.com/in/guivrs'
                  }
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <item.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-500 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-600 to-green-600 rounded-full blur-2xl opacity-20 animate-pulse delay-1000"></div>
                <Image
                  src="/profile.png"
                  alt="Guilherme Vieira"
                  width={300}
                  height={300}
                  className="relative z-10 rounded-full border-4 border-purple-400/50 shadow-2xl hover:scale-105 transition-transform duration-500 hover:border-green-400/50"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-green-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-purple-400 rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-16 px-6 bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia criando soluções
              inovadoras
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou um desenvolvedor full-stack com paixão por criar aplicações
                web modernas e eficientes. Tenho experiência sólida tanto no
                frontend quanto no backend, sempre buscando as melhores práticas
                e tecnologias mais recentes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha jornada começou com curiosidade sobre como os sites
                funcionam, e hoje trabalho com empresas de diversos tamanhos,
                desde startups até grandes corporações, entregando soluções que
                fazem a diferença no negócio.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  {
                    icon: MapPin,
                    text: 'São Paulo, Brasil',
                    color: 'text-purple-400'
                  },
                  {
                    icon: Calendar,
                    text: '1 ano e 5 meses experiência',
                    color: 'text-green-400'
                  },
                  {
                    icon: GraduationCap,
                    text: 'Ciência da Computação',
                    color: 'text-purple-400'
                  },
                  {
                    icon: Star,
                    text: '50+ projetos entregues',
                    color: 'text-green-400'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.color} group-hover:animate-pulse`}
                    />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Workspace"
                width={500}
                height={400}
                className="relative z-10 rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Frontend',
                icon: Globe,
                skills: skills.frontend,
                color: 'text-purple-400',
                bgColor: 'bg-purple-500/10',
                borderColor: 'hover:border-purple-500/50'
              },
              {
                title: 'Backend',
                icon: Code2,
                skills: skills.backend,
                color: 'text-green-400',
                bgColor: 'bg-green-500/10',
                borderColor: 'hover:border-green-500/50'
              },
              {
                title: 'Database',
                icon: Database,
                skills: skills.database,
                color: 'text-purple-400',
                bgColor: 'bg-purple-500/10',
                borderColor: 'hover:border-purple-500/50'
              },
              {
                title: 'Ferramentas',
                icon: Briefcase,
                skills: skills.tools,
                color: 'text-green-400',
                bgColor: 'bg-green-500/10',
                borderColor: 'hover:border-green-500/50'
              }
            ].map((category, index) => (
              <Card
                key={category.title}
                className={`bg-gray-800/50 border-gray-700 ${category.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl group backdrop-blur-sm`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-300 hover:scale-105"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className="py-16 px-6 bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Experiência Profissional
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Minha trajetória profissional e principais conquistas
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-green-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-2 md:mt-0 border-gray-600 text-gray-300 group-hover:border-purple-400 group-hover:text-purple-400 transition-colors duration-300"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Alguns dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-300"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-300 bg-transparent"
                    >
                      <Link href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                    >
                      <Link href={project.demo}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-16 px-6 bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades interessantes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Entre em Contato
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      title: 'Email',
                      info: 'vieirasilvaguilherme70@gmail.com',
                      color: 'text-purple-400',
                      bgColor: 'bg-purple-500/10'
                    },
                    {
                      icon: MapPin,
                      title: 'Localização',
                      info: 'Sorocaba - SP, Brasil',
                      color: 'text-purple-400',
                      bgColor: 'bg-purple-500/10'
                    }
                  ].map((contact, index) => (
                    <div
                      key={contact.title}
                      className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          {contact.title}
                        </p>
                        <p className="text-gray-400">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Envie uma Mensagem</CardTitle>
                <CardDescription className="text-gray-400">
                  Preencha o formulário e entrarei em contato em breve
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">
                      Nome
                    </label>
                    <Input
                      placeholder="Seu nome"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">
                    Assunto
                  </label>
                  <Input
                    placeholder="Assunto da mensagem"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Sua mensagem..."
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  Enviar Mensagem
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex md:flex-row items-center justify-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Guilherme Vieira. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
