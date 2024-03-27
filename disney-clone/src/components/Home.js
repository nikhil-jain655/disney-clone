import styled from 'styled-components';
import ImgSlider from './imgSlider';
import Viewers from './Viewers';

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    /* background-image: url('./images/home-background.png'); */
    /* height: 100vh; */
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url('./images/home-background.png') center center / cover 
        no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home;