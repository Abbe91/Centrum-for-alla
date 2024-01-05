export const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      throw new Error('Something went wrong. Please try again.');
    }
  };
  
  export const fetchMaleUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?gender=male');
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      throw new Error('Error fetching male user.');
    }
  };
  
  export const fetchFemaleUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?gender=female');
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      throw new Error('Error fetching female user.');
    }
  };
  