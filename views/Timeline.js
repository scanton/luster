(function() {
	var componentName = 'timeline';
	var s = `
		<div class="` + componentName + `" :style="navStyle">
			<actions-layer></actions-layer>
			<timeline-layer v-for="(layer, index) in layers" :data-index="index" :data-label="layer.label" :data-color="layer.color" :data-frames="layer.frames"></timeline-layer>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isLeftNavVisible ? 'left: ' + store.state.leftNavWidth + 'px; ' : 'left: 0; ') + (store.state.isRightNavVisible ? 'right: ' + store.state.rightNavWidth + 'px; ' : 'right: 0; ');
			},
			layers: function() {
				return store.state.layers;
			}
		},
		props: [],
		template: s,
		data: function() {
			return {};
		},
		methods: {
			
		}
	});
})();
