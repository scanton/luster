(function() {
	var componentName = 'left-nav';
	var s = `
		<div class="` + componentName + ` nav-container" :style="navStyle">
			
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isLeftNavVisible ? 'left: 30px; ' : 'left: -' + store.state.leftNavWidth + 'px; ') + 'width: ' + store.state.leftNavWidth + 'px;';
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
