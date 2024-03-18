import styled from "styled-components";
import { auth, googleAuthProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const Header = () => {

    const handleAuth = async () =>{
        try{
            let result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
        } catch (error) {
            console.error("Error while sining: ", error)
        }
    }
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="logo" />
            </Logo>
            <NavMenu>
                <a href='/home'>
                    <img src="/images/home-icon.svg" alt="home" />
                    <span>HOME</span>
                </a>
                <a href='/search'>
                    <img src="/images/search-icon.svg" alt="search" />
                    <span>SEARCH</span>
                </a>
                <a href='/watchlist'>
                    <img src="/images/watchlist-icon.svg" alt="watchlist" />
                    <span>WATCHLIST</span>
                </a>
                <a href='/originals'>
                    <img src="/images/original-icon.svg" alt="original" />
                    <span>ORIGINALS</span>
                </a>
                <a href='/movies'>
                    <img src="/images/movie-icon.svg" alt="movie" />
                    <span>MOVIES</span>
                </a>
                <a href='/series'>
                    <img src="/images/series-icon.svg" alt="series" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Login onClick={handleAuth}>Login</Login>
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
    min-width: 80px;
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

    a {
        display: flex;
        align-items: center; 
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index : auto;
            margin-right: 5px;
        }
        
        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            line-height: 1.08;
            letter-spacing: 1.42px;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;


        &:before {
            content: '';
            display: block;
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            height: 2px;
            /* opacity: 0; */

            // so that the line puts underneeth of span
            position: absolute;
            left: 0px;
            right: 0px;

            transform-origin: center;
            transform: scaleX(0);
            // for smooth transition
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
            visibility: hidden;
            width: auto;
        }
    }

    &:hover {
        span:before {
            transform: scaleX(1);
            visibility: visible;
            /* opacity: 1; */
        }
    }
}
`

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 200ms ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

export default Header;