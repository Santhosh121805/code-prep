import { supabase } from "../utils/supabaseClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) return res.status(401).json({ error: "User not found" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ error: "Incorrect password" });

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};

export const register = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert([{ email, password: hashedPassword }]);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "User registered successfully" });
};
