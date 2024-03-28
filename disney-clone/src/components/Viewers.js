import styled from "styled-components";

const Viewers = (props) => {

    const imgs = [
        'disney', 'marvel', 'national','pixar', 'starwars'
    ]

    const imgs1 = imgs.map((img, index) => {
        return <Wrap key={index}><img src={`/images/viewers/viewers-${img}.png`} alt={img} /></Wrap>
    })

    return (
        <Container>
            {imgs1}
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns:  repeat(5, minmax(0, 1fr));
    @media (max-width: 768px){
        grid-template-columns:  repeat(1, minmax(0, 1fr));

    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);;

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }
    /* width: 25px;
    height: 25px; */

    /* img {
        width: 100px;
        height: 100px;
    } */
`

export default Viewers;