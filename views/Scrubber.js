(function() {
	var componentName = 'scrubber';
	var s = `
        <div class="` + componentName + `">
        	<nobr>
        		<span class="layer-details">
	            	&nbsp;
	            </span>
	            <div class="keyframes" @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mousemove="handleMouseMove">
	            	<div :style="handleStyle" class="handle"></div>
	            </div>
            </nobr>
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
			},
			handleStyle: function() {
				var color = "#FF0";
				if(this.isPaused) {
					color = "#F00";
				} else if(this.isPlaying) {
					color: "#0F0";
				}
				return 'left: ' + (store.state.currentFrame * 10) + 'px; border-color: ' + color + ';';
			}
		},
		props: [],
		template: s,
		data: function() {
			return {
				isDragging: false
			};
		},
		methods: {
			handleMouseDown: function(e) {
				this.isDragging = true;
			},
			handleMouseMove: function(e) {
				if(this.isDragging) {
					store.commit("setCurrentFrame", Math.floor(e.layerX / 10));
				}
			},
			handleMouseUp: function(e) {
				if(this.isDragging) {
					store.commit("setCurrentFrame", Math.floor(e.layerX / 10));
					this.isDragging = false;
				}
			}
		}
	});
})();
