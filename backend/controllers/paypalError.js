const payFailed = async (req, res) => {
  return res.redirect("http://localhost:5800/failed");
};

module.exports = payFailed;
