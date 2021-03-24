import { useState } from 'react';

const useToggle = () => {
   const [toggleEmail, setToggleEmail] = useState(false);
   const [togglePassword, setTogglePassword] = useState(false);
   const [toggleUsername, setToggleUsername] = useState(false);

   return {
      toggleEmail,
      setToggleEmail,
      togglePassword,
      setTogglePassword,
      toggleUsername,
      setToggleUsername,
   };
};

export default useToggle;
