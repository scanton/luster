(function() {
	var componentName = 'main-stage';
	var s = `
		<div class="` + componentName + ` text-center" :style="navStyle">
			<div class="contents">
				<div v-if="projectFolder != null" class="stage" :style="stageStyle">
					
				</div>
				<div v-if="projectFolder == null" class="view-dialog">
					<div class="container-fluid">
						<div class="row">
							<div class="col-xs-12">
								<h3>Create Project</h3>
								<p>Designate a folder to save your project to:</p>
								<input @change="handleProjectLocation" class="file-selector" type="file" webkitdirectory style="display: none;" />
								<button @click="handleCreateProject" class="btn btn-success">Create Project</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			navStyle: function() {
				return (store.state.isLeftNavVisible ? 'left: ' + (store.state.leftNavWidth + 30) + 'px; ' : 'left: 30px; ') + (store.state.isRightNavVisible ? 'right: ' + store.state.rightNavWidth + 'px; ' : 'right: 0; ');
			},
			projectFolder: function() {
				return store.state.projectFolder;
			},
			stageStyle: function() {
				return "width: " + store.state.stageWidth + "px; height: " + store.state.stageHeight + "px; background-color: " + store.state.stageColor + ";";
			}
		},
		props: [],
		template: s,
		data: function() {
			return {}
		},
		methods: {
			handleCreateProject: function(e) {
				e.preventDefault();
				$(e.target).closest(".row").find(".file-selector").click();
			},
			handleProjectLocation: function(e) {
				e.preventDefault();
				store.commit("setProjectFolder", e.target.files[0].path);
			}
		}
	});
})();
