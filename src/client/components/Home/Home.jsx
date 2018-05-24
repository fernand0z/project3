import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "react-emotion";
// import MenuIcon from "react-icons/lib/md/menu";
import { BREAKPOINTS, COLORS, UNITS_IN_PX, Z_INDICES } from "../../constants";
import { showLoggedOutMenuModal } from "../../actions";
import Button from "../Button";
import { PureComponent } from 'react';

// import LandingPageIntro from "../LandingPageIntro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MediaQuery from "../MediaQuery";
import ScrollIndicator from "../ScrollIndicator";

const GRADIENT_ANGLE = "-15deg";
const SCROLL_INDICATOR_DELAY = 2000;

class Home extends Component {
    state = {
    showScrollIndicator: false
    };

    ComponentDidMount() {
    this.timeoutId = window.setTimeout(() => {
    this.setState({ showScrollIndicator: true });
    }, SCROLL_INDICATOR_DELAY);

    window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
    }

    handleScroll = () => {
    if (this.state.showScrollIndicator) {
        this.setState({ showScrollIndicator: false });

    // Remove self once it fires.
    window.removeEventListener("scroll", this.handleScroll);
    }
    };

    render() {
    const { showLoggedOutMenuModal } = this.props;

    return [
        <FixedWrapper key="fixed">
        <MediaQuery>
        {breakpoint =>
            
            isDesktop(breakpoint) 
            
            }
        </MediaQuery>
    </FixedWrapper>,
    <HeroElem key="hero">
        <ScrollIndicatorWrapper isVisible={this.state.showScrollIndicator}>
        <ScrollIndicator />
        <br />
            Continue Scrolling to See Your Favorite TV Shows
        </ScrollIndicatorWrapper>

        <Header>
            <MaxWidthWrapper>
            <MediaQuery>
                {breakpoint =>
                isMobile(breakpoint) ? (
                    <HamburgerMenu onClick={showLoggedOutMenuModal}>
                    
                    </HamburgerMenu>
                ) : (
                    <Actions>
                    <Button color="blue" onClick={showLoggedOutMenuModal}>
                        Login
                    </Button>
                    </Actions>
                )
            }
            </MediaQuery>
            </MaxWidthWrapper>
        </Header>

        <MainContent>
            <Tagline>
            Our <Raleway>TV App</Raleway>
            </Tagline>
            <SubTagline>
            Keep track of your <strong>favorite shows</strong> and easily see when<br /><strong>new episodes </strong> are available.
            <br />
            </SubTagline>
        </MainContent>
        </HeroElem>,
        <Intro key="intro">
        <LandingPageIntro />
        </Intro>
    ];
    }
}

const FixedWrapper = styled.div`
    position: fixed;
    z-index: ${Z_INDICES.root};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: background-image: url("../images/static.gif");
    background-repeat: repeat;   
`;

//  +++++++++++++ LINEAR GRADIENT STYLE, IN CASE WE DON'T LIKE THE GIF +++++++++++++++++
    // linear-gradient(
    //   ${GRADIENT_ANGLE},
    //   ${COLORS.cyan.primary},
    //   ${COLORS.blue.primary} 35%,
    //   ${COLORS.purple.primary} 90%,
//   ${COLORS.pink.primary} 110%
// );

const Intro = styled.div`
    position: relative;
    z-index: 2;
`;

const HeroElem = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    color: ${COLORS.white};
`;

const ScrollIndicatorWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: ${UNITS_IN_PX[2]};
    left: 0;
    right: 0;
    font-size: 14px;
    font-weight: bold;
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transition: opacity 1000ms;

    @media ${BREAKPOINTS.sm} {
    display: none;
    }
`;

const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const LogoWrapper = styled.div`
    position: absolute;
    z-index: 1;
    top: ${UNITS_IN_PX[2]};
    left: ${UNITS_IN_PX[2]};
    transform: scale(0.8);
    transform-origin: left top;
`;

const Actions = styled.div`
    position: absolute;
    z-index: 3;
    top: ${UNITS_IN_PX[2]};
    right: ${UNITS_IN_PX[2]};
`;

const HamburgerMenu = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: ${UNITS_IN_PX[2]};
    right: ${UNITS_IN_PX[2]};
    width: ${UNITS_IN_PX[4]};
    height: ${UNITS_IN_PX[4]};
    line-height: ${UNITS_IN_PX[4]};
    border: none;
    background: rgba(255, 255, 255, 0.15);
    color: ${COLORS.white};
    font-size: 40px;
`;

const MainContent = styled.div`
    position: relative;
    z-index: 3;

    @media ${BREAKPOINTS.sm} {
    margin-top: 15%;
    }
`;

const Tagline = styled.h3`
    position: relative;
    font-size: 56px;
    line-height: 80px;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
    margin-bottom: ${UNITS_IN_PX[1]};

    @media ${BREAKPOINTS.xl} {
    font-size: 48px;
    line-height: 72px;
    }
    @media ${BREAKPOINTS.md} {
    font-size: 36px;
    line-height: 54px;
    }

    @media ${BREAKPOINTS.sm} {
    font-size: 32px;
    line-height: 50px;
    }

    @media ${BREAKPOINTS.xs} {
    font-size: 28px;
    line-height: 50px;
    }
`;

const SubTagline = styled.h5`
    position: relative;
    font-size: 38px;
    font-weight: normal;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);

    @media ${BREAKPOINTS.xl} {
    font-size: 32px;
    }
    @media ${BREAKPOINTS.md} {
    font-size: 28px;
    }

    @media ${BREAKPOINTS.sm} {
    font-size: 22px;
    }

    @media ${BREAKPOINTS.xs} {
    font-size: 18px;
    }
`;

const Raleway = styled.span`
    font-family: "Raleway";
    font-size: 62px;
    letter-spacing: -1px;

    @media ${BREAKPOINTS.xl} {
    font-size: 56px;
    line-height: 72px;
    }
    @media ${BREAKPOINTS.md} {
    font-size: 42px;
    line-height: 54px;
    }

    @media ${BREAKPOINTS.sm} {
    font-size: 36px;
    line-height: 54px;
    }

    @media ${BREAKPOINTS.xs} {
    font-size: 32px;
    line-height: 54px;
    }
`;

// =============Breakpoints for window sizes==========================
const getBreakpointFor = windowWidth =>
    Object.keys(BREAKPOINT_SIZES).find(
    name => windowWidth <= BREAKPOINT_SIZES[name]
    ) || 'xl';

const isMobile = breakpoint => {
    if (!breakpoint) {
    breakpoint = getBreakpointFor(window.innerWidth);
    }

    return breakpoint === 'xs' || breakpoint === 'sm' || IS_MOBILE_USER_AGENT;
};

const isDesktop = breakpoint => !isMobile(breakpoint);

const isLargeScreen = breakpoint => {
    if (!breakpoint) {
    breakpoint = getBreakpointFor(window.innerWidth);
    }

    return breakpoint === 'lg' || breakpoint === 'xl';
};

class LandingPageIntro extends PureComponent {
    state = {
    tick: 0,
    };

    headings = [
        <span>
        "I wonder when <ShowNamePlaceholder /> comes back..."
        </span>,
        <span>"I need something to watch."</span>,
        <span>
        "Has the new season of <ShowNamePlaceholder /> started?"
        </span>,
        <span>
        "What episode of <ShowNamePlaceholder /> am I at?"
        </span>,
    ];
};

export default ({ showLoggedOutMenuModal })(Home);
