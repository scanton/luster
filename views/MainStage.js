(function() {
	var componentName = 'main-stage';
	var s = `
		<div class="` + componentName + ` text-center" :style="navStyle">
			<div class="contents">
				<div class="stage" :style="stageStyle">

				</div>
			</div>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isLeftNavVisible ? 'left: ' + store.state.leftNavWidth + 'px; ' : 'left: 0; ') + (store.state.isRightNavVisible ? 'right: ' + store.state.rightNavWidth + 'px; ' : 'right: 0; ');
			},
			stageStyle: function() {
				return "width: " + store.state.stageWidth + "px; height: " + store.state.stageHeight + "px;";
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
