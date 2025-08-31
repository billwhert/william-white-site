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
      "Led Training Needs Assessment across multiple business units, identifying key skill gaps and aligning resources with executive initiatives.",
      "Implemented automation solutions reducing manual reporting time by 60%, improving efficiency and decision-making.",
      "Authored policy analysis white papers influencing operational changes impacting 400+ field employees.",
      "Co-led agency-wide training initiatives with executive-level visibility.",
    ],
  },
  {
    title: "Senior Disclosure Analyst",
    company: "Internal Revenue Service",
    location: "Chicago, IL",
    dates: "2019 – 2024",
    bullets: [
      "Managed the policy for a national program involving high-volume Freedom of Information Act requests (8,000+ per year) as well as Privacy Act requests with strict 20-day turnarounds.",
      "Authored multiple Internal Revenue Manual (IRM) sections published on IRS.gov.",
      "Compiled annual FOIA reports covering thousands of requests for public release.",
      "Utilized Power BI to track training outcomes and analyze FOIA case processing data.",
      "Served on national exam development group, designing ASAP FOIA Certification Test.",
      "Mentored new analysts and provided guidance on complex legal requirements.",
      "Personally developed the IRS FOIA training program for new hires within 6 months of initiating the project.",
    ],
  },
  {
    title: "SharePoint Administrator / Policy Analyst",
    company: "Internal Revenue Service",
    location: "Chicago, IL",
    dates: "Mar 2018 – Aug 2019",
    bullets: [
      "Served as Disclosure Division's SharePoint administrator, managing organization-wide systems.",
      "Designed automated forms and workflows to streamline employee feedback and policy submissions.",
      "Managed the data governance for all 150+ Disclosure employees to ensure data was protected, stored, and maintained in accordance with law and regulations.",
      "Built, updated, and maintained Privacy Impact Assessment (PIA) documentation for SharePoint systems in partnership with the Privacy Office.",
      "Implemented SharePoint governance with role-based access, standardized intake templates, and retention configurations aligned to the Privacy Act and agency policy.",
      "Created SOPs, checklists, and user guidance that improved request intake/routing, documentation quality, and sustainment of privacy-by-design practices.",
      "Led data migration projects across multiple SharePoint environments.",
    ],
  },
  {
    title: "Disclosure Specialist / Senior Specialist",
    company: "Internal Revenue Service",
    location: "Chicago, IL",
    dates: "Aug 2010 – Mar 2018",
    bullets: [
      "Processed hundreds of thousands of pages of FOIA, Privacy Act, subpoena, and court order requests.",
      "Promoted to Senior in 2016 where I provided team leadership and acted as manager during absences.",
      "Trained peers on complex regulatory requirements and compliance matters.",
      "Delivered policy briefings to both internal employee groups across the IRS as well as external professional groups (e.g., Illinois CPA Association).",
    ],
  },
  {
    title: "Revenue Officer",
    company: "Internal Revenue Service",
    location: "Schiller Park, IL",
    dates: "Jun 2009 – Aug 2010",
    bullets: [
      "Conducted financial analysis of taxpayer payment capabilities and creditworthiness.",
      "Performed stakeholder interviews and provided compliance education.",
      "Developed data-driven strategies for debt resolution and case prioritization.",
      "Initiated collection and legal actions, as appropriate, to include summons issuance, levies on funds, liens and property seizures.",
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

          <div className="p-3 rounded-lg bg-white/80 border border-slate-200">
            <div className="font-medium text-sm text-slate-900">
              B.S., Data Analytics
            </div>
            <div className="text-xs text-slate-600">In Progress</div>
            <div className="text-xs text-slate-700 mt-1">
              WGU | Expected Oct 2025
            </div>
            <div className="text-xs text-slate-600">
              Accelerated (3-4 months)
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
