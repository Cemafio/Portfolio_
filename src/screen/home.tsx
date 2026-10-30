import type { ReactNode } from "react";
import ContainProfil from "../component/contain_photo";

/* -------------------------------------------------------------------------- */
/*                                  DONNÉES                                   */
/* -------------------------------------------------------------------------- */

const CONTACT = {
  email: "cesarmarcellin@gmail.com",
  phone: "038 22 798 35",
  secondPhone: "032 94 573 36",
  github: "https://github.com/Cemafio",
  linkedin: "https://www.linkedin.com/in/cesar-marcellin-957b29275/",
  // Vérifie que ce fichier existe bien dans le dossier public.
  cv: "/Cesair Marcellin stage cv.pdf",
  cvDownloadName: "Cesaire-Marcellin-CV.pdf",
};

const MAIL_LINK = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Candidature – Stage de fin d'études"
)}`;

const NAV_ITEMS = [
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    number: "01",
    title: "Mobile & Frontend",
    description: "Des interfaces modernes, fluides et adaptées à chaque écran.",
    skills: ["Flutter", "Next.js", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend & API",
    description: "Des applications structurées, des API et une logique métier fiable.",
    skills: ["NestJS", "ASP.NET Web API", "C#", "Symfony", "PHP"],
  },
  {
    number: "03",
    title: "Intelligence artificielle",
    description: "Exploration des modèles de langage et du traitement de la voix.",
    skills: ["Python", "SpeechT5", "Whisper", "RAG", "LLM"],
  },
  {
    number: "04",
    title: "Données & outils",
    description: "Conception, gestion et intégration des données.",
    skills: ["PostgreSQL", "SQL Server", "Isar", "Prisma", "GitHub", "Figma", "Neon"],
  },
];

const projects = [
  {
    index: "01",
    name: "Salma",
    category: "Santé · Application mobile & web",
    description:
      "Une solution de prise de rendez-vous médicaux qui facilite la mise en relation entre patients et professionnels de santé. Recherche de spécialistes, géolocalisation et gestion des rendez-vous.",
    stack: ["Flutter", "Symfony", "PostgreSQL", "Google Maps API"],
    accent: "from-orange-500/20 via-orange-500/5 to-transparent",
    mark: "S",
    github: "",
    demo: "",
  },
  {
    index: "02",
    name: "TTS-STT Malagasy",
    category: "Intelligence artificielle · Traitement vocal",
    description:
      "Un projet d'IA consacré à la reconnaissance et à la génération de phrases en malagasy. Préparation des données, entraînement de SpeechT5 et intégration de Whisper dans un prototype de démonstration.",
    stack: ["React", "Python", "SpeechT5", "Whisper", "Google Colab"],
    accent: "from-violet-500/20 via-violet-500/5 to-transparent",
    mark: "AI",
    github: "",
    demo: "",
  },
  {
    index: "03",
    name: "Nokou",
    category: "Productivité · Application mobile",
    description:
      "Une application de prise de notes et de gestion des tâches assistée par l'IA, pensée comme un espace personnel pour capturer, organiser et retrouver ses idées.",
    stack: ["Flutter", "Isar", "LLM"],
    accent: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    mark: "N",
    github: "",
    demo: "",
  },
  {
    index: "04",
    name: "ORIENT'IA",
    category: "Éducation · Hackathon",
    description:
      "Un assistant d'orientation académique propulsé par l'IA, conçu en 48 heures lors d'un hackathon à l'ISPM. Il combine machine learning, RAG et modèle de langage pour accompagner les étudiants dans leurs choix.",
    stack: ["React", "Python", "RAG", "LLM", "Google Colab"],
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    mark: "O",
    github: "",
    demo: "",
  },
];

const experience = [
  {
    period: "Stage · 3 mois",
    company: "Teko Consulting",
    role: "Développeur web",
    description:
      "Participation au développement et à l'amélioration d'applications web avec PHP et Symfony.",
    missions: [
      {
        name: "ODA",
        detail:
          "Application de billetterie d'évènements avec paiement par carte bancaire et PayPal, ainsi que des rappels de notification avant l'évènement.",
      },
      {
        name: "TekoSchool",
        detail: "Application de gestion d'école.",
      },
    ],
    stack: ["PHP", "JavaScript", "Symfony", "GitHub", "FileZilla"],
  },
];

/* -------------------------------------------------------------------------- */
/*                            PETITS COMPOSANTS UI                            */
/* -------------------------------------------------------------------------- */

function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v3h16v-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-orange-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
        <span className="text-orange-400">.</span>
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-zinc-300 transition-colors duration-200 hover:border-orange-400/40 hover:text-orange-300">
      {children}
    </span>
  );
}

function SocialLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-orange-400/10 hover:text-orange-300"
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#090909] text-zinc-200 selection:bg-orange-400 selection:text-black">
      {/* Fond décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-orange-500/[0.07] blur-[130px]" />
        <div className="absolute -right-52 top-[850px] h-[500px] w-[500px] rounded-full bg-orange-500/[0.04] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090909]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#accueil" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-400 font-display text-lg font-bold text-black transition-transform group-hover:rotate-6">
              C.
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
              Césaire Marcellin
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-zinc-400 transition-colors hover:text-orange-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={MAIL_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 px-4 py-2 text-xs font-semibold text-orange-300 transition-all hover:bg-orange-400 hover:text-black"
          >
            Parlons ensemble <ArrowUpRight />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="accueil"
        className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl scroll-mt-24 items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-10 lg:px-12 lg:py-24"
      >
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
              Disponible
            </span>
          </div>

          <p className="mb-4 font-mono text-sm text-zinc-400">
            Bonjour, je suis
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            Césaire
            <br />
            <span className="text-orange-400">Marcellin.</span>
          </h1>

          <h2 className="mt-7 text-lg font-medium text-zinc-200 sm:text-xl">
            Développeur Full-Stack <span className="text-orange-400">&</span>{" "}
            Intelligence Artificielle
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
            Je conçois des applications mobiles, des plateformes web et des
            solutions d'intelligence artificielle. J'aime transformer des idées
            en produits utiles, de la conception à la mise en production.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-orange-400 px-6 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-1 hover:bg-orange-300"
            >
              Découvrir mes projets <ArrowUpRight />
            </a>
            <a
              href={CONTACT.cv}
              download={CONTACT.cvDownloadName}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:border-orange-400/50 hover:text-orange-300"
            >
              Télécharger mon CV <DownloadIcon />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Retrouvez-moi
            </span>
            <SocialLink label="GitHub" href={CONTACT.github}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.93 10.93 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
              </svg>
            </SocialLink>
            <SocialLink label="LinkedIn" href={CONTACT.linkedin}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.25h4V23h-4V8.25Zm7.5 0h3.83v2.02h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4V8.25Z" />
              </svg>
            </SocialLink>
            <SocialLink label="Email" href={MAIL_LINK}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 6 10 7 10-7" />
              </svg>
            </SocialLink>
          </div>
        </div>

        {/* Portrait : conserve ton composant existant */}
        <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] border border-orange-400/15 rotate-3" />
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-orange-400/20 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#141414] p-3 shadow-2xl shadow-black/50">
            <div className="absolute right-7 top-7 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-orange-300 backdrop-blur">
              Software engineer
            </div>
            <div className="flex min-h-[350px] items-center justify-center overflow-hidden rounded-[1.2rem] bg-[#1b1b1b] sm:min-h-[440px]">
              <ContainProfil />
            </div>
            <div className="flex items-center justify-between px-3 pb-2 pt-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Césaire Marcellin
                </p>
                <p className="mt-1 font-mono text-[10px] text-zinc-500">
                  ANTANANARIVO, MADAGASCAR
                </p>
              </div>
              <span className="font-mono text-xs text-orange-400">01 / 05</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 shadow-xl sm:block">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Web · Mobile · IA
            </p>
          </div>
        </div>

        <a
          href="#apropos"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600 transition-colors hover:text-orange-300 lg:flex"
        >
          Défiler pour explorer <span className="text-orange-400">↓</span>
        </a>
      </section>

      {/* Petite bande de domaines */}
      <div className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:px-8 md:grid-cols-4 lg:px-12">
          {["Développement mobile", "Applications web", "API & Backend", "IA & Innovation"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="font-mono text-xs text-orange-400">
                  0{index + 1}
                </span>
                <span className="text-xs font-medium text-zinc-400 sm:text-sm">
                  {item}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* À PROPOS */}
      <section
        id="apropos"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <SectionHeading
          eyebrow="Un peu de contexte"
          title="À propos de moi"
          description="Un développeur curieux, orienté produit et toujours motivé par les défis techniques."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
          <div className="space-y-5 text-sm leading-8 text-zinc-400 sm:text-base">
            <p>
              Actuellement en <strong className="font-semibold text-white">Master 2 ESIIA</strong>{" "}
              (Électronique, Systèmes Informatiques et Intelligence Artificielle)
              à l'Institut Supérieur Polytechnique de Madagascar (ISPM), je
              m'intéresse particulièrement au développement d'applications
              complètes, de la conception technique à l'expérience utilisateur.
            </p>
            <p>
              J'ai acquis une première expérience professionnelle lors d'un
              stage de trois mois chez <strong className="font-semibold text-white">Teko Consulting</strong>,
              où j'ai travaillé sur des applications web avec PHP et Symfony.
            </p>
            <p>
              En parallèle de mes études, je développe mes propres projets
              full-stack, mobiles et web, et j'explore l'intégration de
              l'intelligence artificielle dans des produits concrets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "M2", label: "Parcours académique" },
              { value: "3 mois", label: "Expérience en entreprise" },
              { value: "4+", label: "Projets personnels" },
              { value: "Full-Stack", label: "Orientation technique" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all hover:border-orange-400/30 hover:bg-orange-400/[0.035] sm:p-6"
              >
                <p className="font-display text-2xl font-semibold tracking-tight text-orange-400 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs leading-5 text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section
        id="competences"
        className="scroll-mt-24 border-y border-white/[0.06] bg-[#0d0d0d] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Boîte à outils"
            title="Mes compétences"
            description="Les technologies et outils que j'utilise pour concevoir, développer et faire évoluer des applications."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.number}
                className="group rounded-2xl border border-white/[0.08] bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 sm:p-8"
              >
                <div className="mb-7 flex items-start justify-between">
                  <span className="font-mono text-xs text-orange-400">
                    / {group.number}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-orange-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <TechTag key={skill}>{skill}</TechTag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPÉRIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <SectionHeading
          eyebrow="Parcours professionnel"
          title="Expérience"
          description="Une première expérience en entreprise et des projets réalisés dans un contexte professionnel."
        />

        <div className="relative ml-2 border-l border-white/10 pl-8 sm:ml-4 sm:pl-12">
          {experience.map((item) => (
            <article key={item.company} className="relative max-w-4xl pb-4">
              <span className="absolute -left-[2.62rem] top-1 h-3 w-3 rounded-full border-2 border-orange-400 bg-[#090909] shadow-[0_0_18px_rgba(251,146,60,.5)] sm:-left-[3.12rem]" />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-orange-400">
                {item.period}
              </p>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {item.company}
                </h3>
                <span className="text-sm text-zinc-500">{item.role}</span>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {item.missions.map((mission) => (
                  <div
                    key={mission.name}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5"
                  >
                    <p className="font-semibold text-white">{mission.name}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {mission.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJETS */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/[0.06] bg-[#0d0d0d] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Sélection de réalisations"
              title="Projets choisis"
              description="Quelques projets qui illustrent mon intérêt pour le développement logiciel et l'intelligence artificielle."
            />
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
            >
              Voir mon GitHub <ArrowUpRight />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <span className="font-display text-8xl font-bold tracking-[-0.08em] text-white/[0.12] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.2]">
                    {project.mark}
                  </span>
                  <span className="absolute left-5 top-5 font-mono text-xs text-white/50">
                    PROJECT / {project.index}
                  </span>
                  <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[10px] text-white/70 backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <span className="text-orange-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                  {(project.github || project.demo) && (
                    <div className="mt-6 flex flex-wrap gap-5 border-t border-white/[0.07] pt-5 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-orange-300 hover:text-orange-200"
                        >
                          Code source ↗
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-orange-300 hover:text-orange-200"
                        >
                          Voir la démo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/20 bg-[#11100e] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full bg-orange-500/[0.07] blur-[100px]"
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange-400">
              Et maintenant ?
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Construisons quelque chose
              <span className="text-orange-400"> ensemble.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Je recherche un stage de fin d'études de 4 à 6 mois en
              développement mobile, full-stack ou intelligence artificielle.
              Je suis également ouvert aux collaborations et aux nouveaux
              défis techniques.
            </p>
            <a
              href={MAIL_LINK}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-orange-400 px-7 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-orange-300"
            >
              Me contacter <ArrowUpRight />
            </a>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-zinc-400 sm:flex-row sm:gap-8">
              <a
                href={MAIL_LINK}
                className="transition-colors hover:text-orange-300"
              >
                {CONTACT.email}
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
              <a
                href={`tel:${CONTACT.phone.replaceAll(" ", "")}`}
                className="transition-colors hover:text-orange-300"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`tel:${CONTACT.secondPhone.replaceAll(" ", "")}`}
                className="transition-colors hover:text-orange-300"
              >
                {CONTACT.secondPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#accueil" className="font-display text-sm font-semibold text-white">
            Césaire Marcellin<span className="text-orange-400">.</span>
          </a>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} · Conçu et développé avec passion à
            Antananarivo, Madagascar.
          </p>
          <a
            href="#accueil"
            className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors hover:text-orange-300"
          >
            Retour en haut ↑
          </a>
        </div>
      </footer>

      {/* Styles locaux pour la police de titres si elle n'est pas déjà chargée */}
      <style>{`
        .font-display {
          font-family: "Space Grotesk", "Inter", ui-sans-serif, system-ui,
            sans-serif;
        }
      `}</style>
    </main>
  );
}
