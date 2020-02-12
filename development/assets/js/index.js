import '../styles/index.scss';
import 'babel-core/register';
import 'babel-polyfill';
import $ from "jquery";
import getMobileMenu from './components/mobile-menu';
import detectBrowserAndOS from './components/crossbrowsering';

"use strict";
$(document).ready(async () => {
	//Browser detect
	detectBrowserAndOS();
	/*Menu*/
	getMobileMenu();
});