import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [values, setValues] = useState(true);

  const state = { values, setValues };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};
