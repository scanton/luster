(function() {
	var componentName = 'tool-palette';
	var s = `
		<div class="` + componentName + ` nav-container">
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-pencil"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-search"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-font"></span>
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
				<span class="glyphicon glyphicon-flash"></span>
			</button>
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-erase"></span>
			</button>
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
			
		}
	});
})();
