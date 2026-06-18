import { TbExternalLink } from "react-icons/tb";

function Certifications() {
  const certificates = [
    {
      title: "Data Analytics Starter",
      issuer: "HerTechTrail Academy",
      file: "/Certificates/Data Analytics Starter.pdf",
    },
    {
      title: "Intermediate Structured Query Language",
      issuer: "DataCamp",
      file: "/Certificates/Intermediate SQL.pdf",
    },
    {
      title: "Intermediate PowerBI",
      issuer: "Simon Sez IT",
      file: "/Certificates/Intermediate PowerBI.pdf",
    },
    {
      title: "Power Query, Power Pivot and Dax",
      issuer: "Simon Sez IT",
      file: "/Certificates/Power Query, Power Pivot and Dax.pdf",
    },
    {
      title: "Advanced Pivot Tables",
      issuer: "Simon Sez IT",
      file: "/Certificates/Advanced Pivot Tables.pdf",
    },
    {
      title: "Data Preparation in Excel",
      issuer: "DataCamp",
      file: "/Certificates/Data Preparation in Excel.pdf",
    },
    
  ];

  return (
    <section id="certifications" className="pt-10 pb-20 bg-black text-white border-b border-gray-700">
      <div className=" mx-auto px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">CERTIFICATIONS</h2>

        {/* 1 column mobile → 3 columns tablet → 4 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-green-300">{cert.title}</h3>
              <p className="text-base md:text-md lg:text-lg text-gray-300 mb-4">{cert.issuer}</p>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-500 transition"
                >
                <span>View Certificate</span>
                <TbExternalLink className="w-5 h-5" />
             </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
