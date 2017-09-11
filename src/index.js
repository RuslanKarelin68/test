/**
 * Created by Rus on 11.09.2017.
 */
require('./less');
var $ = require('jquery');
var User = require('./user');
var b = new User('bbb');
b.get = function() {};
$('body').html('HELLO');
