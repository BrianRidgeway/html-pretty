var html    = require('html'),
    express = require('express'),
    router  = express.Router();

router.post( '/prettyhtml', function( req, res, next ){
  var rawHtml = req.body.rawHtml;
  var format = {};
  if( req.body.format ){
    format = JSON.parse( req.body.format );
  }
  var prettyHtml = html.prettyPrint( rawHtml, format );
  res.json({ prettyHtml: prettyHtml, rawHtml: rawHtml, format: format });
})

module.exports = router;
