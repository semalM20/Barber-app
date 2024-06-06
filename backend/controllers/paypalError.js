const payFailed = async (req, res) => {
  // return res.redirect("http://localhost:5800/failed");
  return res.redirect(`${process.env.fRONTEND_URL}/failed`);
};

module.exports = payFailed;
