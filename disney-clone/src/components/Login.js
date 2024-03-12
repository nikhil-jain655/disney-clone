import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.png" alt="logo-1" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for and 
                        additional fee with Disney+ Subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="logo-2" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10vw;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display:flex;
    flex-direction: column;

      
    margin-bottom: 2vw;
    
    // flex-wrap:wrap;
    align-items: center;
    justify-content:center;
    margin-top: 0px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    /* transition-timing-function: ease-out;
    transition: opacity 0.2s; */
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063E5;
width: 100%;
letter-spacing: 1.5px;
/* margin-bottom: 12px; */
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483EE;
}
`;

const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 11px;
width: 100%;
margin: 0, 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;



export default Login;