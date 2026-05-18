import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

const db = new pg.Client({
  user: "deenadheena212gmail.com",
  host: "localhost",
  database: "msme",
  password: "thina1125",
  port: 5432,
});
db.connect()
  .then(() => console.log("DB connected"))
  .catch(err => console.log("DB connection error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function msme() {
  const result = await db.query("SELECT * FROM public.users");
  return result.rows;
}

app.get("/", async (req, res) => {
  try {
    const items = await msme();
    res.render("HomePage.jsx", {
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading page");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const {firstName, lastName, MobileNumber, gender, password, ConfirmPassword, email} = req.body;

    await db.query(
      "INSERT INTO users (first_name, last_name, mobile_number, gender, password, confirm_password, email) VALUES ($1, $2, $3, $4, $5, $6, $7)"
      [firstName, lastName, MobileNumber, gender, password, ConfirmPassword, email]
    );

    res.json({ message: "User created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});