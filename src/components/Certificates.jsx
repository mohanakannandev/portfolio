
import React, { useState } from "react";
import {
  FaAward,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";
import "./Certificates.css";

const certificates = [
  {
    id: 1,
    title: "Software Engineering",
    issuer: " The Hong Kong University of Science and Technology ",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/1ATOIWD2AI12",
  },
  {
    id: 2,
    title: "AWS Academy Graduate",
    issuer: "AWS Training and Certificatio",
    date: "2024",
    credentialUrl: "https://www.credly.com/go/Gy7295mt",
  },
  {
    id: 3,
    title: "Git and GitHub",
    issuer: "IBM",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/Z522MHUZ9GOI",
  },
  {
    id: 4,
    title: " Microservices and Serverless",
    issuer: "IBM",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/D8VLJ8DJTLF8",
  },
  {
    id: 5,
    title: "CI/CD",
    issuer: "IBM",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/GQ2RVVN1CWB6",
  },
  {
    id: 6,
    title: "Machine Learning: Regression",
    issuer: "IBM",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/5NKRG58O0OK3",
  },
  {
    id: 7,
    title: "Security and Risk Management",
    issuer: "Packt",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/I19SVNUJYFKV",
  },
  {
    id: 8,
    title: "Asset Security",
    issuer: "Packt",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/VWLIRR2NS3NU",
  },
  {
    id: 9,
    title: "Healthcare Marketplace",
    issuer: "University of Minnesota",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/specialization/15M8MKOVG2ZN",
  },
  {
    id: 10,
    title: "eHealth: More than just an electronic record",
    issuer: "The University of Sydney",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/OJ9NRDYWFY19 ",
  },
  {
    id: 11,
    title: "Interfacing with the Arduino",
    issuer: "University of California, Irvine",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/EDOLUKOO65LO",
  },
  
];

function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 8);

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">

        <div className="certificates-heading">
          <span className="certificates-eyebrow">
            <span className="certificate-heading-line" />
            ACHIEVEMENTS
            <span className="certificate-heading-line" />
          </span>

          <h2>
            My <span>Certificates</span>
          </h2>

          <p>
            Professional certifications showcasing my skills,
            learning journey, and technical growth.
          </p>
        </div>

        <div className="certificates-grid">
          {visibleCertificates.map((certificate) => (
            <a
              className="certificate-card"
              key={certificate.id}
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title} credential`}
            >
              <div className="compact-certificate-icon">
                <FaAward />
                <span>
                  CERT. {String(certificate.id).padStart(2, "0")}
                </span>
              </div>

              <div className="compact-certificate-content">
                <span className="compact-certificate-issuer">
                  <FaGraduationCap />
                  {certificate.issuer}
                </span>

                <h3>{certificate.title}</h3>

                <div className="compact-certificate-footer">
                  <span>{certificate.date}</span>
                  <span className="compact-certificate-link">
                    View Credential <FaExternalLinkAlt />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {certificates.length > 8 && (
          <button
            type="button"
            className="certificates-toggle"
            onClick={() => setShowAll((previous) => !previous)}
            aria-expanded={showAll}
          >
            {showAll ? "Show Less" : "View All Certificates"}
            <span>{showAll ? "−" : `+${certificates.length - 8}`}</span>
          </button>
        )}

      </div>
    </section>
  );
}

export default Certificates;
