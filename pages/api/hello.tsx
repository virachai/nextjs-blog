export default function handler(req, res) {
  const email = req.body.email;
  if (email) {
    res.status(200).json({ text: 'Hello' });
  }
}
