/*

   Copyright 2017   Jan Kammerath

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

app.control = {
	visible: false,

	/* initialises the control ui */
	init: function(){
		/* start the EPG data interval */
	},

	/* toggles the control ui */
	toggle: function(forceOut = false){
		if(app.control.visible == true
			|| forceOut == true){
			/* fade out to bottom */
			$("#control").animate({
				opacity: 0,
				bottom: ($("#control").outerHeight()+100)*-1
			}, 500);

			/* set indicator to false */
			app.control.visible = false;
		}else{
			/* fade in from bottom */
			$("#control").animate({
				opacity: 0.8,
				bottom: 30
			}, 500);

			/* set indicator to true */
			app.control.visible = true;
		}
	}
}