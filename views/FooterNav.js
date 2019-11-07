(function() {
	var componentName = 'footer-nav';
	var s = `
		<div class="` + componentName + ` nav-container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12">
						{{projectFolder}}
					</div>
				</div>
			</div>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			projectFolder: function() {
				return store.state.projectFolder;
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
