import { lazy, Suspense } from "react";
import Spinner from "components/common/spinner";

const LazyLoader = ({ page }) => {
  const LazyComponent = lazy(() => import(`pages/${page}`));

  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoader;
