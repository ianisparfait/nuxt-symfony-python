const validateEmail = (email: string): boolean => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return false;
  } else {
    return true;
  }
};

export {
  validateEmail,
};
