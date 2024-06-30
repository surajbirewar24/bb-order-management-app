const customerService = {
    addCustomer: async (customer) => {
      // Simulate a POST request to add a customer
      // Replace with actual API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: 200, data: customer });
        }, 1000);
      });
      
      if (response.status !== 200) {
        throw new Error('Failed to add customer');
      }
  
      return response.data;
    },
  };
  
  export default customerService;
  