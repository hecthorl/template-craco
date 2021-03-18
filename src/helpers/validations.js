const validations = (touched, err) => {
   if (touched && err) return 'opacity-1';
   return 'opacity-0';
};

export default validations;
