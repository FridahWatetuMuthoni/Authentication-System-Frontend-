import { createContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [access_token, setAccessToken] = useState(
    localStorage.getItem("access_token") || null
  );
  const [refresh_token, setRefreshToken] = useState(
    localStorage.getItem("refresh_token") || null
  );
  const [userID, setUserID] = useState(null);
  const [mode, setMode] = useState("dark");
  const [search, setSearch] = useState(null);

  const data = {
    userID,
    setUserID,
    mode,
    setMode,
    access_token,
    refresh_token,
    setAccessToken,
    setRefreshToken,
    search,
    setSearch,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalContext, GlobalContextProvider };
