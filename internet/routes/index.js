var express = require('express');
var router = express.Router();
let {Team, Player, log}=require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin Login' });
});




router.get('/visitors', function(req, res, next) {
  res.render('visitors', { title: 'Visitor menu' });
});

router.get('/Teams', async function(req, res, next) {

  let teams=await Team.findAll();
  console.log(teams);

  res.render('Teams', { title: 'Teams', teams });
});

router.get('/players', async function(req, res, next) {
  let playersAll=await Player.findAll();
  console.log(playersAll);

  res.render('players', {title: 'All Players', playersAll});
});

router.get('/detail/:idTeam', async function (req, res, next) {
  const idTeam = req.params.idTeam;
  const team = await Team.findByPk(idTeam);
const num = idTeam;

  const players = await Player.findAll({where: {teamId: idTeam}});



 // const players1 = await team.getPlayers();


  res.render('detail', {title: 'Detail', team, players, num});
});

router.get('/addAdmin', async function (req, res, next) {

  res.render('addAdmin', {title: 'addAdmin', teams});
});

router.post('/addAdmin', async function (req, res, next)
{
log.create ({
  login: req.body.login,
  password: req.body.password
})
    .then (res=> {
      console.log(res);
    }) .catch(err=>console.log(err));

  res.redirect('/')
});


module.exports = router;
