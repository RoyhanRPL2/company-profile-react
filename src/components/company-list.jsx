import CompanyCard from "../components/company-card.jsx";
import UberIcon from "../assets/uber-icon.svg";

function companyList() {
  return (
    <>
      <section className="flex lg:flex-row flex-col w-full">
        <CompanyCard
          title="Uber Technologies, Inc."
          description="Uber Technologies, Inc. is an American technology company. Its services include ride-hailing, food delivery, package delivery, couriers, and a freight transportation."
          logo={UberIcon}
          category="Transportation"
          image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          totalInvesment="$100 million"
          year="2011"
        />
        <CompanyCard
          title="Uber Technologies, Inc."
          description="Uber Technologies, Inc. is an American technology company. Its services include ride-hailing, food delivery, package delivery, couriers, and a freight transportation."
          logo={UberIcon}
          category="Transportation"
          image="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          totalInvesment="$100 million"
          year="2011"
        />
        <CompanyCard
          title="Uber Technologies, Inc."
          description="Uber Technologies, Inc. is an American technology company. Its services include ride-hailing, food delivery, package delivery, couriers, and a freight transportation."
          logo={UberIcon}
          category="Transportation"
          image="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          totalInvesment="$100 million"
          year="2011"
        />
      </section>
    </>
  );
}

export default companyList;
