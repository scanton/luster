(function() {
	var componentName = 'left-nav';
	var s = `
		<div class="` + componentName + ` nav-container" :style="navStyle">
			<button class="btn btn-default">
				<span class="glyphicon glyphicon-pencil"></span>
			</button>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isLeftNavVisible ? 'left: 0; ' : 'left: -' + store.state.leftNavWidth + 'px; ') + 'width: ' + store.state.leftNavWidth + 'px;';
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
