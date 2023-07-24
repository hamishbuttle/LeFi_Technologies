import React, { useEffect, useState, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../components/AuthProvider';
import styled from 'styled-components';
import { fetchPropertiesAndAdvances } from '../helpers';
import {Link} from "react-router-dom";
// import { AdvanceContainer, AdvanceAmountContainer, RepaymentAmountContainer, TermsContainer, 
//   AdvanceBreak, AdvanceRequestContainer, TermsAndConditionsContainer } from '../components/styles/AdvanceCardStyles';
import logo from "../images/logo.svg";
import { doc, updateDoc } from "firebase/firestore"; // Import doc and updateDoc functions
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from "react-icons/fa"; // Import FontAwesome check icon


export const AdvanceContainer = styled.div`
padding: 2rem 2rem;
border-radius: 1rem;
background: rgba(255,255,255,.1);
box-shadow: 0px 4px 26px 0px rgba(0, 0, 0, 0.4);
position: relative;
border-left:4px solid #454344;
border-top: 4px solid #454344;
img {
    position: absolute;
    right: 2rem;
    top: 2rem;
    height: 24px;
    opacity: 1;
}

`;

export const AdvanceAmountContainer = styled.div`  
h3 {
font-size: 2rem;
font-weight: 400;
line-height: 0;
}
p {
font-size: 14px;
color: #dedede
}
`
export const RepaymentAmountContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0;
height: auto;
line-height: 0;
p:first-of-type {
color: gray;
}
`
export const TermsContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0;
line-height: 0;
p:first-of-type {
color: gray;
}
`
export const AdvanceBreak = styled.div`
width: 100%;
  height: 8px;
  border-radius: 100rem;
  background: ${props => (props.hasAgreedToTerms ? 'linear-gradient(172deg, #FFC701 0%, #FFB801 100%);' : 'rgba(255,255,255,.1)')};
  margin: 1rem 0;
`
export const AdvanceRequestContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: .4rem 0rem;

}
`

export const TermsAndConditionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1rem;
input {
    margin-right: 0.5rem;
}
`;

// export const ErrorMsg = styled.p`
//     color: red;
// `;

const DashboardContainer = styled.div`
  padding: 1.6rem;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 80px;
  max-width: 960px;
  margin: auto;
//   border-left: 1px solid #323031;
//   border-right: 1px solid #323031;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  } 

  h2 {
    font-size: 32px;
    margin: 2rem 0rem;

    font-weight: 500;
  }
`;

const PropertyColumn = styled.div`
// padding: .8rem 1.6rem;
margin-bottom: 4rem;
`;

const PropertyDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .2rem;
  padding: .8rem 1.6rem;
  line-height: 1.6;
  border-bottom: 1px solid #323031;
`;

const AdvanceColumn = styled.div`
//   text-align: left;
//   padding: 0 .6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;

const PropertyCard = styled.div`
//   margin-top: 1.6rem;
`;

const AdvanceCard = ({ advanceId, advanceAmount, repaymentAmount, term, onClickRequest, isLoading }) => {
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);

  const handleCheckboxChange = () => {
    setHasAgreedToTerms((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasAgreedToTerms) {
      // setErrorMsg('Please accept the terms & conditions');
    } else {
      onClickRequest();
    }
  };

  return (
    <AdvanceContainer>
      <img src={logo} alt="logo" />
      <AdvanceAmountContainer>
        <h3>{`$${advanceAmount}`}</h3>
        <p>ADVANCE</p>
      </AdvanceAmountContainer>
      <RepaymentAmountContainer>
        <p>Repayment:</p>
        <p>{`$${repaymentAmount}`}</p>
      </RepaymentAmountContainer>
      <TermsContainer>
        <p>Term:</p>
        <p>{`${term} Month(s)`}</p>
      </TermsContainer>
      <AdvanceBreak hasAgreedToTerms={hasAgreedToTerms} />
      <form onSubmit={handleSubmit}>
        <TermsAndConditionsContainer>
          <label>
            I agree to the <Link to="/terms ">Terms and Conditions</Link>
          </label>
          <input type="checkbox" checked={hasAgreedToTerms} onChange={handleCheckboxChange} />
        </TermsAndConditionsContainer>  
        <AdvanceRequestContainer>
          <p>
            <strong>{`$${advanceAmount}`}</strong> Cash Advance
          </p>
          <button type="submit" disabled={!hasAgreedToTerms || isLoading}>
            {isLoading ? 'Loading...' : 'Advance'}
          </button>
        </AdvanceRequestContainer>
      </form>
    </AdvanceContainer>
  );
};

const StyledPropDetails = styled.div`
    background-color: rgba(255,255,255,.01);
    border: 1px solid rgba(255,255,255,.08);
    padding: .2rem;
    border-radius: 16px;
`;

const Expander = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1.6rem;
`;

const PropertyDetails = ({ properties }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <StyledPropDetails onClick={handleClick}>
        <Expander><h3>Your Account Details</h3>{isOpen ? '▼' : '►'}</Expander>
        {isOpen && properties.map((property, index) => (
          <PropertyCard key={`${property.id}-${index}`}>
            <PropertyDetail>
              <span>Address:</span> <span>{property.data.address}</span>
            </PropertyDetail>
            <PropertyDetail>
              <span>Average Monthly Rent:</span> <span>{property.data.averageMonthlyRent}</span>
            </PropertyDetail>
            <PropertyDetail>
              <span>Rental Type:</span> <span>{property.data.rentalType}</span>
            </PropertyDetail>
            <PropertyDetail>
              <span>BSB:</span> <span>{property.data.bsb}</span>
            </PropertyDetail>
            <PropertyDetail>
              <span>Account:</span> <span>{property.data.account}</span>
            </PropertyDetail>
          </PropertyCard>
        ))}
      </StyledPropDetails>
    );
  };

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [advances, setAdvances] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchPropertiesAndAdvancesData = async () => {
      try {
        setProperties([]);
        setAdvances([]);

        if (authContext.authUser) {
          await fetchPropertiesAndAdvances(db, authContext.authUser, setProperties, setAdvances);
        }
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      }
    };

    fetchPropertiesAndAdvancesData();
  }, [authContext]);

  const handleRequestAdvance = async (advanceId) => {
    try {
      const advanceDocRef = doc(db, "advances", advanceId);
      await updateDoc(advanceDocRef, { status: "Pending" });
      window.alert('Your advance request has been sent and is pending approval. We will be in touch shortly. Thanks, the LeFi Team!');
    } catch (error) {
      console.error('Error updating advance status:', error);
      window.alert('Failed to send advance request. Please try again later.');
    }
  };

  return (
    <div>
    <Navbar />
      <DashboardContainer>
        <PropertyColumn>
          <h2>Property</h2>
          <p>
            Welcome to your LeFi Account. We're proud to support you in growing your real estate portfolio. Use this advance to access your
            future rental income when you need it.
          </p>
          {/* <ul>
            <li><FaCheck />Instant Capital</li>
            <li><FaCheck />No interest</li>
            <li><FaCheck />No fees</li>
            <li><FaCheck />Automatic</li>
          </ul> */}

          <PropertyDetails properties={properties} />
        </PropertyColumn>
        <h2>Advances</h2>
        <AdvanceColumn>
          

          {advances.map((advance, index) => (
            <AdvanceCard
              key={`${advance.id}-${index}`}
              advanceId={advance.id}
              advanceAmount={advance.data.amount}
              repaymentAmount={advance.data.repayment}
              term={advance.data.termMonths}
              onClickRequest={() => handleRequestAdvance(advance.id)}
              isLoading={isLoading}
            />
          ))}
        </AdvanceColumn>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default Dashboard;

