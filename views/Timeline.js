(function() {
	var componentName = 'timeline';
	var s = `
		<div class="` + componentName + `" :style="navStyle">
			
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isLeftNavVisible ? 'left: ' + store.state.leftNavWidth + 'px; ' : 'left: 0; ') + (store.state.isRightNavVisible ? 'right: ' + store.state.rightNavWidth + 'px; ' : 'right: 0; ');
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
