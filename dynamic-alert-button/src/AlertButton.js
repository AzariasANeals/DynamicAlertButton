import React from "react";

const AlertButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick} style={styles.button}>{children}</button>;
};

const styles = {
    button: {
      backgroundColor: "red",
      color: "white",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "10px 20px",
      border: "3px solid darkred",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: "0 4px darkred",
      transition: "all 0.2s",
    },
  };

export default AlertButton;
