"use client";

export default function ResearchPage() {
  return (
    <main className="container researchPage">
      <header className="researchHeader">
        <div>
          <p className="eyebrow">GREENInvest · Week 2</p>
          <h1>Research + Benchmarking Dashboard</h1>
          <p className="subtitle">
            Explore sustainable investment platforms, Mexico research, competitors,
            risks, and saved research in one simple dashboard.
          </p>
        </div>
        <a className="homeLink" href="/">Back to GREENInvest</a>
      </header>

      <section className="researchSection">
        <p className="label">Research intake</p>
        <div className="researchInputRow">
          <input
            aria-label="Research topic"
            placeholder="Example: Sustainable investment platforms"
          />
          <button type="button">Research</button>
        </div>
      </section>

      <section className="researchSection">
        <div className="sectionHeading">
          <div>
            <p className="label">Benchmarks</p>
            <h2>5 Global Examples</h2>
          </div>
          <span className="statusPill">Planned research</span>
        </div>
        <div className="benchmarkGrid">
          {["Global Example 1", "Global Example 2", "Global Example 3", "Global Example 4", "Global Example 5"].map(
            (name) => (
              <article className="researchCard" key={name}>
                <h3>{name}</h3>
                <p>Verified sustainable-investment research will be added here.</p>
              </article>
            )
          )}
        </div>
      </section>

      <section className="researchSection">
        <p className="label">Mexico localization</p>
        <h2>Sustainable Investing in Mexico</h2>
        <p className="sectionText">
          This section will summarize sourced information about sustainable finance,
          ESG benchmarks, and opportunities for GREENInvest in the Mexican market.
        </p>
      </section>

      <section className="researchSection">
        <div className="sectionHeading">
          <div>
            <p className="label">Market research</p>
            <h2>8 Competitors &amp; Substitutes</h2>
          </div>
          <span className="statusPill">8 cards</span>
        </div>
        <div className="competitorGrid">
          {Array.from({ length: 8 }, (_, index) => (
            <article className="researchCard" key={index}>
              <p className="label">Platform {index + 1}</p>
              <h3>Competitor / Substitute</h3>
              <p>Company description, type, key feature, and GREENInvest gap.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="researchSection">
        <p className="label">Comparison</p>
        <h2>Competitor Comparison Table</h2>
        <div className="tablePlaceholder">
          Search + filter table will be added in a later Week 2 commit.
        </div>
      </section>

      <section className="researchSection">
        <p className="label">Risk map</p>
        <h2>Research Risks</h2>
        <div className="riskGrid">
          <div className="riskCard low"><strong>Low</strong><span>Good information available</span></div>
          <div className="riskCard medium"><strong>Medium</strong><span>Some information gaps</span></div>
          <div className="riskCard high"><strong>High</strong><span>Limited information available</span></div>
        </div>
      </section>

      <section className="researchSection">
        <div className="sectionHeading">
          <div>
            <p className="label">Saved research</p>
            <h2>Saved Results</h2>
          </div>
          <button type="button" disabled>Save Research</button>
        </div>
        <p className="sectionText">
          Supabase saving and saved results will be connected in a later Week 2 commit.
        </p>
      </section>
    </main>
  );
}
