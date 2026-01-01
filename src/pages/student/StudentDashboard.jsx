import { useState } from "react";
import Navbar from "../../components/Navbar";
import { companies } from "../../data/companies";

export default function StudentDashboard() {
  const [applied, setApplied] = useState([]);

  const handleApply = (companyId) => {
    if (applied.includes(companyId)) return;

  setApplied([...applied, companyId]);

  // --- NEW CODE ---
  const stored = JSON.parse(localStorage.getItem("applications")) || {};

  if (!stored[companyId]) {
    stored[companyId] = [];
  }

 stored[companyId].push({
  name: "Ayush Dixit",
  roll: "0201CS2210XX",
  branch: "CSE"
});


  localStorage.setItem("applications", JSON.stringify(stored));
  };

 return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">
      Available Companies
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            {company.name}
          </h3>

          <p className="text-gray-700">
            <span className="font-medium">Role:</span> {company.role}
          </p>

          <p className="text-gray-700 mb-4">
            <span className="font-medium">Package:</span> {company.package}
          </p>

         <button
  onClick={() => handleApply(company.id)}
  className={`w-full py-2 rounded-lg transition 
    ${applied.includes(company.id)
      ? "bg-green-500 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700 text-white"
    }`}
  disabled={applied.includes(company.id)}
>
  {applied.includes(company.id) ? "Applied ✅" : "Apply Now"}
</button>

        </div>

      ))}
    </div>
    <div className="mt-10 bg-white p-6 rounded-xl shadow">
  <h3 className="text-xl font-bold mb-4">Applied Companies</h3>

  {applied.length === 0 ? (
    <p className="text-gray-500">No applications yet.</p>
  ) : (
    <ul className="list-disc pl-6">
      {companies
        .filter(c => applied.includes(c.id))
        .map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
    </ul>
  )}
</div>
  </div>
  </div>
);

}



