(function() {
	var componentName = 'actions-layer';
	var s = `
		<div class="` + componentName + `">
			<nobr>
				<span class="layer-details">
					Actions
					<span class="layer-color" style="'background: black"></span>
				</span>
				<span class="keyframes"></span>
			</nobr>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
		
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
