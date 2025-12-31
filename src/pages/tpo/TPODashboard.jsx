import { useState } from "react";
import Navbar from "../../components/Navbar";
import { companies as initialCompanies } from "../../data/companies";

export default function TPODashboard() {
    const [openCompanyId, setOpenCompanyId] = useState(null);

     const applications =
    JSON.parse(localStorage.getItem("applications")) || {};

  const [companies, setCompanies] = useState(initialCompanies);
  const [form, setForm] = useState({
    name: "",
    role: "",
    package: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCompany = () => {
    if (!form.name || !form.role || !form.package) return;

    setCompanies([
      ...companies,
      {
        id: Date.now(),
        ...form
      }
    ]);

    setForm({ name: "", role: "", package: "" });
  };

  const handleDelete = (id) => {
    setCompanies(companies.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar role="TPO" />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">TPO Dashboard</h2>

        {/* Add Company */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="font-semibold mb-4">Add Company</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="name"
              placeholder="Company Name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="role"
              placeholder="Role"
              value={form.role}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="package"
              placeholder="Package (LPA)"
              value={form.package}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          <button
            onClick={handleAddCompany}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Company
          </button>
        </div>

        {/* Company List */}
        <div className="space-y-4">
          {companies.map(company => (
            <div
              key={company.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold">{company.name}</h4>
                <p>Role: {company.role}</p>
                <p>Package: {company.package} LPA</p>
                <p className="text-gray-700">
  <span className="font-medium">Applied Students:</span>{" "}
  {applications[company.id]?.length || 0}
</p>
             <button
  onClick={() =>
    setOpenCompanyId(
      openCompanyId === company.id ? null : company.id
    )
  }
  className="mt-2 text-sm text-blue-600 hover:underline"
>
  {openCompanyId === company.id ? "Hide Applicants" : "View Applicants"}
</button>
           {openCompanyId === company.id && (
  <div className="mt-3 bg-gray-50 p-3 rounded-lg">
    {applications[company.id]?.length > 0 ? (
     <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
  {applications[company.id].map((student, index) => (
    <li key={index}>
      {student.name} ({student.branch}) – {student.roll}
    </li>
  ))}
</ul>

    ) : (
      <p className="text-sm text-gray-500">No applications yet</p>
    )}
  </div>
)}


              </div>

              <button
                onClick={() => handleDelete(company.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

