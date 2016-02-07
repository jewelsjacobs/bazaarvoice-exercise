var express = require('express');
var router = express.Router();
var api = require('../api');

/**
 * @api {get} /words Request A Word For Hangman Game
 * @apiName GetWord
 * @apiGroup Word
 * @apiExample {curl} Example usage:
 * curl -X "GET" "http://localhost:3000/word"
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "word" : "bookworm"
 *     }
 */
router.get('/', api.words.get);

module.exports = router;
