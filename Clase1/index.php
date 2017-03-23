<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new Slim\App();



$app->get('/', function ($request, $response, $args) {
    $response->write("(GET)ienvenido a Slim!");
    return $response;
});

$app->put('/', function ($request, $response, $args) {
    $response->write("(PUT)Bienvenido a Slim!");
    return $response;
});

$app->post('/', function ($request, $response, $args) {
    $response->write("(POST)Bienvenido a Slim!");
    return $response;
});



$app->get('/hello[/{name}]', function ($request, $response, $args) {
    $response->write("(GET) Hello, " . $args['name']);
    return $response;
})->setArgument('name', 'World!');



$app->post('/hello[/{name}]', function ($request, $response, $args) {
    $response->write("(POST) Hello, " . $args['name']);
    return $response;
})->setArgument('name', 'World!');



$app->put('/hello[/{name}]', function ($request, $response, $args) {
    $response->write("(PUT) Hello, " . $args['name']);
    return $response;
})->setArgument('name', 'World!');



$app->run();
