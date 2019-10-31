(function() {
	var componentName = 'top-nav';
	var s = `
		<div class="` + componentName + `">
			<button @click="handleRightToggle" class="btn btn-default pull-right">Right Toggle</button>
			<button @click="handleLeftToggle" class="btn btn-default">Left Toggle</button>
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
			return {}
		},
		methods: {
			handleLeftToggle: function(e) {
				e.preventDefault();
				store.commit("toggleLeftNav");
			},
			handleRightToggle: function(e) {
				e.preventDefault();
				store.commit("toggleRightNav");
			}
		}
	});
})();
