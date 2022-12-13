class HomeController {
  index(req, res) {
    res.json({
      'Tudo ok': true,
    });
  }
}

export default new HomeController();
