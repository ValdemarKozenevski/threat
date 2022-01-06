﻿'use strict';

var angular = require('angular');

window.jQuery = require('jquery');
require('bootstrap');
require('angular-route');
require('angular-ui-bootstrap');
require('./templates');
require('./common');
angular.module('tdCore', ['common', 'ui.bootstrap', 'ngRoute', 'templates']);
require('./services/joint.shapes.tm');
require('./config');
require('./services');
require('./diagrams');
require('./layout');
require('./threatmodels');