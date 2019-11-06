(function() {
	var componentName = 'tool-palette';
	var s = `
		<div class="` + componentName + ` nav-container">
			<button class="btn btn-default text-center" title="Selection Tool">
				<img src="images/icon-arrow.svg" />
			</button>
			<button class="btn btn-default text-center" title="Subselect Tool">
				<img src="images/icon-arrow-filled.svg" />
			</button>
			<button class="btn btn-default text-center" title="Subselect Tool" style="position: relative;">
				<img src="images/icon-arrow-filled.svg" style="max-width: 66%; transform: translateX(-3px) translateY(-5px)" />
				<span style="top: 5px; right: 12px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="top: 5px; right: 5px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="top: 12px; right: 5px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="bottom: 6px; right: 5px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="bottom: 6px; right: 12px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
				<span style="bottom: 6px; left: 6px; display: inline-block; position: absolute; width: 3px; height: 3px; background: #DDD;"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-font"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-pencil"></span>
			</button>
			<button class="btn btn-default">
				<img src="images/icon-pen.svg" />
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-line"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-rectangle"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-circle"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-certificate"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-picture"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-facetime-video"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-link"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-erase"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-search"></span>
			</button>
			<div class="text-center toolbar-icon">
				<span class="glyphicon glyphicon-pencil"></span>
			</div>
			<input type="color" v-model="strokeColor" style="width: 30px; height: 30px;" />
			<div class="text-center toolbar-icon">
				<span class="glyphicon glyphicon-tint"></span>
			</div>
			<input type="color" v-model="fillColor" style="width: 30px; height: 30px;" />

			<button class="btn btn-default">
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
			
		}
	});
})();
