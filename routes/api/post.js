const express = require('express');
const router = express.Router();

//Post Model 
const Post = require('../../models/Post');

// Controller 
const {getAllPosts, createNewPost, getPostBasedOnSuburb} = require('./../../controllers/post_controller');

// @route   POST api/post
// @desc    Create post

router.get('/', getAllPosts);
router.post('/create', createNewPost);
router.get('/suburb', getPostBasedOnSuburb)



module.exports = router;