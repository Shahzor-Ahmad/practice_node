const isString = (value) => typeof value === "string";
const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

const validateData = (name, email, user_type) => {
  if (!isString(name)) {
    throw new Error("Name must be a string");
  }

  if (!isString(email) || !isEmail(email)) {
    throw new Error("Email must be a valid email address");
  }

  //   if (!isNumber(age) || age <= 18) {
  //     throw new Error('Age must be a number greater than 18');
  //   }

  if (!isString(user_type)) {
    throw new Error("user_type must be valid data type");
  }
};

module.exports = { validateData };
