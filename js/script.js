const remote = require('electron').remote;
const {dialog} = require('electron').remote;

const fs = require('fs-extra');

require('./custom_modules/utils/enableContextMenu.js')();

const stripObservers = function(obj) {
	return JSON.parse(JSON.stringify(obj, null, 4));
}

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isLeftNavVisible: true,
		leftNavWidth: 30,
		isRightNavVisible: true,
		rightNavWidth: 300
	},
	actions: {
		
	},
	mutations: {
		toggleLeftNav: function(state) {
			state.isLeftNavVisible = !state.isLeftNavVisible;
		},
		toggleRightNav: function(state) {
			state.isRightNavVisible = !state.isRightNavVisible;
		}
	}
});

const vm = new Vue({
	el: '#main-app',
	store: store
});

