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
            <small>Financial Technology For Property Managers</small>
            <h1>Upgrade your PM Agency</h1>
            <p>
              Unlock cash advances for your clients so they can manage and grow their portfolio with ease.
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
              Enable your clients to have instant financial flexibility with their
              rental income as soon as they're onboard.
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
                If you are under mortgage stress don't worry, you can bring forward your future rental income to cover your cashflow requirments.
              </p>
            </TextBox>
            <TextBox>
              <small>Scale</small>
              <p>
                <strong>Finance A deposit</strong>
              </p>
              <p>
                If you havn't built up home equity or have enough cash to take advantage of an opportnuity, our experts can help you finance a deposit through cash advance.
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
