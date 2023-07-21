import { Wrapper, Header, CTA, Points, Button } from "../GlobalStyle";
import { FaCheck } from "react-icons/fa"; // Import FontAwesome check icon
import { Square, SquareGrid, FlexContainer, TextBox } from "../GlobalStyle";
import leficard from "../images/LeFiCard.svg";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header>
        <Wrapper>
          <CTA             
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1, y: -16 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            <small>Financial Tech For Property Managers</small>
            <h1>Upgrade your P.M Agency</h1>
            <p>
              Cash advances for managed investment properties so you can scale
              your portfolio like a pro.
            </p>
            <Button>Contact Us</Button>
          </CTA>
          <Points>
            <div>
              <FaCheck /> {/* FontAwesome check icon */}
              <p>Not Debt</p>
            </div>
            <div>
              <FaCheck /> {/* FontAwesome check icon */}
              <p>No Paper Work</p>
            </div>
            <div>
              <FaCheck /> {/* FontAwesome check icon */}
              <p>Instant Cash</p>
            </div>
          </Points>
        </Wrapper>
      </Header>

      <section>
        <Wrapper>
          <CTA>
            <h2>Instantly Available Advances</h2>
            <p>
              Enable your clients to have financial flexibility with their
              rental income.
            </p>
          </CTA>
          <SquareGrid>
            <Square>
              <img   
              src={leficard} 
              alt="lefi card" />
            </Square>
            <Square>
              <img src={leficard} alt="lefi card" />
            </Square>
            <Square>
              <img src={leficard} alt="lefi card" />
            </Square>
            <Square>
              <img src={leficard} alt="lefi card" />
            </Square>
          </SquareGrid>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <CTA>
            <h2>Manage & Scale your High Quality Property Portfolio</h2>
            <p>
              Thats ok we invest in rental cashflows for the long haul too if
              you need to pay down debt or finance a deposit or renovation we
              have a solution for you.
            </p>
          </CTA>

          <FlexContainer>
            <TextBox>
              <small>Manage</small>
              <p>
                <strong>Recapitalise</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non dui a velit fermentum tincidunt in non lacus. Mauris
                accumsan aliquet felis.
              </p>
            </TextBox>
            <TextBox>
              <small>Scale</small>
              <p>
                <strong>Finance A deposit</strong>
              </p>
              <p>
                Proin non orci faucibus, feugiat risus ut, pulvinar nunc.
                Maecenas nec augue nec urna vulputate condimentum ac ac lacus.
                Proin accumsan lectus at mauris.
              </p>
            </TextBox>
          </FlexContainer>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <CTA>
            <h2>Upgrade your Agency Today</h2>
            <p>
              Stand out from the crowd and provide all the financial flexibility
              that other Agencies can’t.
            </p>
            <Button>Contact Us</Button>
          </CTA>
        </Wrapper>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
