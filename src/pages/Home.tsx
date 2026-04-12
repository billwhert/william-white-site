import React from "react";
import { LinkCard, SectionTitle } from "../components/Cards";

interface Project {
  title: string;
  href: string;
  note: string;
  github?: string;
}

const sqlProjects: Project[] = [
  // Add SQL projects here as you complete them
];

const pythonProjects = [
  {
    title: "Investigate a Dataset — Udacity/Nanodegree",
    href: "./projects/Investigate_a_Dataset.html",
    note: "EDA with Python (pandas, matplotlib)",
  },
  {
    title: "AB Testing Results — Udacity/Nanodegree",
    href: "./projects/Analyze_AB_Testing_Results.html",
    note: "EDA with Python (pandas, matplotlib, numpy)",
  },
  {
    title: "Game Sales vs Steam Engagement - Udacity/Nanodegree",
    href: "./projects/Data_Wrangling_Project.html",
    note: "EDA with Python (pandas, matplotlib, numpy, databases)",
  },
  {
    title: "Book Popularity vs Ratings Review - Personal Project",
    href: "./projects/Book_Library_Reviews.html",
    note: "EDA with Python (pandas, matplotlib, numpy)",
  },
];

const rProjects = [
  {
    title: "Bikeshare Ride Analysis - Udacity/Nanodegree",
    href: "./projects/Bikeshare.html",
    note: "ETL with R statistical programming",
  },
];

const visualizationProjects = [
  {
    title: "Customer Return Rate Dashboard - Power BI",
    href: "https://app.powerbi.com/groups/me/reports/ef2e0209-bcc1-4424-b2be-c9a402a137fc/271e87be21e8fb8cbbb9?experience=power-bi",
    note: "Customer Analysis, Power BI",
  },
];

const mlProjects = [
  {
    title: "Using Supervised Learning to Detect Bot Accounts",
    href: "./projects/Capstone.html",
    note: "Supervised Machine Learning (Logistic Regression, Naive Bayes, Gradient Boosting), Python, EDA, Feature Engineering",
    github: "https://github.com/billwhert/Social-Media-Bot-Detection",
  },
  {
    title: "ML Pipeline for Short-Term Rental Prices in NYC",
    href: "https://github.com/billwhert/Project-Build-an-ML-Pipeline-Starter",
    note: "End-to-end ML pipeline predicting Airbnb prices — MLflow, Weights & Biases, Hydra, Random Forest, scikit-learn",
  },
  {
    title: "Census Income Prediction — FastAPI Deployment",
    href: "https://github.com/billwhert/Deploying-a-Scalable-ML-Pipeline-with-FastAPI",
    note: "Logistic regression on Census Income data, served via FastAPI with CI/CD (GitHub Actions, flake8, pytest)",
  },
  {
    title:
      "Finding Donors Supervised Machine Learning Analysis - Udacity/Nanodegree",
    href: "./projects/Finding_Donors.html",
    note: "EDA with Python and Machine Learning (pandas, scikit-learn, logistic regression)",
  },
  {
    title:
      "Identifying Customer Segments with Unsupervised Machine Learning – Udacity Nanodegree Project",
    href: "./projects/Identify_Customer_Segments.html",
    note: "EDA with Python and Machine Learning (pandas, scikit-learn, matplotlib, dimensionality reduction with PCA, k-means clustering)",
  },
];

const writingSamples = [
  {
    title: "PGLD-11-0122-0006",
    href: "https://www.irs.gov/pub/foia/ig/spder/pgld-11-0122-0006.pdf",
    note: "IRS.gov — Policy Memo",
  },
  {
    title: "PGLD-11-0422-0007",
    href: "https://www.irs.gov/pub/foia/ig/spder/pgld-11-0422-0007.pdf",
    note: "IRS.gov — Interim Guidance",
  },
  {
    title: "PGLD-11-0522-0008",
    href: "https://www.irs.gov/pub/foia/ig/spder/pgld-11-0522-0008.pdf",
    note: "IRS.gov — Policy Guidance",
  },
  {
    title: "E-Books: The Benefits of Modernization Presentation",
    href: "./writing-samples/E-Books_Presentation.pptx",
    note: "Example presentation highlighting visualization and storytelling techniques",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-10 sm:pt-14">
      <div className="grid md:grid-cols-[auto,1fr] items-center gap-8">
        <img
          src="assets/personal_photo.jpg"
          alt="William White"
          className="size-40 md:size-48 rounded-full object-cover shadow-lg ring-4 ring-slate-200"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            William White
          </h1>
          <p className="mt-3 text-lg text-slate-700 max-w-2xl">
            I bring 16+ years of deep federal government experience to provide
            high-impact data solutions. I am proficient in Python, SQL, Power
            BI, Excel, and Tableau. I excel at transforming complex operational
            data into strategic assets, automating critical workflows, and
            driving executive-level decisions.
          </p>
        </div>
      </div>

      <section className="mt-12">
        <SectionTitle>About Me</SectionTitle>
        <div className="mt-4 bg-white/80 rounded-xl border border-slate-200 p-6">
          <p className="text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">
              I transform complex data challenges into strategic solutions.
            </span>{" "}
            With 16 years of federal service and a unique blend of technical and
            policy expertise, I've saved thousands of hours through automation,
            developed training programs from scratch, and authored policies that
            guide national operations.
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            I completed my B.S. in Data Analytics at WGU in just 4 months. I
            bring real-world experience in Python, SQL, Excel, and Power BI and
            love taking messy processes and turning them into streamlined,
            data-driven systems that actually work. I'm actively expanding my
            project portfolio across SQL, Python, R, visualization, and machine
            learning — you can follow along on{" "}
            <a
              href="https://github.com/billwhert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline font-medium"
            >
              GitHub
            </a>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            <span className="font-semibold text-slate-900">
              I'm actively seeking opportunities
            </span>{" "}
            where I can leverage my unique combination of data analytics, policy
            expertise, and leadership experience to drive meaningful impact.
            Whether it's building dashboards that tell a story, automating
            workflows that save time, or developing strategies that move the
            needle — I'm ready to bring value from day one.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle>Projects — Coding</SectionTitle>

        <div className="mt-6 space-y-8">
          {/* SQL */}
          <div>
            <h3 className="text-base font-semibold text-slate-500 uppercase tracking-widest mb-1">
              SQL
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Querying, joins, aggregations, and data manipulation across relational databases.
            </p>
            {sqlProjects.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sqlProjects.map((p) => (
                  <LinkCard key={p.title} title={p.title} href={p.href} note={p.note} github={p.github} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 italic">Projects coming soon.</p>
            )}
          </div>

          {/* Python / Pandas */}
          <div>
            <h3 className="text-base font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Python / Pandas
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Exploratory data analysis, data wrangling, A/B testing, and statistical analysis on real-world datasets using pandas, NumPy, and matplotlib.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pythonProjects.map((p) => (
                <LinkCard key={p.title} title={p.title} href={p.href} note={p.note} />
              ))}
            </div>
          </div>

          {/* R */}
          <div>
            <h3 className="text-base font-semibold text-slate-500 uppercase tracking-widest mb-1">
              R
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Statistical programming and ETL workflows using R for data transformation and analysis.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rProjects.map((p) => (
                <LinkCard key={p.title} title={p.title} href={p.href} note={p.note} />
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div>
            <h3 className="text-base font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Visualization
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Business intelligence dashboards and visual storytelling using Power BI and DAX to surface insights for decision-makers.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visualizationProjects.map((p) => (
                <LinkCard key={p.title} title={p.title} href={p.href} note={p.note} />
              ))}
            </div>
          </div>

          {/* Machine Learning */}
          <div>
            <h3 className="text-base font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Machine Learning
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              Supervised and unsupervised learning projects covering classification, clustering, dimensionality reduction, and feature engineering with scikit-learn.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mlProjects.map((p) => (
                <LinkCard key={p.title} title={p.title} href={p.href} note={p.note} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle>Projects — Writing Samples</SectionTitle>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {writingSamples.map((item) => (
            <LinkCard
              key={item.href}
              title={item.title}
              href={item.href}
              note={item.note}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 mb-8">
        <SectionTitle>Let's Connect</SectionTitle>
        <div className="mt-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-200 p-6">
          <p className="text-slate-700 font-medium mb-4">
            I'm actively exploring new opportunities and would love to hear from
            you!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="mailto:billjohnwhite@gmail.com"
              className="flex flex-col items-center justify-center bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">✉️</span>
              <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600">
                Email Me
              </span>
              <span className="text-xs text-slate-500">
                billjohnwhite@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/william-white-analyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">💼</span>
              <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600">
                LinkedIn
              </span>
              <span className="text-xs text-slate-500">
                Professional Profile
              </span>
            </a>
            <a
              href="https://github.com/billwhert"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🐙</span>
              <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600">
                GitHub
              </span>
              <span className="text-xs text-slate-500">Project Code</span>
            </a>
            <a
              href="https://wgu.joinhandshake.com/profiles/williamwhite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🤝</span>
              <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600">
                Handshake
              </span>
              <span className="text-xs text-slate-500">University Network</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
