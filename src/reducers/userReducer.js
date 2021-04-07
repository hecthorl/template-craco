const userReducer = (userState, action) => {
   switch (action.type) {
      case 'login':
         return;

      default:
         return userState;
   }
};

export default userReducer;
