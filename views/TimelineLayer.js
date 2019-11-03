(function() {
	var componentName = 'timeline-layer';
	var s = `
		<div class="` + componentName + `">
			<nobr>
				<span class="layer-details">
					<span @click="handleEditLabel">
						{{dataLabel}}
					</span>
					<span class="layer-color" :style="'background: ' + dataColor"></span>
					<input class="color-selector" type="color" v-model="layerColor" />
				</span>
				<span class="keyframes"></span>
			</nobr>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			layerColor: {
				get: function() {
					return store.state.layers[this.dataIndex].color;
				},
				set: function(val) {
					store.commit("setLayerColor", {index: this.dataIndex, color: val});
				}
			}
		},
		props: ['data-index', 'data-label', 'data-color', 'data-frames'],
		template: s,
		data: function() {
			return {};
		},
		methods: {
			handleEditLabel: function(e) {
				e.preventDefault();
				console.log("make label editable");
			}
		}
	});
})();
