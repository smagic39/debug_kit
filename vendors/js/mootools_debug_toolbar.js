/* SVN FILE: $Id: cake.generic.css 7337 2008-07-13 23:28:45Z mark_story $ */
/**
 * Debug Toolbar Javascript.  Mootools 1.2 compatible
 *
 *
 * PHP versions 4 and 5
 *
 * CakePHP :  Rapid Development Framework <http://www.cakephp.org/>
 * Copyright 2006-2008, Cake Software Foundation, Inc.
 *								1785 E. Sahara Avenue, Suite 490-204
 *								Las Vegas, Nevada 89104
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @filesource
 * @copyright		Copyright 2006-2008, Cake Software Foundation, Inc.
 * @link			http://www.cakefoundation.org/projects/info/cakephp CakePHP Project
 * @package			cake
 * @subpackage		cake.cake.libs.
 * @since			CakePHP v 1.2.0.4487
 * @version			$Revision$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 * @license			http://www.opensource.org/licenses/mit-license.php The MIT License
 */
window.addEvent('domready', function() {
	DebugKit.Toolbar();
	DebugKit.NeatArray();
});
var DebugKit = {};
/**
 * Create all behaviors for neat array elements
 *
 */
DebugKit.NeatArray = function() {

}

/**
 * Add behavior for toolbar buttons
 *
 */
DebugKit.Toolbar = function() {
	var tabCollection = $$('#debug-kit-toolbar li > div');
	 
	$$('#debug-kit-toolbar .panel-tab a').addEvent('click', function(event) {
		event.stop();
		var buttonId = this.hash.substring(1, this.hash.length) + '-tab';
		var targetPanel = $(buttonId);
		if (!targetPanel) return;
		if (targetPanel.hasClass('active')) {
			tabCollection.removeClass('active').setStyle('display', 'none');
		} else {
			tabCollection.setStyle('display', 'none').removeClass('active');
			targetPanel.addClass('active').setStyle('display', 'block');
		}
		
	});
	
	//enable hiding of toolbar.
	var panelButtons = $$('#debug-kit-toolbar .panel-tab:not(.panel-tab.icon)');
	var toolbarHide = $('hide-toolbar').set('state', 'open');
	toolbarHide.addEvent('click', function(event) {
		event.stop();
		var state = this.get('state');
		if (state == 'open') {
			panelButtons.setStyle('display', 'none');
			this.set('state', 'closed')
		} else {
			panelButtons.setStyle('display');
			this.set('state', 'open');
		}
	});
}