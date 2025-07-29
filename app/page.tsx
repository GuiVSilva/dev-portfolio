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
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Briefcase,
  GraduationCap,
  Download,
  ArrowRight
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
      'HTML',
      'CSS',
      'React',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'Material UI',
      'Shadcn UI'
    ],
    backend: [
      'Node.js',
      'Spring Boot',
      'Java',
      'TypeScript',
      'Python',
      'Express',
      'TypeORM',
      'Prisma',
      'NestJS'
    ],
    database: ['PostgreSQL', 'MySQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'DBeaver', 'VS Code']
  }

  const projects = [
    {
      title: 'StackFlow',
      description:
        'Gerencie sua empresa com eficiência, desenvolvida para otimizar seu fluxo de produção e organização (Em desenvolvimento)',
      tech: [
        'React',
        'JavaScrpit',
        'TypeScript',
        'TailwindCSS',
        'PostgreSQL',
        'Docker'
      ],
      image: '/stackflow.png?height=200&width=300'
    },
    {
      title: 'Finance.ai',
      description:
        'Gerencie suas finanças com eficiência e inteligência, desenvolvida para simplificar e otimizar o controle financeiro pessoal',
      tech: [
        ' Next.js',
        'TypeScript',
        'TailwindCSS',
        'Shadcn/ui',
        'Prisma',
        'Neon',
        'PostgreSQL',
        'Clerk',
        'Stripe'
      ],
      image: '/finance.png?height=500&width=300'
    },
    {
      title: 'Dieta.AI',
      description:
        'Aplicativo mobile desenvolvido para transformar a maneira como as pessoas planejam suas dietas.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'IA Gemini do Google'],
      image: '/dietaAi.png?height=200&width=300'
    }
  ]

  const experience = [
    {
      title: 'Desenvolvedor FullStack',
      company: 'FLAI',
      period: 'Abril/2024 - Atual',
      description:
        'Desenvolvimento de sistemas com React, Typescript, Node.js e PostgreSQL. Migração de sistemas legados (PHP/Delphi) para tecnologias modernas. Criação de APIs RESTful e interfaces responsivas.'
    },
    {
      title: 'Suporte Técnico',
      company: 'Wvetro',
      period: 'Outubro/2023 - Abril/2024',
      description:
        'Suporte a clientes, implantação de sistemas, treinamentos e gerenciamento de processos ágeis. Análise e classificação de erros no Jira, testes de funcionalidades e validação de correções.'
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

              {/* <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
                  asChild
                >
                  <Link href="#contato">
                    <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Entre em Contato
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div> */}

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

          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Sou um desenvolvedor full-stack com paixão por criar
                  aplicações web modernas e eficientes. Tenho experiência sólida
                  tanto no frontend quanto no backend, sempre buscando as
                  melhores práticas e tecnologias mais recentes.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Minha jornada começou com curiosidade sobre como os sites
                  funcionam, e hoje trabalho com empresas de diversos tamanhos,
                  entregando soluções que fazem a diferença no negócio.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 justify-items-center">
                  {[
                    {
                      icon: GraduationCap,
                      text: 'Formado em Análise e Desenvolvimento de Sistemas',
                      color: 'text-purple-400'
                    },
                    {
                      icon: Calendar,
                      text: '1 ano e 5 meses de experiência',
                      color: 'text-green-400'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
                    >
                      <item.icon
                        className={`w-10 h-5 ${item.color} group-hover:animate-pulse`}
                      />
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              Estou sempre aberto a novas oportunidades e projetos desafiadores
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <a
                  href="https://linkedin.com/in/guivrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Linkedin
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Sorocaba - SP, Brasil</span>
              </div>
            </div>
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
