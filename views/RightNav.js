(function() {
	var componentName = 'right-nav';
	var s = `
		<div class="` + componentName + ` nav-container" :style="navStyle">
			<!--<layers></layers>-->
			<assets></assets>
			<fonts></fonts>
			<alignment></alignment>
			<properties></properties>
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
