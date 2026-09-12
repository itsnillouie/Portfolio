import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BadgeCheck, BriefcaseBusiness, Check, Cloud, Code2, Copy,
  Database, Download, Github, GraduationCap, Linkedin, Mail, MapPin,
  Network, Phone, ServerCog, Terminal, ExternalLink, Cpu, Layers3, Headphones, Wrench, Menu, X
} from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }
}

const skills = [
  {
    icon: Code2,
    title: 'Software & Web Development',
    items: ['PHP / Laravel', 'Python', 'JavaScript', 'RESTful API Development', 'HTML5 / CSS3']
  },
  {
    icon: Database,
    title: 'Database & Backend Management',
    items: ['MySQL', 'Database Integration', 'Database Optimization', 'API Integration', 'Relational Design']
  },
  {
    icon: Cloud,
    title: 'Cloud & Systems',
    items: ['AWS Infrastructure', 'IoT Integration', 'System Analysis', 'Network Troubleshooting', 'Cloud Fundamentals']
  },
  {
    icon: Headphones,
    title: 'IT Support & Technical Operations',
    items: ['Hardware & Software Troubleshooting', 'Network Troubleshooting', 'User / Customer Support', 'System Analysis', 'Technical Documentation', 'Issue Diagnosis & Escalation']
  }
]

const certifications = [
  'AWS Cloud Quest: Cloud Practitioner',
  'AWS Fundamentals of Machine Learning and AI',
  'CSS NC II (Networking)',
  'Cyber Threat Management & Intro to Cybersecurity',
  'Intro to IoT & Digital Transformation'
]

const realWorldProjects = [
  {
    index: '01',
    title: 'PNP Project Management System',
    subtitle: 'Philippine National Police — ITMS',
    tag: 'Enterprise System / Full-Stack',
    desc: 'A centralized project tracking and monitoring system adopted by the System Management Division. Built scalable dashboards, backend workflows, REST-style integrations, and optimized relational data flows for day-to-day operational visibility.',
    stack: ['Laravel', 'PHP', 'REST API', 'MySQL'],
    button: 'View GitHub Repository',
    href: 'https://github.com/itsnillouie/Project-management-System'
  },
  {
    index: '02',
    title: 'EcoCyclix',
    subtitle: 'Don Bosco Technical College Capstone',
    tag: 'IoT & Hardware Integration',
    desc: 'A biometric-integrated automated bicycle carousel parking system designed to improve security and accessibility. Led a multidisciplinary team, built responsive web-facing system components, and connected biometric and IoT workflows.',
    stack: ['IoT', 'Full Stack', 'Biometrics', 'Python / JavaScript'],
    button: 'View GitHub Profile',
    href: 'https://github.com/itsnillouie'
  }
]

const practiceProjects = [
  {
    index: 'P01',
    title: 'Pokémon Memory Match',
    subtitle: 'Browser Memory Game',
    tag: 'JavaScript / Frontend',
    desc: 'A browser-based memory matching game using custom visual assets and interactive JavaScript game logic.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    button: 'View Repository',
    href: 'https://github.com/itsnillouie/PokemonMemoryMatch'
  },
  {
    index: 'P02',
    title: 'Penguin Fishing',
    subtitle: 'Interactive JavaScript Project',
    tag: 'JavaScript / Game',
    desc: 'An interactive JavaScript project demonstrating event-driven browser logic and frontend development fundamentals.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    button: 'View Repository',
    href: 'https://github.com/itsnillouie/PenguinFishing'
  },
  {
    index: 'P03',
    title: 'Coco Tea Website',
    subtitle: 'Responsive Brand Website',
    tag: 'Frontend Development',
    desc: 'A beverage and brand-style website focused on structured layouts, visual presentation, and responsive frontend styling.',
    stack: ['HTML', 'CSS', 'Responsive UI'],
    button: 'View Repository',
    href: 'https://github.com/itsnillouie/Coco-Tea'
  },
  {
    index: 'P04',
    title: 'Mercedes-Benz Website Reimagining',
    subtitle: 'Academic Frontend Project',
    tag: 'UI / Frontend',
    desc: 'A reimagined Mercedes-Benz web experience with a clean, responsive interface and modern visual styling.',
    stack: ['HTML', 'CSS', 'Responsive Design'],
    button: 'View Repository',
    href: 'https://github.com/itsnillouie/MercedezBenz-'
  },
  {
    index: 'P05',
    title: 'Facebook UI Project',
    subtitle: 'Frontend Recreation',
    tag: 'HTML / UI Practice',
    desc: 'A frontend practice project focused on recreating familiar social-media layout patterns and interface structure.',
    stack: ['HTML', 'CSS'],
    button: 'View Repository',
    href: 'https://github.com/itsnillouie/Facebook'
  }
]

const commandOutput = {
  help: 'Available commands: help, skills, projects, contact, clear',
  skills: 'Laravel · PHP · JavaScript · Python · MySQL · REST APIs · AWS · IoT · Networking · IT Support · Troubleshooting',
  projects: 'REAL-WORLD\n01 PNP Project Management System\n02 EcoCyclix\n\nPRACTICE & LEARNING\nP01 Pokémon Memory Match\nP02 Penguin Fishing\nP03 Coco Tea Website\nP04 Mercedes-Benz Reimagining\nP05 Facebook UI Project',
  contact: 'Email: neilbudol@gmail.com\nPhone: +63 962 304 0219\nLinkedIn: linkedin.com/in/budol-neil/'
}

function App() {
  const [copied, setCopied] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'NeilOS Portfolio Terminal — type `help` to begin.' }
  ])
  const [command, setCommand] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const year = useMemo(() => new Date().getFullYear(), [])

  const copyText = async (label, value) => {
    await navigator.clipboard.writeText(value)
    setCopied(label)
    setTimeout(() => setCopied(''), 1500)
  }

  const runCommand = (e) => {
    e.preventDefault()
    const cmd = command.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') {
      setTerminalHistory([])
      setCommand('')
      return
    }
    setTerminalHistory(prev => [
      ...prev,
      { type: 'command', text: `$ ${command}` },
      { type: 'system', text: commandOutput[cmd] || `Command not found: ${command}. Type \`help\`.` }
    ])
    setCommand('')
  }

  return (
    <main className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 mesh opacity-70" aria-hidden="true" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4 lg:px-8" aria-label="Primary navigation">
          <a href="#home" className="focus-ring font-semibold tracking-tight" onClick={() => setMobileMenuOpen(false)}>NB<span className="text-neutral-500">/26</span></a>
          <div className="hidden items-center gap-5 text-sm text-neutral-400 md:flex lg:gap-7">
            {['About', 'Skills', 'Projects', 'Architecture', 'Experience', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring transition hover:text-white">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:neilbudol@gmail.com" className="focus-ring hidden rounded-full border border-neutral-700 px-4 py-2 text-sm transition hover:border-neutral-500 hover:bg-white hover:text-black sm:inline-flex">Let’s talk</a>
            <button type="button" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(v => !v)} className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-300 md:hidden">
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="border-t border-white/5 bg-black/95 px-4 pb-4 pt-2 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {['About', 'Skills', 'Projects', 'Architecture', 'Experience', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="focus-ring rounded-xl px-3 py-3 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white">{item}</a>
              ))}
              <a href="mailto:neilbudol@gmail.com" className="focus-ring mt-1 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-medium text-black sm:hidden">Let’s talk</a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="noise relative min-h-screen border-b border-white/5 pt-20 sm:pt-24 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:gap-14 sm:px-5 sm:py-16 lg:grid-cols-[1.12fr_.88fr] lg:px-8 lg:py-24">
          <motion.div {...fadeUp}>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-neutral-700 bg-charcoal px-3.5 py-2 text-[11px] leading-5 text-neutral-300 shadow-insetSteel sm:mb-7 sm:px-4 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,.8)]" />
              Available for Software & Cloud Engineering Roles
            </div>

            <p className="mb-3 text-sm uppercase tracking-[.28em] text-neutral-500">Software · Cloud · Full Stack</p>
            <h1 className="max-w-4xl break-words text-4xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Neil Louie C. <span className="text-neutral-400">Budol</span>
            </h1>
            <h2 className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-silver sm:text-2xl">
              Software Engineer <span className="text-neutral-600">|</span> Cloud Engineer <span className="text-neutral-600">|</span> Full Stack Developer
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
              I build reliable full-stack applications with clean backend integration, practical database design, and user-focused interfaces. I’m expanding deeper into cloud architecture and infrastructure to deliver systems that scale beyond the local environment.
            </p>

            <div className="mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <a href="#projects" className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-neutral-200 sm:w-auto">View Projects <ArrowRight size={17} /></a>
              <a href="#contact" className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-950 px-5 py-3 font-medium transition hover:border-neutral-500 hover:bg-neutral-900 sm:w-auto">Contact Me</a>
              <a href="/Neil_Budol_Resume.pdf" download className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-800 px-5 py-3 font-medium text-neutral-300 transition hover:border-neutral-600 hover:text-white sm:w-auto"><Download size={17} /> Download Resume</a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/itsnillouie', icon: Github },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/budol-neil/', icon: Linkedin },
                { label: 'Email', href: 'mailto:neilbudol@gmail.com', icon: Mail }
              ].map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 transition hover:-translate-y-1 hover:border-neutral-500 hover:text-white hover:shadow-glow">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: .08 }} className="mx-auto w-full max-w-[440px] sm:max-w-[500px]">
            <div className="metal-border relative overflow-hidden rounded-[30px] border border-neutral-800 bg-gradient-to-b from-neutral-900 to-black p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[20px] bg-neutral-950 sm:rounded-[22px]">
                <img src="/profile.jpg" alt="Portrait of Neil Louie C. Budol" className="aspect-[4/5] w-full object-cover object-[center_18%] grayscale-[18%] contrast-[1.04]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-20 sm:p-6 sm:pt-24">
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[.2em] text-neutral-400">Based in</p>
                      <p className="mt-1 flex items-center gap-2 font-medium"><MapPin size={16} /> Antipolo City, Philippines</p>
                    </div>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">GMT+8</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <motion.div {...fadeUp} className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-neutral-500">01 — About</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Engineer with a systems mindset.</h2>
            </div>
            <div className="glass rounded-3xl p-7 sm:p-9">
              <p className="text-lg leading-8 text-neutral-300">
                IT graduate with hands-on experience across full-stack development, backend systems, project leadership, cloud fundamentals, and technical troubleshooting. I like turning complex requirements into structured software—then refining the system until the experience feels simple for the people using it.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[['2026','BSIT Graduate'],['Full SDLC','Project Leadership'],['AWS','Cloud Fundamentals']].map(([v,l]) => (
                  <div key={l} className="rounded-2xl border border-white/5 bg-black/30 p-5">
                    <div className="text-2xl font-semibold">{v}</div>
                    <div className="mt-1 text-sm text-neutral-500">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="noise relative border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-xs uppercase tracking-[.28em] text-neutral-500">02 — Skills Matrix</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Built across application, backend, and infrastructure layers.</h2>
            <p className="mt-4 text-neutral-400">A practical stack for shipping web systems, integrating data, and supporting the infrastructure around them.</p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skills.map(({ icon: Icon, title, items }, i) => (
              <motion.article key={title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * .06 }} className="glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-glow">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-black text-silver"><Icon size={20} /></div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map(item => <span key={item} className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-sm text-neutral-400 transition group-hover:border-neutral-700 group-hover:text-neutral-300">{item}</span>)}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-black/70 p-6 sm:p-8">
            <div className="flex items-center gap-3"><BadgeCheck size={20} className="text-silver" /><h3 className="font-semibold">Certifications</h3></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map(cert => <div key={cert} className="flex items-start gap-2 rounded-2xl border border-white/5 bg-black/20 px-4 py-3 text-sm text-neutral-300"><Check size={16} className="mt-0.5 shrink-0 text-neutral-500" />{cert}</div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <motion.div {...fadeUp} className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[.28em] text-neutral-500">03 — Projects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Professional work first. Practice projects second.</h2>
              <p className="mt-4 max-w-2xl text-neutral-400">The projects below are separated by context so recruiters can quickly distinguish systems built for real users from projects created to strengthen my frontend and JavaScript skills.</p>
            </div>
            <a href="https://github.com/itsnillouie" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white">Explore GitHub <ExternalLink size={15} /></a>
          </motion.div>

          <div className="mt-14">
            <motion.div {...fadeUp} className="mb-7 flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[.16em] text-neutral-300">
                  <BriefcaseBusiness size={14} /> Real-World Projects
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Enterprise & capstone systems</h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-500 sm:text-right">Projects built around real operational requirements, stakeholder needs, team collaboration, and end-to-end system delivery.</p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {realWorldProjects.map((project, i) => (
                <motion.article key={project.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * .08 }} className="glass group relative overflow-hidden rounded-[28px] p-7 sm:p-8">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-5">
                    <span className="font-mono text-sm text-neutral-500">{project.index}</span>
                    <span className="rounded-full border border-neutral-600 bg-white/[.03] px-3 py-1 text-xs text-neutral-300">{project.tag}</span>
                  </div>
                  <div className="mt-12">
                    <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h4>
                    <p className="mt-2 text-sm text-neutral-500">{project.subtitle}</p>
                    <p className="mt-6 leading-7 text-neutral-400">{project.desc}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map(s => <span key={s} className="rounded-lg border border-neutral-800 bg-black/40 px-3 py-1.5 font-mono text-xs text-neutral-400">{s}</span>)}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2.5 text-sm font-medium transition hover:border-neutral-500 hover:bg-white hover:text-black">{project.button} <Github size={16} /></a>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <motion.div {...fadeUp} className="mb-7 flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3 py-1.5 text-xs font-medium uppercase tracking-[.16em] text-neutral-500">
                  <Code2 size={14} /> Practice & Learning
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-200 sm:text-3xl">Frontend & JavaScript practice projects</h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-500 sm:text-right">Smaller projects used to practice UI implementation, responsive layouts, JavaScript logic, and browser-based interaction.</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {practiceProjects.map((project, i) => (
                <motion.article key={project.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * .05 }} className="group rounded-3xl border border-white/[.07] bg-gradient-to-b from-neutral-950/80 to-black/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-700">
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                    <span className="font-mono text-xs text-neutral-700">{project.index}</span>
                    <span className="rounded-full border border-neutral-800 px-2.5 py-1 text-[11px] text-neutral-500">{project.tag}</span>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold tracking-tight text-neutral-200">{project.title}</h4>
                    <p className="mt-1.5 text-xs text-neutral-600">{project.subtitle}</p>
                    <p className="mt-5 text-sm leading-6 text-neutral-500">{project.desc}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map(s => <span key={s} className="rounded-md border border-neutral-900 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-neutral-500">{s}</span>)}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-3.5 py-2 text-xs font-medium text-neutral-400 transition hover:border-neutral-600 hover:text-white">{project.button} <Github size={14} /></a>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="noise relative border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase tracking-[.28em] text-neutral-500">04 — Architecture Preview</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Two systems. Two very different data paths.</h2>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.div {...fadeUp} className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3"><ServerCog size={20}/><h3 className="font-semibold">PNP PMS — Application Data Flow</h3></div>
              <div className="mt-7 space-y-3">
                {[['Users','Auth + role access',BriefcaseBusiness],['Laravel App','Business logic + dashboards',Layers3],['REST Layer','Data exchange + integrations',Network],['MySQL','Structured project records',Database]].map(([title,sub,Icon], idx) => (
                  <React.Fragment key={title}>
                    <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-black/30 p-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-900"><Icon size={18}/></div>
                      <div><div className="font-medium">{title}</div><div className="text-sm text-neutral-500">{sub}</div></div>
                    </div>
                    {idx < 3 && <div className="mx-auto h-5 w-px bg-neutral-700" />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay:.06 }} className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3"><Cpu size={20}/><h3 className="font-semibold">EcoCyclix — IoT + Web Flow</h3></div>
              <div className="mt-7 space-y-3">
                {[['Biometric Input','Identity verification',BadgeCheck],['IoT Controller','Hardware event orchestration',Cpu],['Application Layer','System status + workflows',Code2],['Dashboard / Data','Monitoring + records',Database]].map(([title,sub,Icon], idx) => (
                  <React.Fragment key={title}>
                    <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-black/30 p-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-900"><Icon size={18}/></div>
                      <div><div className="font-medium">{title}</div><div className="text-sm text-neutral-500">{sub}</div></div>
                    </div>
                    {idx < 3 && <div className="mx-auto h-5 w-px bg-neutral-700" />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-white/5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase tracking-[.28em] text-neutral-500">05 — Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">From academic systems to operational software.</h2>
          </motion.div>
          <motion.div {...fadeUp} className="relative border-l border-neutral-800 pl-7 sm:pl-9">
            {[
              { year:'2026', icon: BriefcaseBusiness, title:'Project Manager & Full Stack Developer', place:'PNP — ITMS', text:'Led a centralized project tracking system through planning, implementation, database integration, testing, documentation, and deployment.' },
              { year:'2026', icon: GraduationCap, title:'BS Information Technology', place:'Don Bosco Technical College', text:'Graduated Batch 2026. Capstone: EcoCyclix — a biometric-integrated automated bicycle carousel parking system.' },
              { year:'Capstone', icon: Cpu, title:'Capstone Leader & Full Stack Developer', place:'EcoCyclix', text:'Directed a multidisciplinary team, coordinated milestones and stakeholders, and implemented IoT/biometric-connected system features.' }
            ].map((item, idx) => (
              <div key={item.title} className={`relative ${idx !== 2 ? 'pb-12' : ''}`}>
                <span className="absolute -left-[35px] top-1 grid h-4 w-4 place-items-center rounded-full border border-neutral-500 bg-black sm:-left-[43px]"><span className="h-1.5 w-1.5 rounded-full bg-white" /></span>
                <div className="text-xs uppercase tracking-[.2em] text-neutral-600">{item.year}</div>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <div className="mt-1 text-sm text-neutral-500">{item.place}</div>
                <p className="mt-4 max-w-2xl leading-7 text-neutral-400">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="noise relative border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <motion.div {...fadeUp} className="mb-8 flex items-center gap-3"><Terminal size={20}/><h2 className="text-2xl font-semibold">CLI Terminal</h2></motion.div>
          <motion.div {...fadeUp} className="overflow-hidden rounded-3xl border border-neutral-800 bg-[#080808] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-950 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" /><span className="h-2.5 w-2.5 rounded-full bg-neutral-700" /><span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="ml-2 font-mono text-xs text-neutral-600">neil@portfolio:~</span>
            </div>
            <div className="min-h-[250px] overflow-x-hidden p-4 font-mono text-xs leading-6 text-neutral-300 sm:min-h-[290px] sm:p-7 sm:text-sm sm:leading-7">
              {terminalHistory.map((row, i) => <pre key={i} className={`${row.type === 'command' ? 'text-white' : 'text-neutral-500'} whitespace-pre-wrap font-mono`}>{row.text}</pre>)}
              <form onSubmit={runCommand} className="mt-2 flex items-center gap-2">
                <span className="text-white">$</span>
                <input value={command} onChange={e=>setCommand(e.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck="false" className="focus-ring w-full bg-transparent text-white outline-none placeholder:text-neutral-700" placeholder="type help" />
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <motion.div {...fadeUp} className="glass grid gap-8 rounded-[32px] p-7 sm:p-10 lg:grid-cols-[1.05fr_.95fr] lg:p-12">
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-neutral-500">06 — Contact</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">Let’s build something useful.</h2>
              <p className="mt-5 max-w-xl leading-7 text-neutral-400">Open to software engineering, full-stack development, cloud engineering, and adjacent technical roles.</p>
              <a href="mailto:neilbudol@gmail.com" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-neutral-200">Send an Email <ArrowRight size={17}/></a>
            </div>
            <div className="space-y-3">
              {[
                { label:'Email', value:'neilbudol@gmail.com', icon:Mail, copy:'neilbudol@gmail.com' },
                { label:'Phone', value:'+63 962 304 0219', icon:Phone, copy:'+639623040219' },
                { label:'Location', value:'Antipolo City, Philippines', icon:MapPin }
              ].map(({label,value,icon:Icon,copy}) => (
                <div key={label} className="flex flex-col items-stretch gap-3 rounded-2xl border border-neutral-800 bg-black/35 p-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                  <div className="flex min-w-0 items-center gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-900"><Icon size={17}/></div><div className="min-w-0"><div className="text-xs text-neutral-600">{label}</div><div className="break-all text-sm text-neutral-300 sm:break-normal sm:text-base">{value}</div></div></div>
                  {copy && <button onClick={()=>copyText(label, copy)} aria-label={`Copy ${label}`} className="focus-ring rounded-lg border border-neutral-800 p-2 text-neutral-500 transition hover:text-white">{copied === label ? <Check size={16}/> : <Copy size={16}/>}</button>}
                </div>
              ))}
            </div>
          </motion.div>

          <footer className="flex flex-col gap-4 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Neil Louie C. Budol. Built with React, Tailwind CSS & Framer Motion.</p>
            <div className="flex gap-4"><a className="hover:text-white" href="https://github.com/itsnillouie" target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-white" href="https://www.linkedin.com/in/budol-neil/" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default App
