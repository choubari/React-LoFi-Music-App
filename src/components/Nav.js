import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faCompactDisc } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>
        Chill <FontAwesomeIcon icon={faCompactDisc} /> Choub
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
