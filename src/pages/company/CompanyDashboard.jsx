import Navbar from "../../components/Navbar";
import { companies } from "../../data/companies";

export default function CompanyDashboard() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h2>Company Listings</h2>

        {companies.map((company) => (
          <div key={company.id} style={{ marginBottom: "10px" }}>
            <b>{company.name}</b> – {company.role}
          </div>
        ))}
      </div>
    </>
  );
}



