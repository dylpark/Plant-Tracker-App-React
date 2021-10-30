//
//

import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  const copyright = `Dylan Park © ${date}`;

  return (
    <footer className="flex flex-col sm:flex-row m-10 justify-between items-center h-auto">
      <div className="text-xs text-gray-300">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <p className="tracking-widest text-xs text-gray-400">{copyright}</p>
    </footer>
  );
}

export default Footer;
