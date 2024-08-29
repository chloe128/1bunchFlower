import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Amy Smith",
    email: "Amy@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Steven Smith",
    email: "Steven@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
export default users;
