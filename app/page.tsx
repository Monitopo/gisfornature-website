import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
} from "react-icons/fa";

import { SiOrcid, SiGooglescholar } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07110d] text-stone-100">
      {/* Header */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07110d]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xl font-bold tracking-wide">GIS FOR NATURE</p>
            <p className="text-xs uppercase tracking-[0.25em] text-green-300">
              Geospatial science for conservation.
            </p>
          </div>

          <div className="hidden gap-8 text-sm uppercase tracking-wider text-stone-300 md:flex">
            <a href="#work">Work</a>
            <a href="#maps">Maps</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-5">
          <a
            href="https://orcid.org/0000-0003-4451-847X"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-green-200 transition hover:text-green-400"
            aria-label="ORCID"
          >
            <SiOrcid />
          </a>

          <a
            href="https://www.linkedin.com/in/monika-t-hoffmann-209219216/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-green-200 transition hover:text-green-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.researchgate.net/profile/Monika-Hoffmann-5?ev=hdr_xprf"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-green-200 transition hover:text-green-400"
            aria-label="ResearchGate"
          >
            <FaResearchgate />
          </a>
          <a
            href="mailto:roadlessinitiative@gmail.com"
            className="rounded-full border border-green-300 px-5 py-2 text-sm uppercase tracking-wider text-green-200"
          >
            Let&apos;s connect
          </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(92,140,66,0.35),transparent_35%),linear-gradient(to_bottom,rgba(7,17,13,0.25),#07110d)]" />
        <div className="absolute inset-0 opacity-35 bg-green-950 bg-cover bg-center" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-green-300">
            Geospatial science for conservation
          </p>

          <h1 className="max-w-4xl text-6xl font-bold leading-none tracking-tight md:text-8xl">
            Mapping nature for a more resilient future.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-300">
            GIS for Nature uses geospatial analysis, remote sensing, and
            interactive web maps to support nature conservation, climate resilience,
            forest integrity, and biodiversity protection.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-green-400 px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#07110d]"
            >
              Explore projects →
            </a>
            <a
              href="#maps"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white"
            >
              View maps
            </a>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section id="work" className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-300">
              What I do
            </p>
            <h2 className="mt-4 text-4xl font-bold">Science. Maps. Impact.</h2>
          </div>

          {[
            ["GIS analysis", "Creating spatial datasets and models for conservation decision-making."],
            ["Roadless areas", "Mapping intact landscapes and assessing road impacts on ecosystems."],
            ["Climate resilience", "Studying how landscapes buffer heat, floods, and disturbance."],
            ["Biodiversity", "Linking spatial data with habitat, species, and ecosystem integrity."],
          ].map(([title, text]) => (
            <div key={title} className="border-l border-white/10 pl-6">
              <h3 className="text-lg font-semibold text-green-200">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map section */}
      <section id="maps" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.6fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-300">
              Explore
            </p>
            <h2 className="mt-4 text-5xl font-bold">Interactive conservation maps.</h2>
            <p className="mt-6 text-stone-300">
              A future space for web maps on roadless areas, forest integrity,
              climate resilience, and biodiversity.
            </p>
            <button className="mt-8 rounded-full border border-green-300 px-6 py-3 text-sm uppercase tracking-wider text-green-200">
              Launch map soon →
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <div className="flex h-[420px] items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.35),transparent_35%),linear-gradient(135deg,#13251b,#020604)]">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-green-300">
                  Map preview
                </p>
                <p className="mt-4 text-3xl font-bold">Roadless Areas Explorer</p>
                <p className="mt-3 text-stone-400">
                  MapLibre web map coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-green-300">
                Featured projects
              </p>
              <h2 className="mt-4 text-5xl font-bold">Selected work</h2>
            </div>
            <a className="hidden text-sm uppercase tracking-wider text-green-200 md:block">
              View all projects →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              [
                "Roadless Initiative",
                "Global mapping and protection of the world’s remaining roadless areas.",
                "https://roadless.online",
                "Visit roadless.online →",
              ],
              [
                "Climate Adaptation",
                "GIS analyses supporting ecosystem-based climate adaptation for Barnim and Bernau.",
                "https://www.natuerlich-barnim.de/bernau-pro-klima.html",
                "View climate adaptation projects →",
              ],
              [
                "Forest Integrity",
                "Remote sensing and geospatial research on forest structure, resilience and ecological integrity.",
                "#",
                "Coming soon →",
              ],
              [
                "Interactive Conservation Mapping",
                "Modern web maps and geospatial tools that make environmental data accessible for conservation decisions.",
                "#",
                "Coming soon →",
              ],
              /*
              [
                "WildINTEL",
                "European biodiversity monitoring integrating camera traps, AI and citizen science.",
                "https://wildintel.eu",
                "Visit wildintel.eu →",
              ],*/
            ].map(([title, text, link, button]) => (
              <article
                key={title}
                className="min-h-64 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-green-300">
                  Project
                </p>
                <h3 className="mt-20 text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-400">{text}</p>
                <a
                  href={link}
                  target={link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm text-green-200 hover:text-green-400"
                >
                  {button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <img
                src="/images/monika-profile.jpg"
                alt="Dr. Monika T. Hoffmann"
                className="h-72 w-64 mx-auto rounded-2xl object-cover object-top"
              />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-green-300">
              Why GIS for Nature?
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              From geospatial science to conservation impact.
            </h2>

            <p className="mt-8 text-xl leading-8 text-stone-300">
              I am Dr. Monika T. Hoffmann, a geospatial scientist specialising in GIS, remote
              sensing and conservation planning. I created <span className="italic">GIS for Nature</span>{" "}
              to bridge scientific research, geospatial technologies and practical
              conservation. Through spatial analysis, remote sensing and interactive web
              mapping, I transform complex environmental data into information, insights and tools that
              support biodiversity conservation, forest integrity, climate resilience and
              evidence-based decision-making.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://orcid.org/0000-0003-4451-847X"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-green-300 px-6 py-3 text-sm uppercase tracking-wider text-green-200 hover:bg-green-300 hover:text-[#07110d]"
              >
                ORCID
              </a>

              <a
                href="https://www.linkedin.com/in/monika-t-hoffmann-209219216/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-green-300 px-6 py-3 text-sm uppercase tracking-wider text-green-200 hover:bg-green-300 hover:text-[#07110d]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-5">
          {[
            ["Global → Regional", "Conservation Mapping"],
            ["15+", "Research Projects"],
            ["15+", "Scientific Publications"],
            ["10+", "Years of Experience"],
            ["Open", "International Collaborations"],
          ].map(([number, label]) => (
            <div key={label}>
              <p className="text-4xl font-bold text-green-300">{number}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-stone-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <h2 className="text-5xl font-bold">
            Let&apos;s work together for nature, science, and resilient landscapes.
          </h2>

          <div>
            <p className="text-xl leading-8 text-stone-300">
              Open to collaborations, research projects, conservation mapping,
              web maps, GIS consulting, and impact-driven environmental work.
            </p>

            <a
              href="mailto:roadlessinitiative@gmail.com"
              className="mt-8 inline-block rounded-full bg-green-400 px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#07110d]"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-wide text-stone-200">
              GIS FOR NATURE
            </p>
            <p className="mt-1">
              Independent geospatial science for conservation.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="/impressum" className="hover:text-green-300">
              Impressum
            </a>
            <a href="/privacy" className="hover:text-green-300">
              Privacy Policy
            </a>
            <a
              href="https://orcid.org/0000-0003-4451-847X"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-300"
            >
              ORCID
            </a>
            <a
              href="https://www.linkedin.com/in/monika-t-hoffmann-209219216/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-300"
            >
              LinkedIn
            </a>
          </div>

          <p>
            © 2026 Dr. Monika T. Hoffmann
          </p>
        </div>
      </footer>
    </main>
  );
}
