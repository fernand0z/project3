const router = require('express').Router();

function requireAuth(req, res, next) {
  if(!req.user) {
    res.status(401).end();
  } else {
    next();
  }
}

// require quth for api routes
router.use('/api', requireAuth);

router.get('/api/user', (req, res) => {
  res.json(req.user);
});

router.get('/api/user/show', (req, res) => {
  res.json(req.user.trackedShows);
});

router.post('/api/user/show/:id', (req, res) => {
  req.user.addShow(req.params.id);
  res.end();
});

router.delete('/api/user/show/:id', (req, res) => {
  req.user.removeShow(req.params.id);
  res.end();
});

router.get('/api/user/show/:id', (req, res) => {

});

router.patch('/api/user/show/:showid/episode/:episodeid', (req, res) => {
  const { seen } = req.body;
  const { showid, episodeid } = req.params;
  req.user.patchEpisode(showid, episodeid, seen);
  res.end();
});

module.exports = router;