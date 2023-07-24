import { collection, getDocs, query, where } from 'firebase/firestore';

export const fetchPropertiesAndAdvances = async (db, authUser, setProperties, setAdvances) => {
  if (authUser) {
    const userUID = authUser.uid;

    const propertiesSnapshot = await getDocs(
      query(collection(db, 'properties'), where('userId', '==', userUID))
    );
    const propertiesData = propertiesSnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    setProperties(propertiesData);

    const advancesData = [];
    
    // Fetch advances for each property
    for (const property of propertiesData) {
      const advancesSnapshot = await getDocs(
        query(collection(db, 'advances'), where('propertyId', '==', property.id))
      );
      const propertyAdvancesData = advancesSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
        propertyId: property.id,
      }));
      advancesData.push(...propertyAdvancesData);
    }

    setAdvances(advancesData);
  }
};

export const sendMail = async (email, property, advanceAmount, term, repaymentAmount, bsb, account) => {
  const url = "https://us-central1-lefi-ae588.cloudfunctions.net/sendMail";
  // Define the data
  const data = {
    email,
    property,
    advanceAmount,
    term,
    repaymentAmount,
    bsb,
    account,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Send data to your Firebase function
    });

    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }

    const jsonResponse = await response.json();

    console.log('Email sent successfully!', jsonResponse);
  } catch (error) {
    console.error('There was an error!', error);
  }
};