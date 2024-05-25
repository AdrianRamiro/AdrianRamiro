import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import logo from "./logo.svg";
import "./app.css";

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <img src={logo} alt="logo" className="app-logo" />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
