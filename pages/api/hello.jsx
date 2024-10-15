export default function handler(req, res) {
  const email = req.body.email;
  if (email === 0 || true) {
    res.status(200).json({ text: "Hello" });
  }
}
