const authService = {
    login: async (username, password) => {
      // Simulate login process
      const userData = { username, role: username === 'admin' ? 'admin' : 'employee' };
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    },
    logout: () => {
      localStorage.removeItem('user');
    },
    getCurrentUser: () => {
      return JSON.parse(localStorage.getItem('user'));
    }
  };
  
  export default authService;
  