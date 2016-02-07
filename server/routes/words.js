var express = require('express');
var router = express.Router();
var api = require('../api');

/**
 * @api {get} /words Request A Word For Hangman Game
 * @apiName GetWord
 * @apiGroup Word
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "word" : "bookworm"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/', api.words.get);

module.exports = router;
