import Image from "next/image";
import { aiWork, education, experience, person, profile, projects, skills } from "@/content/portfolio";

const h2 = "mt-16 text-2xl font-bold";
const link = "font-semibold text-primary hover:underline";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{person.name}</h1>
          <p className="mt-2 text-xl text-muted">{profile.title}</p>
          <p className="mt-1 font-semibold text-primary">{profile.tagline}</p>
        </div>
        <Image src={person.photo} alt={person.name} width={144} height={144} priority
          className="h-32 w-32 rounded-full object-cover ring-1 ring-line sm:h-36 sm:w-36" />
      </header>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
      <nav className="mt-6 flex flex-wrap gap-5">
        {person.email && <a className={link} href={`mailto:${person.email}`}>Email</a>}
        {person.linkedinUrl && <a className={link} href={person.linkedinUrl} rel="noopener">LinkedIn</a>}
        {person.githubUrl && <a className={link} href={person.githubUrl} rel="noopener">GitHub</a>}
        <a className={link} href={person.studio.url}>{person.studio.name} (my studio)</a>
      </nav>

      <h2 className={h2}>Experience</h2>
      <ol className="mt-6 space-y-4">
        {experience.map((e) => (
          <li key={e.role} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className={h2}>AI engineering</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {aiWork.map((a) => (
          <article key={a.title} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-semibold">{a.title}</h3>
            <p className="mt-2 text-muted">{a.text}</p>
          </article>
        ))}
      </div>

      <h2 className={h2}>Selected projects</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-primary">{p.kind}</p>
              {p.status && <span className="rounded-full border border-line px-3 py-0.5 text-xs font-bold text-muted">{p.status}</span>}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-muted">{p.text}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => <li key={s} className="rounded-full bg-bg px-3 py-1 text-xs font-medium ring-1 ring-line">{s}</li>)}
            </ul>
            {p.url && <a href={p.url} className={`${link} mt-4 inline-flex`}>Visit {p.name} &rarr;</a>}
          </article>
        ))}
      </div>

      <h2 className={h2}>Skills</h2>
      <dl className="mt-6 grid gap-5 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="font-semibold">{s.group}</dt>
            <dd className="mt-1 text-muted">{s.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>

      <h2 className={h2}>Education</h2>
      <p className="mt-4 text-lg font-semibold">{education.degree}</p>
    </main>
  );
}
