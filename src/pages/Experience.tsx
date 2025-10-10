import React from "react";
import { BadgeCard, SectionTitle } from "../components/Cards";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

function JobCard({ title, company, location, dates, bullets }: JobCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayBullets = isExpanded ? bullets : bullets.slice(0, 2);
  const hasMore = bullets.length > 2;

  return (
    <div className="bg-white/80 rounded-xl border border-slate-200 p-4 hover:shadow-lg transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
          <div className="text-xs text-slate-600 mt-0.5">{company}</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-medium text-slate-700">{dates}</div>
          <div className="text-xs text-slate-500">{location}</div>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5">
        {displayBullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-xs text-slate-700">
            <span className="text-sky-500 mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-xs text-sky-600 hover:text-sky-700 font-medium"
        >
          {isExpanded ? "← Show less" : `Show ${bullets.length - 2} more →`}
        </button>
      )}
    </div>
  );
}

const jobs: JobCardProps[] = [
  {
    title: "Management & Program Analyst",
    company: "Internal Revenue Service",
    location: "Rockford, IL",
    dates: "2024 – Present",
    bullets: [
      "Reduced errors on training budget and event submissions by 80-90% using advanced Excel and VBA to automate the submission form and process.",
      "Led the Cross-Functional Initiative on Training program, consisting of 20-30 employees and mentors with high-level executive interest and input.",
      "Developed Power BI dashboards using training metrics from hundreds of employees to predict the number of trainers needed in the future for staff and budget reductions.",
    ],
  },
  {
    title: "Senior Disclosure Analyst",
    company: "Internal Revenue Service",
    location: "Chicago, IL",
    dates: "2019 – 2024",
    bullets: [
      "Created a new FOIA training program for new IRS FOIA specialists, consisting of 10 chapters of complex legal information broken down into simple concepts, within 5 months of beginning the project.",
      "Reviewed, analyzed, and transformed dozens of data points for approximately 8,000 requests annually to create an annual FOIA report for the Department of the Treasury.",
      "Analyzed KPI case processing metrics of 10 different offices for hundreds of cases each month for area leadership on areas such as overall case processing time, fee charges, and time spent on research/reviews.",
      "Utilized Power BI to track training outcomes and analyze FOIA case processing data.",
    ],
  },
  {
    title: "SharePoint Administrator / Policy Analyst",
    company: "Internal Revenue Service",
    location: "Chicago, IL",
    dates: "Mar 2018 – Aug 2019",
    bullets: [
      "Developed at least 10 SharePoint forms and Workflows to automate the processing and tracking of suggestion box requests, policy updates, and annual project tracking.",
      "Conducted bi-monthly reviews of dozens of SharePoint subsites to ensure data governance and security policies were followed to reduce privacy and unauthorized access errors.",
      "Improved search results by 15-20% to increase employee satisfaction on related keyword searches and regularly removed incorrect or old records.",
      "Built, updated, and maintained Privacy Impact Assessment (PIA) documentation for SharePoint systems in partnership with the Privacy Office.",
      "Implemented SharePoint governance with role-based access, standardized intake templates, and retention configurations aligned to the Privacy Act and agency policy.",
      "Created SOPs, checklists, and user guidance that improved request intake/routing, documentation quality, and sustainment of privacy-by-design practices.",
      "Led data migration projects across multiple SharePoint environments.",
    ],
  },
  {
    title: "Senior Specialist",
    company: "Internal Revenue Service",
    location: "Chicago, IL",
    dates: "Aug 2010 – Mar 2018",
    bullets: [
      "Quickly analyzed and completed dozens of complex FOIA, subpoena, Privacy Act, court order, and tax records requests each month.",
      "Reviewed tens of thousands of pages of tax records each month while completing cases within tight 20+ day timeframes.",
      "Conducted monthly employee briefings to dozens of IRS employees on their responsibilities in tax document disclosures and FOIA and Privacy Act legal requirements.",
    ],
  },
];

export default function Experience() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-10">
      <h1 className="text-2xl font-semibold text-slate-900">
        Experience & Education
      </h1>

      <section className="mt-6">
        <SectionTitle>Professional Experience</SectionTitle>
        <div className="mt-4 space-y-3">
          {jobs.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle>Education</SectionTitle>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-white/80 border border-slate-200">
            <div className="p-3 rounded-lg bg-white/80 border border-slate-200">
              <div className="font-medium text-sm text-slate-900">
                B.S., Data Analytics
              </div>
              <div className="text-xs text-slate-600">In Progress</div>
              <div className="text-xs text-slate-700 mt-1">WGU | Oct 2025</div>
              <div className="text-xs text-slate-600">
                Accelerated (3-4 months)
              </div>
            </div>

            <div className="font-medium text-sm text-slate-900">
              B.S., Political Science
            </div>
            <div className="text-xs text-slate-600">
              International Relations
            </div>
            <div className="text-xs text-slate-700 mt-1">NIU | 2005-2008</div>
            <div className="text-xs text-slate-600">
              <em>Summa Cum Laude</em> • 4.0 GPA
            </div>
          </div>

          <div className="p-3 rounded-lg bg-white/80 border border-slate-200">
            <div className="font-medium text-sm text-slate-900">
              B.S., Sociology
            </div>
            <div className="text-xs text-slate-600">Criminology</div>
            <div className="text-xs text-slate-700 mt-1">NIU | 2005-2008</div>
            <div className="text-xs text-slate-600">
              <em>Summa Cum Laude</em> • 3.9 GPA
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle>Certifications</SectionTitle>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <BadgeCard
            title="CompTIA Data+"
            href="https://www.credly.com/earner/earned/badge/564d7448-5c7d-4d42-bfda-b74e2325c262"
            issuer="CompTIA"
            note="2025"
          />
          <BadgeCard
            title="CompTIA Project+"
            href="https://www.credly.com/earner/earned/badge/d12de4ff-38ad-463e-af70-04a9e856808e"
            issuer="CompTIA"
            note="2025"
          />
          <BadgeCard
            title="AWS Certified Cloud Practitioner"
            href="https://www.credly.com/earner/earned/badge/9917816b-6435-40a6-b9a3-f6ec0f31bbc1"
            issuer="Amazon Web Services"
            note="2025"
          />
          <BadgeCard
            title="Data Engineering Practitioner"
            href="https://wgu.badgr.com/public/assertions/hgLR2H-fS6264C6ChiDwcw"
            issuer="WGU Certificate"
            note="2025"
          />
        </div>
      </section>

      <section className="mt-10 mb-16">
        <SectionTitle>Skills</SectionTitle>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Python (pandas, matplotlib, NumPy)",
            "SQL & Database Management",
            "Power BI & DAX",
            "Data Visualization",
            "ETL/Data Pipelines",
            "AWS Cloud Services",
            "SharePoint Development",
            "Process Automation",
            "Statistical Analysis",
            "Machine Learning Basics",
            "CompTIA Data+ Certified",
            "CompTIA Project+ Certified",
            "AWS Cloud Practitioner",
            "FOIA/Privacy Act Expert",
            "Policy Development",
            "Technical Writing",
            "Training Development",
            "Change Management",
            "Risk Assessment",
            "Data Governance",
            "Compliance Management",
            "Executive Reporting",
            "Stakeholder Management",
            "Team Leadership",
            "Project Management",
            "Agile Methodologies",
          ].map((s) => (
            <span
              key={s}
              className="text-xs bg-sky-100 text-sky-800 border border-sky-200 px-3 py-1 rounded-full font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
