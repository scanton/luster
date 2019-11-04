(function() {
	var componentName = 'timeline-controls';
	var s = `
		<div class="` + componentName + ` nav-container" :style="navStyle">
			
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isLeftNavVisible ? 'left: ' + (store.state.leftNavWidth + 30) + 'px; ' : 'left: 30px; ') + (store.state.isRightNavVisible ? 'right: ' + store.state.rightNavWidth + 'px; ' : 'right: 0; ');
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
