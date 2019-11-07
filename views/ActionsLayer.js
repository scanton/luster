(function() {
	var componentName = 'actions-layer';
	var s = `
		<div class="` + componentName + `">
			<nobr>
				<span class="layer-details">
					Actions
					<span class="layer-color" style="'background: black"></span>
				</span>
				<span class="keyframes">
					<div :style="frameIndicatorStyle" class="frame-indicator"></div>
				</span>
			</nobr>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			frameIndicatorStyle: function() {
				return 'left: ' + (store.state.currentFrame * 10 + 3.25) + 'px;';
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
