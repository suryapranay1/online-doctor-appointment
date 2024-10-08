import { createContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const value = {
    doctors,
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// PropTypes validation for the children prop
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is required and can be any renderable node
};

export default AppContextProvider;
