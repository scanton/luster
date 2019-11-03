(function() {
	var componentName = 'right-nav';
	var s = `
		<div class="` + componentName + ` nav-container" :style="navStyle">
			<alignment></alignment>
			<layers></layers>
			<sprites></sprites>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isRightNavVisible ? 'right: 0; ' : 'right: -' + store.state.rightNavWidth + 'px; ');
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
