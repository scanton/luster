(function() {
	var componentName = 'tool-palette';
	var s = `
		<div class="` + componentName + ` nav-container">
			<button :class="{'selected': isSelected('select')}" @click="handleToolSelect('select')" class="btn btn-default text-center" title="Selection Tool">
				<img src="images/icon-arrow.svg" />
			</button>
			<button :class="{'selected': isSelected('subselect')}" @click="handleToolSelect('subselect')" class="btn btn-default text-center" title="Subselect Tool">
				<img src="images/icon-arrow-filled.svg" />
			</button>
			<button :class="{'selected': isSelected('transform')}" @click="handleToolSelect('transform')" class="btn btn-default text-center" title="Free Transform" style="position: relative;">
				<img src="images/icon-arrow-filled.svg" style="max-width: 66%; transform: translateX(-3px) translateY(-5px)" />
				<span style="top: 5px; right: 12px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="top: 5px; right: 5px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="top: 12px; right: 5px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="bottom: 6px; right: 5px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="bottom: 6px; right: 12px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="bottom: 6px; left: 6px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
			</button>
			<button :class="{'selected': isSelected('text')}" @click="handleToolSelect('text')" class="btn btn-default">
				<span class="glyphicon glyphicon-font"></span>
			</button>
			<button :class="{'selected': isSelected('draw')}" @click="handleToolSelect('draw')" class="btn btn-default">
				<span class="glyphicon glyphicon-pencil"></span>
			</button>
			<button :class="{'selected': isSelected('paint')}" @click="handleToolSelect('paint')" class="btn btn-default">
				<img src="images/icon-pen.svg" />
			</button>
			<button :class="{'selected': isSelected('line')}" @click="handleToolSelect('line')" class="btn btn-default">
				<span class="glyphicon glyphicon-line"></span>
			</button>
			<button :class="{'selected': isSelected('rectangle')}" @click="handleToolSelect('rectangle')" class="btn btn-default">
				<span class="glyphicon glyphicon-rectangle"></span>
			</button>
			<button :class="{'selected': isSelected('elipse')}" @click="handleToolSelect('elipse')" class="btn btn-default">
				<span class="glyphicon glyphicon-circle"></span>
			</button>
			<button :class="{'selected': isSelected('star')}" @click="handleToolSelect('star')" class="btn btn-default">
				<span class="glyphicon glyphicon-certificate"></span>
			</button>
			<button :class="{'selected': isSelected('image')}" @click="handleToolSelect('image')" class="btn btn-default">
				<span class="glyphicon glyphicon-picture"></span>
			</button>
			<button :class="{'selected': isSelected('video')}" @click="handleToolSelect('video')" class="btn btn-default">
				<span class="glyphicon glyphicon-facetime-video"></span>
			</button>
			<button :class="{'selected': isSelected('link')}" @click="handleToolSelect('link')" class="btn btn-default">
				<span class="glyphicon glyphicon-link"></span>
			</button>
			<button :class="{'selected': isSelected('erase')}" @click="handleToolSelect('erase')" class="btn btn-default">
				<span class="glyphicon glyphicon-erase"></span>
			</button>
			<button :class="{'selected': isSelected('search')}" @click="handleToolSelect('search')" class="btn btn-default">
				<span class="glyphicon glyphicon-search"></span>
			</button>
			<div @click="toggleStrokeColor" class="text-center toolbar-icon">
				<span class="glyphicon glyphicon-pencil"></span>
			</div>
			<div class="input-container">
				<input v-if="strokeColor != null" type="color" v-model="strokeColor" style="width: 30px; height: 30px;" />
				<div @click="handleNullStrokeClick" v-if="strokeColor == null" class="null-color"><span class="slash"></span></div>
			</div>
			<div @click="toggleFillColor" class="text-center toolbar-icon">
				<span class="glyphicon glyphicon-tint"></span>
			</div>
			<div class="input-container">
				<input v-if="fillColor != null" type="color" v-model="fillColor" style="width: 30px; height: 30px;" />
				<div @click="handleNullFillClick" v-if="fillColor == null" class="null-color"><span class="slash"></span></div>
			</div>
			<button @click="toggleObjectSnapping" :class="{'selected': isObjectSnappingEnabled}" class="btn btn-default" style="margin-top: 5px" title="Toggle Object Snapping">
				<span class="glyphicon glyphicon-magnet" style="transform: rotate(180deg)"></span>
			</button>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			fillColor: {
				get: function() {
					return store.state.fillColor;
				},
				set: function(val) {
					store.commit("setFillColor", val);
				}
			},
			isObjectSnappingEnabled: function() {
				return store.state.isObjectSnappingEnabled;
			},
			strokeColor: {
				get: function() {
					return store.state.strokeColor;
				},
				set: function(val) {
					store.commit("setStrokeColor", val);
				}
			}
		},
		props: [],
		template: s,
		data: function() {
			return {}
		},
		methods: {
			handleNullFillClick: function(e) {
				e.preventDefault();
				store.commit("toggleFillColor");
			},
			handleNullStrokeClick: function(e) {
				e.preventDefault();
				store.commit("toggleStrokeColor");
			},
			handleToolSelect: function(name) {
				if(name) {
					store.commit("setSelectedTool", name);
				}
			},
			isSelected: function(name) {
				return store.state.selectedTool == name;
			},
			toggleFillColor: function(e) {
				e.preventDefault();
				store.commit("toggleFillColor");
			},
			toggleObjectSnapping: function(e) {
				e.preventDefault();
				store.commit("toggleObjectSnapping");
			},
			toggleStrokeColor: function(e) {
				e.preventDefault();
				store.commit("toggleStrokeColor");
			}
		}
	});
})();
