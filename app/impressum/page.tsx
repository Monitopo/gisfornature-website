export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#07110d] px-6 py-24 text-stone-100">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-300">← Back</a>

        <h1 className="mt-10 text-5xl font-bold">Impressum</h1>

        <section className="mt-10 space-y-6 text-stone-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Angaben gemäß § 5 DDG</h2>
            <p className="mt-4">
              Dr. Monika T. Hoffmann<br />
              Kottbusser Damm 24<br />
              10967 Berlin<br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
            <p className="mt-4">
              E-Mail: <a className="text-green-300" href="mailto:Monika.T.Hoffmann@gmail.com">
                Monika.T.Hoffmann@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Verantwortlich für den Inhalt</h2>
            <p className="mt-4">
              Dr. Monika T. Hoffmann<br />
              Kottbusser Damm 24<br />
              10967 Berlin
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}