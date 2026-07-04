export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#07110d] px-6 py-24 text-stone-100">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-300">← Back</a>

        <h1 className="mt-10 text-5xl font-bold">Privacy Policy</h1>

        <section className="mt-10 space-y-8 text-stone-300">
          <p>
            This website is operated by Dr. Monika T. Hoffmann. This privacy policy
            explains what personal data is processed when you visit this website.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white">Controller</h2>
            <p className="mt-4">
              Dr. Monika T. Hoffmann<br />
              Kottbusser Damm 24<br />
              10967 Berlin<br />
              Germany<br />
              E-Mail: <a className="text-green-300" href="mailto:Monika.T.Hoffmann@gmail.com">
                Monika.T.Hoffmann@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Hosting</h2>
            <p className="mt-4">
              This website is hosted by Hostinger. When visiting the website,
              technical access data such as IP address, date and time of access,
              browser type and requested pages may be processed in server log files
              to ensure secure and reliable operation of the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Cookies and analytics</h2>
            <p className="mt-4">
              This website currently does not use analytics, tracking cookies,
              advertising cookies or newsletter tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">External links</h2>
            <p className="mt-4">
              This website links to external websites such as ORCID, LinkedIn,
              ResearchGate, roadless.online and other project pages. When you click
              these links, the privacy policies of the respective external providers apply.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Your rights</h2>
            <p className="mt-4">
              Under the GDPR, you may have rights of access, rectification, erasure,
              restriction of processing, objection and data portability, as well as
              the right to lodge a complaint with a supervisory authority.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}