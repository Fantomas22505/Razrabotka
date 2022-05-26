const express = require('express');
const router = express.Router();
const {Team, Player} = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
 const teams = await Team.findAll();
 console.log(teams);
  res.render('index', { title: 'Express', teams });
});


router.get('/players/:idTeam', async function(req, res, next) {
 const idTeam = req.params.idTeam;
 const team = await Team.findByPk(idTeam);

 const players = await Player.findAll({where: {teamId:idTeam}});

 console.log(players);
 res.render('players', { title: 'Express', team, players });
});
 router.get('/addTeam', async function (req,res,next){
  res.render('addTeam', {title: 'Add_Team'});
});
router.post('/addTeam', async function (req, res, next) {
 const team = new Team({name: req.body.teamName});
 await team.save();
 res.redirect('/')
});

router.get('/addPlayer', async function (req, res, next) {
 const teams = await Team.findAll();
 res.render('addPlayer', {title: 'AddTeam:TestOne', teams});
});

router.post('/addPlayer', async function (req, res, next) {
 const player = new Player(req.body);
 await player.save();
 res.redirect('/');
});


module.exports = router;
