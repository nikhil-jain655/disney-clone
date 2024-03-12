import styled from "styled-components";

const Header = () =>{
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" />
            </Logo>
            <NavMenu>
                menu
            </NavMenu>
        </Nav>
    )
}

const Nav = styled.div`
    position: fixed; // so that header should be fix even if we scroll
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between; // so that it can have items which is in each corner
    align-items: center;
    padding: 0 36px; // so that it has space between left and right screem
    letter-spacing: 1.5px;
    z-index: 3; // make sure header always stayes on top of screen
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap; // ???
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media (max-width: 768px) {
        display: none;
    }
`

export default Header;