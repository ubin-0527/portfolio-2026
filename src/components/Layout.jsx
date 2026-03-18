import { useState, useCallback, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import PagePlaque from "./PagePlaque";
import "./Layout.css";

const SIDENAV_HIDDEN_ROUTES = ["/projects"];

function Layout() {
  const { pathname } = useLocation();
  const [isNavHidden, setIsNavHidden]     = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  useEffect(() => {
    setIsSideNavOpen(!SIDENAV_HIDDEN_ROUTES.includes(pathname));
  }, [pathname]);

  const handleToggleFullscreen = useCallback(() => {
    setIsNavHidden((prev) => !prev);
  }, []);

  const handleToggleSideNav = useCallback(() => {
    setIsSideNavOpen((prev) => !prev);
  }, []);

  const sideNavVisible = !isNavHidden && isSideNavOpen;

  return (
    <div className="layout">
      <TopNavBar
        contentVisible={!isNavHidden}
        onToggleFullscreen={handleToggleFullscreen}
        onToggleSideNav={handleToggleSideNav}
      />
      <SideNavBar isVisible={sideNavVisible} />
      <PagePlaque  isVisible={sideNavVisible} />
      <Outlet />
    </div>
  );
}

export default Layout;
