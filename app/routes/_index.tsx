import type { MetaFunction } from "@remix-run/cloudflare";
import logo from "../logo.webp";
import "../app.css";

export const meta: MetaFunction = () => {
  return [
    { title: "AdrianRamiro.com" },
    {
      name: "description",
      content: "AdrianRamiro.com testbed for Remix and Cloudflare Pages",
    },
  ];
};

export default function Index() {

  return (
    <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
  );
}
