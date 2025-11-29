import React from "react";
import useAuthContext from "../hooks/useAuthContext";

function Footer() {
  const { apiUser, loadingApiUser, apiError } = useAuthContext();

  return (
    <footer className="footer">
      <div>
        {loadingApiUser && <span>Loading API user...</span>}
        {apiError && <span>Error: {apiError}</span>}
        {apiUser && (
          <span>
            API user company: {apiUser.company?.name} | City:{" "}
            {apiUser.address?.city}
          </span>
        )}
      </div>
      <span className="footer-copy">© 2025 Context Assignment</span>
    </footer>
  );
}

export default Footer;
