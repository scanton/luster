(function() {
	var componentName = 'timeline-layer';
	var s = `
		<div class="` + componentName + `">
			<span class="layer-details">
				<span>{{dataIndex + 1}}</span>
				{{dataLabel}}
				<span class="layer-color" :style="'background: ' + dataColor"></span>
				<span class="keyframes"></span>
			</span>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
		
		},
		props: ['data-index', 'data-label', 'data-color', 'data-frames'],
		template: s,
		data: function() {
			return {};
		},
		methods: {
			
		}
	});
})();
