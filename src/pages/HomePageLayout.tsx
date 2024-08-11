import Header from "../components/pages/homepage/Header";
import Sidebar from "../components/pages/homepage/Sidebar";
import DetailsPane from "../components/pages/homepage/DetailsPane";

const HomePageLayout = () => {
  return (
    <div className="flex max-h-svh flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <DetailsPane />
      </div>
    </div>
  );
};

export default HomePageLayout;
