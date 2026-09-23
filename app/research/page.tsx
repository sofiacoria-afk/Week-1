"use client";

const globalExamples = [
  { name: "MSCI ESG Ratings", detail: "Rates companies on financially relevant, industry-specific sustainability risks and opportunities.", source: "https://www.msci.com/data-and-analytics/sustainability-solutions/esg-ratings" },
  { name: "Morningstar Sustainalytics", detail: "Measures company exposure to material ESG risks and how those risks are managed.", source: "https://www.sustainalytics.com/corporate-solutions/esg-solutions/esg-risk-ratings" },
  { name: "S&P Global Sustainable1", detail: "Provides ESG scores and sustainability data to compare company performance and material ESG issues.", source: "https://www.spglobal.com/sustainable1/en/solutions/esg-scores-data/" },
  { name: "Clarity AI", detail: "Uses sustainability data and technology to analyze indicators such as GHG emissions, waste, and water pollution.", source: "https://clarity.ai/raw-data-solutions/" },
  { name: "LSEG ESG Scores and Data", detail: "Combines standardized sustainability data, materiality assessments, and ESG scores for investment analysis.", source: "https://www.lseg.com/en/data-analytics/sustainable-finance/sustainability-ratings-and-data" },
];

const competitors = [
  { name: "MSCI ESG Ratings", type: "Benchmark", fact: "Industry-relative ESG ratings from AAA to CCC.", gap: "GREENInvest focuses on a smaller, simpler view of Mexican companies.", source: "https://www.msci.com/data-and-analytics/sustainability-solutions/esg-ratings" },
  { name: "Morningstar Sustainalytics", type: "ESG Research", fact: "ESG Risk Ratings use five risk levels and cover 16,000+ companies.", gap: "GREENInvest aims to make the comparison easier for non-expert users.", source: "https://www.sustainalytics.com/corporate-solutions/esg-solutions/esg-risk-ratings" },
  { name: "S&P Global Sustainable1", type: "ESG Data", fact: "ESG scores evaluate material sustainability risks, opportunities, and impacts.", gap: "GREENInvest presents fewer indicators in a simpler format.", source: "https://www.spglobal.com/sustainable1/en/solutions/esg-scores-data/" },
  { name: "Clarity AI", type: "Sustainability Technology", fact: "Offers ESG data for 40,000+ issuers, including GHG emissions, waste, and water indicators.", gap: "GREENInvest starts with a small group of Mexican public companies.", source: "https://clarity.ai/raw-data-solutions/" },
  { name: "LSEG ESG Scores and Data", type: "Financial + ESG Data", fact: "Covers 16,000+ companies with 240+ standardized sustainability metrics.", gap: "GREENInvest is designed as a simple student-built comparison experience.", source: "https://www.lseg.com/en/data-analytics/sustainable-finance/sustainability-ratings-and-data" },
  { name: "BlackRock Aladdin Sustainability", type: "Investment Platform", fact: "Integrates 15,000+ ESG metrics into investment and risk-management workflows.", gap: "GREENInvest is aimed at a much simpler research experience rather than institutional workflows.", source: "https://www.blackrock.com/aladdin/platforms/products/aladdin-sustainability" },
  { name: "Bloomberg Sustainable Finance", type: "Financial Information", fact: "Combines ESG data, research, analytics, climate tools, and financial-market information.", gap: "GREENInvest focuses on an accessible comparison of financial and environmental information.", source: "https://professional.bloomberg.com/products/bloomberg-terminal/sustainable-finance/" },
  { name: "ISS ESG", type: "ESG Research", fact: "Provides sustainability research, ratings, screening, climate data, and analytics for investors.", gap: "GREENInvest keeps the information smaller and focused on Mexican listed companies.", source: "https://www.issgovernance.com/esg/" },
];

export default function ResearchPage() {
  return (
    <main className="container researchPage">
      <header className="researchHeader">
        <div>
          <p className="eyebrow">GREENInvest · Week 2</p>
          <h1>Research + Benchmarking Dashboard</h1>
          <p className="subtitle">Explore sustainable investment platforms, Mexico research, competitors, risks, and saved research in one simple dashboard.</p>
        </div>
        <a className="homeLink" href="/">Back to GREENInvest</a>
      </header>

      <section className="researchSection">
        <p className="label">Research intake</p>
        <div className="researchInputRow">
          <input aria-label="Research topic" placeholder="Example: Sustainable investment platforms" />
          <button type="button">Research</button>
        </div>
      </section>

      <section className="researchSection">
        <p className="label">Global benchmarks</p>
        <h2>5 Global Examples</h2>
        <div className="benchmarkGrid">
          {globalExamples.map((item) => (
            <article className="researchCard" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <a href={item.source} target="_blank" rel="noreferrer">View source</a>
            </article>
          ))}
        </div>
      </section>

      <section className="researchSection">
        <p className="label">Mexico localization</p>
        <h2>Sustainable Investing in Mexico</h2>
        <p className="sectionText">
          Mexico introduced its Sustainable Taxonomy in 2023 to help identify economic activities that contribute to sustainability and environmental protection. GREENInvest uses this context to explore a simpler way to compare financial and environmental information for Mexican public companies.
        </p>
        <a href="https://www.gob.mx/shcp/documentos/taxonomia-sostenible-de-mexico" target="_blank" rel="noreferrer">Source: Secretaría de Hacienda y Crédito Público</a>
      </section>

      <section className="researchSection">
        <div className="sectionHeading">
          <div>
            <p className="label">Market research</p>
            <h2>8 Competitors &amp; Substitutes</h2>
          </div>
          <span className="statusPill">8 researched platforms</span>
        </div>
        <div className="competitorGrid">
          {competitors.map((item) => (
            <article className="researchCard" key={item.name}>
              <p className="label">{item.type}</p>
              <h3>{item.name}</h3>
              <p>{item.fact}</p>
              <p><strong>GREENInvest difference:</strong> {item.gap}</p>
              <a href={item.source} target="_blank" rel="noreferrer">View source</a>
            </article>
          ))}
        </div>
      </section>

      <section className="researchSection">
        <p className="label">Comparison</p>
        <h2>Competitor Comparison Table</h2>
        <div className="tablePlaceholder">Search + filter table will be added in the next Week 2 commit.</div>
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
          <div><p className="label">Saved research</p><h2>Saved Results</h2></div>
          <button type="button" disabled>Save Research</button>
        </div>
        <p className="sectionText">Supabase saving and saved results will be connected in a later Week 2 commit.</p>
      </section>
    </main>
  );
}
