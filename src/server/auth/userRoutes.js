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
  const { trackedShows, ...rest } = req.user.toJSON();
  res.json(rest);
});

router.get('/api/user/shows', (req, res) => {
  res.json(req.user.trackedShows);
});

router.post('/api/user/shows/:id', (req, res) => {
  req.user.addShow(req.params.id);
  res.end();
});

router.delete('/api/user/shows/:id', (req, res) => {
  req.user.removeShow(req.params.id);
  res.end();
});

router.patch('/api/user/shows/:showid/episode/:episodeid', (req, res) => {
  const { seen } = req.body;
  const { showid, episodeid } = req.params;
  console.log('patching episode', showid, episodeid, seen);
  req.user.patchEpisode(showid, episodeid, seen);
  res.end();
});

module.exports = router;