const homePage = (req, res) => {
  res.send("homepage 123");
};

const example = (req, res) => {
    res.render("example");
}
module.exports = {homePage, example};