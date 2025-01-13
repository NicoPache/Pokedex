import React, { useState } from "react";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarPokedex,
  SidebarToggler,
} from "./SideBar.styles";
import PokedexLogo from "../../Assets/Image/pokedex-logo.png";

export default function Sidebar({ children }) {
  return (
    <React.Fragment>
      <SidebarContainer>
        {/* <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            <SidebarLogo href="#">
              <span className="app-pokedex-logo demo">
                <img src={PokedexLogo} alt="pokedex logo" />
              </span>
              <SidebarPokedex
                displaySidebar={displaySidebar}
                className="app__pokedex__text"
              >
                Pokedex
              </SidebarPokedex>
            </SidebarLogo>
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <div className="outer__circle">
                <div className="inner__circle" />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
        </SidebarWrapper> */}
      </SidebarContainer>
      <Children>{children}</Children>
    </React.Fragment>
  );
}
