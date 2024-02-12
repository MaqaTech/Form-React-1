export const validate = (name, value) => {
  let error = "";

  switch (name) {
    case "fullname":
      if (value.length < 3) {
        error = "Mail 3 herifden cox olmalidir";
      }
      break;
    case "email":
      if (!value.includes("@")) {
        error = "Email must include @";
      }
      break;
    case "password":
      let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (!regex.test(value)) {
        error =
          "Parol 8 den az olmamalidir";
      }
      break;
    case "ageRange":
      if (!value) {
        error = "Age Range is required";
      }
      break;
    default:
      break;
  }

  return error;
};
