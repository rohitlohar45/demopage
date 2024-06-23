import React from "react";

const ComingSoon = ({ category }) => {
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div style={styles.container}>
      <h1
        style={styles.heading}
        className="playfont wow flipInX"
        data-wow-delay=".5s"
      >
        We are adding more projects in the future for the{" "}
        <span style={styles.category}>{capitalizedCategory}</span> category.
      </h1>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: "50px",
    color: "#333",
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "1000px",
  },
  category: {
    fontWeight: "bold",
    color: "#b23a48",
  },
};

export default ComingSoon;
