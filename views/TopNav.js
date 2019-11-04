(function() {
	var componentName = 'top-nav';
	var s = `
		<div class="` + componentName + ` nav-container container-fluid">
			<div class="row">
				<div class="col-xs-12 text-center">
					<div class="pull-left">
						<!--
						<button @click="handleRightToggle" class="btn btn-default pull-right">Right Toggle</button>
						<button @click="handleLeftToggle" class="btn btn-default">Left Toggle</button>
						-->
						<button class="btn btn-default" title="Open...">
							<span class="glyphicon glyphicon-folder-open"></span>
						</button>
						<button class="btn btn-default" title="Save">
							<span class="glyphicon glyphicon-floppy-disk"></span>
						</button>
					</div>
					<button class="btn btn-default">
						<span class="glyphicon glyphicon-fast-backward"></span>
					</button>
					<button class="btn btn-default">
						<span class="glyphicon glyphicon-pause"></span>
					</button>
					<button class="btn btn-default">
						<span class="glyphicon glyphicon-play"></span>
					</button>
					<button class="btn btn-default">
						<span class="glyphicon glyphicon-stop"></span>
					</button>
					<button class="btn btn-default">
						<span class="glyphicon glyphicon-fast-forward"></span>
					</button>
				</div>
			</div>
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
