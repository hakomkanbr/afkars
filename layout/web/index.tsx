

import CoBanner from "components/ads-container/banner";
import CoFooter from "components/ads-container/footer";
import CoNavbar from "components/ads-container/navbar";
import { LayoutProps } from "../pageWithLayouts";

const WebLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <CoNavbar />
      <main style={{ backgroundColor: "#f9f9f969" }}>
        {children}
      </main>
      <CoFooter />
    </ >
  );
};

export default WebLayout;
