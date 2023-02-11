import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./protected";
import Layout from "components/layout";
import PageNotFound from "pages/pageNotFound";
import LazyLoader from "./lazyLoader";

const Index = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LazyLoader page="login" />} />
          <Route
            path="/"
            element={<Protected Component={<LazyLoader page="home" />} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Index;
