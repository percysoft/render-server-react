var express = require("express");

var path = require("path");

var React = require('react');
var renderToString = require("react-dom/server");
var App = require("../src/App.tsx");

const app = express();

app.use( express.static( path.resolve( __dirname, "../build" ) ) );

app.get( "/*", ( req, res ) => {
    const reactDom = renderToString(React.createElement(App));

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end(htmlTemplate(reactDom ) );
} );

app.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}