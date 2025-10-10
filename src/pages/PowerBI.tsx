// PowerBi.tsx
import React from "react";

const PowerBi: React.FC = () => {
  return (
    <div className="content">
      <h1>Power BI Dashboard: Customer Return Rate</h1>
      <p>
        This interactive dashboard analyzes customer return rates, providing
        insights into product performance and trends over time. Click on the
        visuals to filter and explore the data.
      </p>

      <div className="powerbi-container">
        <iframe
          title="WGU D211 Power BI"
          width="1140"
          height="541.25"
          src="public/projects/Power_BI_Sample.pbix"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBi;
