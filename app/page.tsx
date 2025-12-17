'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react'

export default function Home() {
  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-semibold text-gray-900 hidden sm:inline">SSC</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Get in Touch
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Software Engineer III
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Building high-impact web and full-stack solutions. Progressed from Intern to SDE3 in 2.5 years by driving major performance gains and leading complex migrations with zero production issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                >
                  Let's Connect <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a href="https://www.linkedin.com/in/siddharth-shankar-choudhary/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    View LinkedIn <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-80 sm:w-80 sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Siddharth Shankar Choudhary"
                  width={320}
                  height={400}
                  className="relative rounded-2xl object-cover w-full h-full shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a results-driven Software Engineer with proven success in delivering high-impact web and full-stack solutions. My journey from Intern to SDE3 in just 2.5 years demonstrates my commitment to excellence and continuous growth.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I specialize in building scalable, reliable, and efficient solutions using modern technologies. My expertise spans React, TypeScript, Kotlin, Spring Boot, and cloud infrastructure, with a strong focus on performance optimization and system design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond coding, I'm passionate about mentoring peers, driving engineering velocity, and solving real-world problems through clean and efficient code.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">180× Performance Boost</h3>
                <p className="text-gray-600">Eliminated recurring 504 Gateway Timeout errors by introducing composite indexes, reducing query execution time from 2.7 minutes to ~1 second.</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">57% Build Time Reduction</h3>
                <p className="text-gray-600">Led migration from CRA to Vite, achieving 57% reduction in build time and 40% decrease in deployment cycle duration.</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-pink-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10,000+ MAU Platform</h3>
                <p className="text-gray-600">Autonomously managed a web app with 10,000+ monthly active users and was selected to lead a project overseeing 24 applications.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {/* SDE3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer III</h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">BayOne Solutions (Atlassian Project)</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800 mt-2 sm:mt-0">Dec 2025 - Present</Badge>
              </div>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Working as a Software Engineer III on client engagement with Atlassian through BayOne, contributing to scalable, high-performance backend systems.</span>
                </li>
              </ul>
            </Card>

            {/* SDE3 at Surya */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer III</h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">Surya Digital</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800 mt-2 sm:mt-0">Jul 2025 - Oct 2025</Badge>
              </div>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Eliminated recurring 504 Gateway Timeout errors in critical RPC services by introducing composite indexes, achieving a <strong>180× performance boost</strong> and reducing query execution time from 2.7 minutes to ~1 second.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Led development of a Spring Boot microservice with MariaDB and Kubernetes, designing RESTful APIs, managing schema design, and ensuring high availability in production.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Enhanced system performance by refactoring key data queries, leading to a <strong>61% reduction</strong> in load times for users.</span>
                </li>
              </ul>
            </Card>

            {/* SDE2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer II</h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">Surya Digital</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 mt-2 sm:mt-0">Jul 2024 - Jun 2025</Badge>
              </div>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Autonomously managed a web app with <strong>10,000+ monthly active users</strong> and was selected to lead a project overseeing 24 applications based on performance and ownership.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Revamped legacy system by guiding transition from CRA to Vite, leading to a <strong>57% reduction in build time</strong> and a <strong>40% decrease</strong> in deployment cycle duration.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Integrated rate limiting after identifying as a top priority, thereby improving API stability and enabling findings to fix the three biggest causes of crashes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Refactored code base and dependencies to reduce build size by <strong>3.87MB (63%)</strong>.</span>
                </li>
              </ul>
            </Card>

            {/* SDE1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer I</h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">Surya Digital</p>
                </div>
                <Badge className="bg-pink-100 text-pink-800 mt-2 sm:mt-0">Jul 2023 - Jun 2024</Badge>
              </div>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li className="flex gap-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Developed and enforced UI component naming conventions within React design system, resulting in a <strong>25% reduction</strong> in developer onboarding time and enhanced code maintainability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Spearheaded the development of key modules for an asset management platform and reduced order processing time by <strong>30%</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Championed Agile transformation across three development teams, shortening sprint cycles by two days and decreasing the number of bugs discovered in production by <strong>15%</strong>.</span>
                </li>
              </ul>
            </Card>

            {/* Intern */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer Intern</h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">Surya Digital</p>
                </div>
                <Badge className="bg-green-100 text-green-800 mt-2 sm:mt-0">Jan 2023 - Jun 2023</Badge>
              </div>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Completed a full-stack internship focused on modern web development, gaining hands-on experience in frontend technologies like JavaScript, TypeScript, React.js, and MobX-State-Tree.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Acquired proficiency in backend technologies such as Kotlin, Ktor, and Koin for RPC based web services, alongside PostgreSQL for database management.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Vite'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Backend Development */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'Kotlin', 'Ktor', 'PostgreSQL', 'REST API'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Infra & DevOps */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infra & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Kubernetes', 'Docker', 'GitHub Actions', 'Vercel'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-pink-100 text-pink-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Tools & Workflow */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Workflow</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Linux', 'VS Code', 'JIRA', 'Figma'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
          <Card className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bachelor of Engineering (CSE)</h3>
                <p className="text-lg text-blue-600 font-semibold mt-1">New Horizon College of Engineering</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 mt-2 sm:mt-0">Jul 2019 - May 2023</Badge>
            </div>
            <p className="text-gray-600 text-lg">CGPA: 8.61</p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-2">Siddharth Shankar Choudhary</h2>
          <p className="text-2xl text-blue-100 mb-4">Software Engineer III</p>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <a href="mailto:shankarchoudharysiddharth@gmail.com" className="inline-block">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                <Mail className="mr-2 w-5 h-5" />
                Email Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/siddharth-shankar-choudhary/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/siddharthshankarchoudhary" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                <Github className="mr-2 w-5 h-5" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Siddharth Shankar Choudhary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
