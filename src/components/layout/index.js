import Header from "./header";
import Footer from "./footer";
import "styles/layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
