const express = require('express');
var router = express.Router();
const {mongoose} = require('../db/mongoose');
const shortid = require('shortid');
var {Url} = require('../models/Url');
const validUrl = require('valid-url');

router.get('/', (req,res) => {
    res.render('index');
});

router.post('/generateUrl', (req,res) => {
    let url = req.body.url;

    if(validUrl.isUri(url)){
    	const urlm = new Url({
	        _id: shortid.generate(),
	        url: req.body.url
	    });

	    urlm.save().then((urlita) => {
	        res.send(urlita._id)
	    }).catch((e) => {
	        res.send(e);
	    });
    }else{
    	res.send("InvalidURL");
    }    
});

router.get('/:url', (req,res) => {
    Url.findOne({_id: req.params.url})
        .then((link) => {
            res.redirect(`${link.url}`);
        }, (e) => {
            res.send(e);
        });
});

module.exports = router;