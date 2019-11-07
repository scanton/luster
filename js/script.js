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
		projectFolder: null,
		isLeftNavVisible: false,
		leftNavWidth: 300,
		isRightNavVisible: true,
		rightNavWidth: 300,
		layers: [
			{label: 'Layer 1', color: '#00FF00', frames: []}, 
			{label: 'Layer 2', color: '#FF0000', frames: []}, 
			{label: 'Layer 3', color: '#0000FF', frames: []}, 
			{label: 'Layer 4', color: '#FFFF00', frames: []}, 
			{label: 'Layer 5', color: '#FF00FF', frames: []}
		],	
		stageWidth: 600,
		stageHeight: 400,
		stageColor: '#FFFFFF',
		selectedLayer: 0,
		fillColor: '#0066CC',
		strokeColor: null,
		selectedTool: 'select',
		isObjectSnappingEnabled: false,
		lastStrokeColor: '#000000',
		lastFillColor: '#0066CC'
	},
	actions: {
		
	},
	mutations: {
		selectLayer: function(state, index) {
			state.selectedLayer = index;
		},
		setFillColor: function(state, val) {
			state.fillColor = val;
			if(val != null) {
				state.lastFillColor = val;
			}
		},
		setLayerColor: function(state, {index, color}) {
			Vue.set(state.layers[index], 'color', color);
		},
		setLayerLabel: function(state, {index, label}) {
			Vue.set(state.layers[index], 'label', label);
		},
		setProjectFolder: function(state, path) {
			state.projectFolder = path;
		},
		setSelectedTool: function(state, name) {
			state.selectedTool = name;
		},
		setStageColor: function(state, color) {
			state.stageColor = color;
		},
		setStageHeight: function(state, val) {
			state.stageHeight = val;
		},
		setStageWidth: function(state, val) {
			state.stageWidth = val;
		},
		setStrokeColor: function(state, val) {
			state.strokeColor = val;
			if(val != null) {
				state.lastStrokeColor = val;
			}
		},
		toggleFillColor: function(state) {
			if(state.fillColor == null) {
				state.fillColor = state.lastFillColor;
			} else {
				state.fillColor = null;
			}
		},
		toggleLeftNav: function(state) {
			state.isLeftNavVisible = !state.isLeftNavVisible;
		},
		toggleStrokeColor: function(state) {
			if(state.strokeColor == null) {
				state.strokeColor = state.lastStrokeColor;
			} else {
				state.strokeColor = null;
			}
		},
		toggleObjectSnapping: function(state) {
			state.isObjectSnappingEnabled = !state.isObjectSnappingEnabled;
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

