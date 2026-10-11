import './App.css'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'information', label: 'Information we collect' },
  { id: 'use', label: 'How we use information' },
  { id: 'sharing', label: 'When information is shared' },
  { id: 'security', label: 'Storage & security' },
  { id: 'choices', label: 'Your choices' },
  { id: 'children', label: "Children's privacy" },
  { id: 'updates', label: 'Policy updates' },
  { id: 'contact', label: 'Contact us' },
]

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="brand-mark">
      <rect width="40" height="40" rx="13" fill="currentColor" />
      <path
        d="M20 10.5c-2.1 3-2.7 5.8 0 8.1 2.7-2.3 2.1-5.1 0-8.1Zm-8.1 6.2c.3 3.8 1.7 6.1 4.8 6.2.8-3-1.1-5.1-4.8-6.2Zm16.2 0c-3.7 1.1-5.6 3.2-4.8 6.2 3.1-.1 4.5-2.4 4.8-6.2ZM14 24.8c1.7 3 3.7 4.3 6 3.4 2.3.9 4.3-.4 6-3.4H14Z"
        fill="#fffaf2"
      />
      <path d="M11.5 30h17" stroke="#fffaf2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 19 6v5.2c0 4.5-2.9 8.1-7 9.8-4.1-1.7-7-5.3-7-9.8V6l7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MangalSewa home">
          <BrandMark />
          <span>Mangal<span className="brand-accent">Sewa</span></span>
        </a>
        <div className="header-right">
          <span className="header-label">YOUR TRUST, OUR PRIORITY</span>
          <span className="header-divider" aria-hidden="true" />
          <span className="header-page">Privacy center</span>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="breadcrumb"><span>MangalSewa</span><span aria-hidden="true">/</span><span>Legal</span></div>
            <div className="hero-heading-row">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> A promise of care</p>
                <h1 id="page-title">Your privacy,<br /><em>held with care.</em></h1>
              </div>
              <div className="hero-seal" aria-hidden="true">
                <span className="seal-ring">MANGALSEWA · PRIVACY ·</span>
                <ShieldIcon />
              </div>
            </div>
            <div className="hero-bottom">
              <p className="hero-description">
                We believe trust begins with transparency. Here’s how information is handled when you use MangalSewa.
              </p>
              <div className="updated-chip"><span className="status-dot" /> Last updated <strong>October 11, 2026</strong></div>
            </div>
          </div>
        </section>

        <div className="page-layout">
          <aside className="sidebar" aria-label="Privacy policy navigation">
            <div className="sidebar-inner">
              <p className="sidebar-title">ON THIS PAGE</p>
              <nav>
                <ol className="toc-list">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span className="toc-number">{String(index + 1).padStart(2, '0')}</span>
                        <span>{section.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="sidebar-note">
                <ShieldIcon />
                <p>Your information is personal. We treat it that way.</p>
              </div>
            </div>
          </aside>

          <article className="policy">
            <div className="policy-intro" id="overview">
              <span className="section-kicker">A CLEAR COMMITMENT</span>
              <p>
                This Privacy Policy describes the kinds of information that may be collected when you use MangalSewa, how it may be used, and the choices available to you. The information we handle depends on the features you use and the details you choose to share.
              </p>
            </div>

            <section className="policy-section" id="information">
              <div className="section-number">01</div>
              <div className="section-copy">
                <h2>Information we collect</h2>
                <p>We may receive information in a few different ways:</p>
                <ul>
                  <li><strong>Information you provide</strong> when you create an account, contact us, or use a feature that asks for details.</li>
                  <li><strong>Service information</strong> about how you interact with MangalSewa, such as the features you access and the time of your activity.</li>
                  <li><strong>Device and technical information</strong> that helps the app operate, stay reliable, and protect against misuse.</li>
                </ul>
                <p>Please avoid sharing sensitive information unless a MangalSewa feature specifically requires it.</p>
              </div>
            </section>

            <section className="policy-section" id="use">
              <div className="section-number">02</div>
              <div className="section-copy">
                <h2>How we use information</h2>
                <p>Information may be used to provide and maintain the services you request, respond to questions, improve the app, communicate important service updates, and help protect users and MangalSewa.</p>
                <p>We use information for purposes that are consistent with this policy and the features you choose to use.</p>
              </div>
            </section>

            <section className="policy-section" id="sharing">
              <div className="section-number">03</div>
              <div className="section-copy">
                <h2>When information is shared</h2>
                <p>We do not sell your personal information. Information may be shared when needed to provide a service you request, with service providers who support app operations, when required by law, or to protect the rights and safety of users and the service.</p>
                <p>Where a service provider handles information for us, it should only do so to perform the agreed service.</p>
              </div>
            </section>

            <section className="policy-section" id="security">
              <div className="section-number">04</div>
              <div className="section-copy">
                <h2>Storage &amp; security</h2>
                <p>We take reasonable measures designed to protect information against loss, misuse, and unauthorized access. No method of electronic storage or transmission is completely secure, so we cannot guarantee absolute security.</p>
                <p>We retain information only for as long as it is needed for the purposes described here, unless a longer period is required or permitted by law.</p>
              </div>
            </section>

            <section className="policy-section" id="choices">
              <div className="section-number">05</div>
              <div className="section-copy">
                <h2>Your choices</h2>
                <p>You can choose what information to provide, and you may stop using the service at any time. Depending on where you live, you may also have rights to access, correct, or request deletion of your personal information.</p>
                <p>To make a privacy request, contact us through MangalSewa’s official support channel. We may need to verify your identity before responding.</p>
              </div>
            </section>

            <section className="policy-section" id="children">
              <div className="section-number">06</div>
              <div className="section-copy">
                <h2>Children’s privacy</h2>
                <p>MangalSewa is not intended for children who are below the minimum age required to use the service in their region. We do not knowingly collect personal information from children without appropriate authorization. If you believe a child has provided information, please contact us.</p>
              </div>
            </section>

            <section className="policy-section" id="updates">
              <div className="section-number">07</div>
              <div className="section-copy">
                <h2>Policy updates</h2>
                <p>We may update this policy as MangalSewa changes. When we do, we’ll revise the date at the top of this page. If a change is significant, we’ll take reasonable steps to bring it to your attention.</p>
              </div>
            </section>

            <section className="policy-section contact-section" id="contact">
              <div className="section-number">08</div>
              <div className="section-copy">
                <h2>Contact us</h2>
                <p>Questions about this policy or your information? Reach out through MangalSewa’s official support channel and include “Privacy” in your message so we can direct your request to the right team.</p>
              </div>
            </section>

            <div className="draft-notice">
              <span className="notice-icon">i</span>
              <p><strong>Before publishing:</strong> This page is a general policy draft. Please confirm it reflects MangalSewa’s actual data practices, legal requirements, and service providers.</p>
            </div>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <BrandMark />
          <span>Mangal<span className="brand-accent">Sewa</span></span>
        </a>
        <p>Made with care. Shared with trust.</p>
        <button className="print-button" type="button" onClick={() => window.print()}>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7V3h10v4M5 14H3V8h14v6h-2M5 11h10v6H5z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M14 9h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          Print this policy
        </button>
      </footer>
    </div>
  )
}

export default App
