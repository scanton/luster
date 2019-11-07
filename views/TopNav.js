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
					<button @click="handleRewind" class="btn btn-default">
						<span class="glyphicon glyphicon-fast-backward"></span>
					</button>
					<button :class="{'paused': isPaused}" @click="handlePause" class="btn btn-default pause-button">
						<span class="glyphicon glyphicon-pause"></span>
					</button>
					<button :class="{'playing': isPlaying}" @click="handlePlay" class="btn btn-default play-button">
						<span class="glyphicon glyphicon-play"></span>
					</button>
					<button @click="handleStop" class="btn btn-default">
						<span class="glyphicon glyphicon-stop"></span>
					</button>
					<button @click="handleFastForward" class="btn btn-default">
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
			isPaused: function() {
				return store.state.isPaused;
			},
			isPlaying: function() {
				return store.state.isPlaying;
			}
		},
		props: [],
		template: s,
		data: function() {
			return {}
		},
		methods: {
			handleFastForward: function(e) {
				e.preventDefault();
				store.commit("setCurrentFrame", store.state.lastFrame);
			},
			handleLeftToggle: function(e) {
				e.preventDefault();
				store.commit("toggleLeftNav");
			},
			handlePause: function(e) {
				e.preventDefault();
				store.state.isPaused = !store.state.isPaused;
			},
			handlePlay: function(e) {
				e.preventDefault();
				if(store.state.isPlaying && store.state.isPaused) {
					store.state.isPaused = false;
				} else {
					store.state.isPlaying = !store.state.isPlaying;
				}
			},
			handleRewind: function(e) {
				e.preventDefault();
				store.commit("setCurrentFrame", 0);
			},
			handleRightToggle: function(e) {
				e.preventDefault();
				store.commit("toggleRightNav");
			},
			handleStop: function(e) {
				e.preventDefault();
				if(!store.state.isPlaying) {
					store.commit("setCurrentFrame", 0);
				} else {
					store.state.isPlaying = false;
				}
				store.state.isPaused = false;
			}
		}
	});
})();
