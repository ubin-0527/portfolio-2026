import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import PagePlaque from "./PagePlaque";
import "./Layout.css";

function Layout() {
  const [isNavHidden, setIsNavHidden]     = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

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
