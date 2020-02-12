import $ from "jquery";
import { detect } from 'detect-browser';

/**
 * Detect Browser and OS
 */

export default function detectBrowserAndOS() {
	let siteBody = $('body');
	const browser = detect();
	if (browser) {
		siteBody.attr('data-browser', browser.name);
		siteBody.attr('data-browser-version', browser.version);
		siteBody.attr('data-os', browser.os);
		if (browser.name === 'ie' && Math.round(parseInt(browser.version)) <= 10) {
			updateYourBrowser(Math.round(parseInt(browser.version)));
		}
	}
}