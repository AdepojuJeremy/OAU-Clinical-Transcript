import users from "@/_data/users.json";
export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json({ users: users });
  else if (req.method === "POST") {
    const newUser = req.body;
    console.log(newUser);
    users.push(newUser);
    res.status(201).json({ message: "Login Successful", user: newUser });
  }
}
