const express = require('express');
const router = express.Router();
const {Office, PC} = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const offices = await Office.findAll();
  console.log(offices);
  res.render('index', { title: 'Express', offices });
});


router.get('/pcs/:idOffice', async function(req, res, next) {
  const idOffice = req.params.idOffice;
  const office = await Office.findByPk(idOffice);

  const pcs = await PC.findAll({where: {officeId:idOffice}});

  console.log(pcs);
  res.render('pcs', { title: 'Express', office, pcs });
});
router.get('/addOffice', async function (req,res,next){
  res.render('addOffice', {title: 'Add_Office'});
});
router.post('/addOffice', async function (req, res, next) {
  const office = new Office({name: req.body.officeName});
  await office.save();
  res.redirect('/')
});

router.get('/addPC', async function (req, res, next) {
  const offices = await Office.findAll();
  res.render('addPC', {title: 'addOffice:TestOne', offices});
});

router.post('/addPC', async function (req, res, next) {
  const pc = new PC(req.body);
  await pc.save();
  res.redirect('/');
});


module.exports = router;
