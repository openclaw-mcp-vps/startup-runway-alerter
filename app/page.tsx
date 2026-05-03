export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Startup Founders & CFOs
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Get alerts before<br />running out of money
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your bank accounts, track burn rate automatically, and receive email or SMS alerts the moment your runway drops below your threshold.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Monitoring — $49/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-4">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "🏦", title: "Bank Connected", desc: "Plaid integration reads transactions automatically" },
          { icon: "🔥", title: "Burn Rate Calc", desc: "Real-time monthly burn calculated from your data" },
          { icon: "🚨", title: "Instant Alerts", desc: "Email & SMS when runway falls below your limit" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited bank accounts",
              "Real-time burn rate tracking",
              "Email & SMS alerts",
              "Configurable runway thresholds",
              "Monthly cash flow reports",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my bank?",
              a: "We use Plaid, the industry-standard bank connectivity platform trusted by thousands of apps. Your credentials are never stored on our servers."
            },
            {
              q: "How is burn rate calculated?",
              a: "We analyze your last 3 months of outgoing transactions, exclude one-time expenses, and compute a rolling average monthly burn rate updated daily."
            },
            {
              q: "When will I get alerted?",
              a: "You set your own runway threshold (e.g., 3 months). The moment our daily calculation shows runway below that threshold, you get an immediate email and optional SMS."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} Startup Runway Alerter. All rights reserved.</p>
      </footer>
    </main>
  );
}
