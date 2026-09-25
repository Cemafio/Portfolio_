import ContainProfil from "../component/contain_photo"
import Header from "../component/header"

const skills = {
  "Développement": ["C#", "Flutter", "React", "ASP.NET Web API", "NestJS", "Python"],
  "Bases de données": ["SQL Server", "PostgreSQL"],
  "Outils": ["GitHub", "Figma", "FileZilla", "Neon"],
}

const projects = [
  {
    name: "Salma",
    stack: "Flutter, Symfony, PostgreSQL",
    description:
      "Application mobile et web de prise de rendez-vous médicaux. Interface Flutter, API REST avec Symfony, géolocalisation via Google Maps API, authentification JWT.",
  },
  {
    name: "TTS-STT Malagasy",
    stack: "React, Python, SpeechT5, Google Coolab",
    description:
      "Modèle d'IA capable de reconnaître et générer des phrases en malagasy. Préparation des données, entraînement avec Python et SpeechT5, prototype de démonstration.",
  },
  {
    name: "GESTY",
    stack: "Flutter, NestJS, PostgreSQL, Neon",
    description:
      "Application de gestion financière personnelle. Développement mobile Flutter, API REST avec NestJS, design sur Figma, authentification JWT.",
  },
    {
    name: "Nokou",
    stack: "Flutter, Isar",
    description:
      "Application mobile de gestion de tâches et de note qui marche en local. Développement avec Flutter, base de données Isar.",
  },
  {
    name: "ORIENT'IA",
    stack: "React, RAG, LLM, Python, Google Coolab",
    description:
      "Assistant d'orientation académique propulsé par l'IA, conçu pour un hackathon à l'ISPM. Combine machine learning classique, RAG et un agent conversationnel LLM.",
  },
]

function HomePage() {
  return (
    <div
      className="w-full text-slate-200"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        backgroundColor: "#0B0E14",
      }}
    >
      <Header />

      {/* HERO */}
    <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 pt-50 flex flex-col items-center text-center" id="accueil">
        <ContainProfil />

        <h2 className="text-lg text-teal-400 mt-8 font-['JetBrains_Mono',monospace]">
            Hi, I'm
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mt-1 leading-tight font-['Space_Grotesk',sans-serif] text-white">
            FIONONANTSOA Césaire Marcellin
        </h1>
        <h2 className="text-2xl text-slate-400 mt-3 font-['Space_Grotesk',sans-serif]">
            Développeur Mobile & IA.
        </h2>

        <p className="text-slate-400 mt-5 max-w-md leading-relaxed">
            En Master 2 Électronique, Systèmes Informatiques et Intelligence
            Artificielle à l'ISPM. J'ai développé des applications web et
            mobiles complètes en stage et en projets — de l'interface Flutter
            aux API REST, jusqu'à des modèles d'IA. Basé à Antananarivo,
            Madagascar.
        </p>

        <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <a
            href="#projects"
            className="px-5 py-2.5 bg-teal-400 text-slate-950 rounded-md font-medium hover:bg-teal-300 transition-colors"
            >
            Voir mes projets
            </a>
            <a
            href="/Cesair Marcellin stage cv.pdf"
            download="Cesair Marcellin stage cv.pdf"
            className="px-5 py-2.5 border border-slate-700 rounded-md font-medium text-slate-200 hover:border-teal-400 hover:text-teal-400 transition-colors"
            >
            Télécharger mon CV
            </a>
        </div>

        <div className="flex gap-4 mt-8 justify-center">
            <a href="https://github.com/Cemafio?tab=overview&from=2025-12-01&to=2025-12-31" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-teal-400">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.93 10.93 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/cesar-marcellin-957b29275/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-teal-400">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.25h4V23h-4V8.25Zm7.5 0h3.83v2.02h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4V8.25Z"/></svg>
            </a>
            <a href="mailto:cesarmarcellin@mail.com" aria-label="Email" className="text-slate-500 hover:text-teal-400">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>
            </a>
        </div>
        </section>
        {/* A PROPOS */}
        <section className="max-w-3xl mx-auto px-6 py-16">
            <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white">
            À propos
            </h3>
            <p className="text-slate-400 mt-4 leading-relaxed">
            Actuellement en Master 2 ESIIA (Électronique, Systèmes Informatiques
            et Intelligence Artificielle) à l'Institut Supérieur Polytechnique
            de Madagascar (ISPM), 2025-2026. Après un stage de 3 mois chez Teko
            Consulting où j'ai développé des applications web en Symfony et PHP,
            j'ai continué à construire des projets full-stack et des modèles
            d'IA, du prototype jusqu'à l'interface finale.
            </p>
      </section>

      {/* COMPETENCES */}
      <section className="max-w-3xl mx-auto px-6 py-4">
        <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white mb-6">
          Compétences
        </h3>
        <div className="space-y-5">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-sm text-slate-500 mb-2">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-teal-950/50 text-teal-300 border border-teal-800/60 rounded-full text-sm font-['JetBrains_Mono',monospace]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-3xl mx-auto px-6 py-16" id="experience">
        <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white">
          Expérience
        </h3>
        <div className="mt-6 border border-slate-800 rounded-lg p-6 bg-white/[0.02]">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h4 className="text-xl font-semibold font-['Space_Grotesk',sans-serif] text-white">
              Teko Consulting
            </h4>
            <span className="text-sm text-teal-400 font-['JetBrains_Mono',monospace]">
              Stage — 3 mois
            </span>
          </div>
          <p className="text-slate-400 mt-2 leading-relaxed">
            Développement web sur deux projets : <strong className="text-slate-300">ODA</strong>,
            une billetterie d'évènements avec paiement par carte et PayPal et
            rappels de notification, et <strong className="text-slate-300">TekoSchool</strong>,
            une application de gestion d'école. Stack : PHP, JavaScript,
            Symfony, GitHub.
          </p>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="max-w-3xl mx-auto px-6 py-4">
        <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white mb-6">
          Projets
        </h3>
        <div className="space-y-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-slate-800 rounded-lg p-6 hover:border-teal-400 transition-colors bg-white/[0.02]"
            >
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h4 className="text-xl font-semibold font-['Space_Grotesk',sans-serif] text-white">
                  {project.name}
                </h4>
                <span className="text-sm text-teal-400 font-['JetBrains_Mono',monospace]">
                  {project.stack}
                </span>
              </div>
              <p className="text-slate-400 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white">
          Un projet en tête ?
        </h3>

        <p className="text-slate-400 mt-3">
          Ouvert aux opportunités et collaborations.
        </p>
        <a
          href="mailto:fiononantsoacesarmarcellin@mail.com"
          className="inline-block mt-5 px-6 py-3 bg-teal-400 text-slate-950 rounded-md font-medium hover:bg-teal-300 transition-colors"
        >
          Me contacter
        </a>
        <p className="text-slate-500 text-sm mt-3 font-['JetBrains_Mono',monospace]">
          038 22 798 35 / 032 94 57336
        </p>
      </section>
    </div>
  )
}

export default HomePage