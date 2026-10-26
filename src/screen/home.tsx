import ContainProfil from "../component/contain_photo"
import Header from "../component/header"

/* ──────────────────────────────────────────────────────────────
   Infos de contact : une seule source de vérité pour toute la page
   ────────────────────────────────────────────────────────────── */
const CONTACT = {
  email: "cesarmarcellin@gmail.com",
  phone: "038 22 798 35 / 032 94 573 36",
  github: "https://github.com/Cemafio",
  linkedin: "https://www.linkedin.com/in/cesar-marcellin-957b29275/",
  // Chemin du fichier dans /public (idéal : le renommer sans espaces, ex. "/Cesaire-Marcellin-CV.pdf")
  cv: "/Cesair Marcellin stage cv.pdf",
  cvDownloadName: "Cesaire-Marcellin-CV.pdf",
}

const MAIL_LINK = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Candidature – Stage de fin d'études"
)}`

/* ────────────────────────────── Données ────────────────────────────── */
const skills = {
  "Mobile & Frontend": ["Flutter", "NextJS"],
  "Backend": ["NestJS", "ASP.NET Web API", "C#", "Symfony", "PHP"],
  "IA & Data": ["Python", "SpeechT5", "Whisper", "RAG", "LLM"],
  "Bases de données": ["SQL Server", "PostgreSQL", "Isar"],
  "Outils": ["GitHub", "Figma", "FileZilla", "Neon", "Google Colab", "Prisma"],
}

// Ajoute `github` et/ou `demo` à un projet pour afficher les liens sur sa carte.
const projects = [
  {
    name: "Salma",
    stack: ["Flutter", "Symfony", "PostgreSQL"],
    description:
      "Application mobile et web de prise de rendez-vous médicaux avec géolocalisation via Google Maps API. Elle facilite la communication entre patients et professionnels de santé.",
    // github: "https://github.com/Cemafio/...",
    // demo: "https://...",
  },
  {
    name: "TTS-STT Malagasy",
    stack: ["React", "Python", "SpeechT5", "Whisper", "Google Colab"],
    description:
      "Modèle d'IA capable de reconnaître et de générer des phrases en malagasy. Préparation et nettoyage des données, entraînement de SpeechT5 avec Python, intégration de Whisper et prototype de démonstration.",
  },
  {
    name: "Nokou",
    stack: ["Flutter", "Isar", "LLM"],
    description:
      "Logiciel et application mobile de prise de notes et de tâches assistée par l'IA. Un petit assistant personnel pour organiser vos idées, vos notes et vos tâches.",
  },
  {
    name: "ORIENT'IA",
    stack: ["React", "RAG", "LLM", "Python", "Google Colab"],
    description:
      "Assistant d'orientation académique propulsé par l'IA, conçu en 48 h lors d'un hackathon à l'ISPM. Il combine machine learning, RAG et modèle de langage pour conseiller les étudiants sur le choix des filières et des universités.",
  },
]

const socials = [
  {
    label: "GitHub",
    href: CONTACT.github,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.93 10.93 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.25h4V23h-4V8.25Zm7.5 0h3.83v2.02h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4V8.25Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: MAIL_LINK,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7 10-7" />
      </svg>
    ),
  },
]

/* ─────────────── Styles réutilisés (classes complètes pour Tailwind) ─────────────── */
const display = "font-['Space_Grotesk',sans-serif]"
const mono = "font-['JetBrains_Mono',monospace]"

/* ───────────────────────── Petits composants ───────────────────────── */
function Section({ id, children, className = "" }: any) {
  return (
    <section id={id} className={`max-w-3xl mx-auto px-6 py-14 scroll-mt-24 ${className}`}>
      {children}
    </section>
  )
}

function SectionTitle({ children }:any) {
  return (
    <h3 className={`text-2xl font-bold text-white mb-6 flex items-center gap-3 ${display}`}>
      <span className="h-6 w-1 rounded-full bg-teal-400" aria-hidden="true" />
      {children}
    </h3>
  )
}

function Tag({ children }:any) {
  return (
    <span className={`px-3 py-1 bg-teal-950/50 text-teal-300 border border-teal-800/60 rounded-full text-sm ${mono}`}>
      {children}
    </span>
  )
}

function ProjectCard({ project }:any) {
  const { name, stack, description, github, demo } = project
  return (
    <article className="border border-slate-800 rounded-lg p-6 bg-white/[0.02] transition-all duration-200 hover:border-teal-400 hover:-translate-y-0.5">
      <h4 className={`text-xl font-semibold text-white ${display}`}>{name}</h4>
      <p className="text-slate-400 mt-2 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((tech:any) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {(github || demo) && (
        <div className="flex gap-5 mt-5 text-sm font-medium">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 hover:underline underline-offset-4">
              Code source ↗
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 hover:underline underline-offset-4">
              Voir la démo ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}

/* ─────────────────────────────── Page ─────────────────────────────── */
function HomePage() {
  return (
    <div
      className="w-full min-h-screen text-slate-200"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        backgroundColor: "#0B0E14",
      }}
    >
      <Header />

      <main>
        {/* HERO */}
        <section
          id="accueil"
          className="max-w-3xl mx-auto px-6 pt-32 md:pt-44 pb-16 flex flex-col items-center text-center scroll-mt-24"
        >
          <ContainProfil />

          {/* Statut de disponibilité */}
          <span
            className={`mt-8 inline-flex items-center gap-2 rounded-full border border-teal-800/60 bg-teal-950/40 px-4 py-1.5 text-sm text-teal-300 ${mono}`}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            Disponible
          </span>

          <h2 className={`text-lg text-teal-400 mt-6 ${mono}`}>Bonjour, je suis</h2>
          <h1 className={`text-4xl md:text-6xl font-bold mt-1 leading-tight text-white ${display}`}>
            FIONONANTSOA Césaire Marcellin
          </h1>
          <h2 className={`text-2xl text-slate-400 mt-3 ${display}`}>Développeur Full-Stack &amp; IA</h2>

          <p className="text-slate-400 mt-5 max-w-xl leading-relaxed">
            Je conçois des applications mobiles, des sites web et des solutions d'intelligence artificielle, du
            prototype jusqu'au produit fini.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-teal-400 text-slate-950 rounded-md font-medium hover:bg-teal-300 transition-colors"
            >
              Voir mes projets
            </a>
            <a
              href={CONTACT.cv}
              download={CONTACT.cvDownloadName}
              className="px-5 py-2.5 border border-slate-700 rounded-md font-medium text-slate-200 hover:border-teal-400 hover:text-teal-400 transition-colors"
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="flex gap-5 mt-8 justify-center">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="text-slate-500 hover:text-teal-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </section>

        {/* À PROPOS */}
        <Section id="apropos">
          <SectionTitle>À propos</SectionTitle>
          <div className="text-slate-400 leading-relaxed space-y-4">
            <p>
              Actuellement en Master 2 ESIIA (Électronique, Systèmes Informatiques et Intelligence Artificielle) à
              l'Institut Supérieur Polytechnique de Madagascar (ISPM), je suis passionné par le développement
              d'applications complètes, du prototype jusqu'à l'interface finale.
            </p>
            <p>
              J'ai développé des applications web en Symfony et PHP lors d'un stage de 3 mois chez Teko Consulting.
              En parallèle de mon parcours universitaire, je continue à construire des projets full-stack, web comme
              mobile, ainsi que des modèles d'IA, toujours avec l'envie d'aller du concept jusqu'au produit fini.
            </p>
          </div>
        </Section>

        {/* COMPÉTENCES */}
        <Section id="competences">
          <SectionTitle>Compétences</SectionTitle>
          <div className="space-y-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-sm text-slate-500 mb-2">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPÉRIENCE */}
        <Section id="experience">
          <SectionTitle>Expérience</SectionTitle>
          <article className="border border-slate-800 rounded-lg p-6 bg-white/[0.02]">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h4 className={`text-xl font-semibold text-white ${display}`}>Teko Consulting</h4>
              <span className={`text-sm text-teal-400 ${mono}`}>Stage · 3 mois</span>
            </div>
            <p className="text-slate-300 mt-1">Développeur web</p>

            <ul className="text-slate-400 mt-4 space-y-2 leading-relaxed list-disc pl-5 marker:text-teal-400">
              <li>
                <strong className="text-slate-300">ODA</strong> : billetterie d'évènements avec paiement par carte
                bancaire et PayPal, et rappels de notification avant l'évènement.
              </li>
              <li>
                <strong className="text-slate-300">TekoSchool</strong> : application de gestion d'école.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-5">
              {["PHP", "JavaScript", "Symfony", "GitHub", "FileZilla"].map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </article>
        </Section>

        {/* PROJETS */}
        <Section id="projects">
          <SectionTitle>Projets</SectionTitle>
          <div className="space-y-5">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="text-center">
          <h3 className={`text-2xl font-bold text-white ${display}`}>Un stage, un projet en tête ?</h3>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Je recherche un stage de fin d'études (4 à 6 mois) en développement mobile / full-stack et IA. Ouvert aux
            opportunités et collaborations.
          </p>
          <a
            href={MAIL_LINK}
            className="inline-block mt-6 px-6 py-3 bg-teal-400 text-slate-950 rounded-md font-medium hover:bg-teal-300 transition-colors"
          >
            Me contacter
          </a>
          <p className={`text-slate-500 text-sm mt-4 ${mono}`}>{CONTACT.email}</p>
          <p className={`text-slate-500 text-sm mt-1 ${mono}`}>{CONTACT.phone}</p>
        </Section>
      </main>

      <footer className="border-t border-slate-800/70 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} FIONONANTSOA Césaire Marcellin · Antananarivo, Madagascar
      </footer>
    </div>
  )
}

export default HomePage