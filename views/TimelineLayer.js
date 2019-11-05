(function() {
	var componentName = 'timeline-layer';
	var s = `
		<div class="` + componentName + `" :class="{'selected': isSelected}">
			<nobr>
				<span class="layer-details" @mousedown="handleDetailClick">
					<span v-show="!isLabelEditEnabled">
						{{dataLabel}}
					</span>
					<input type="text" v-show="isLabelEditEnabled" v-model="labelName" />
					<span class="layer-color" :style="'background: ' + dataColor"></span>
					<input class="color-selector" type="color" v-model="layerColor" />
				</span>
				<span class="keyframes"></span>
			</nobr>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			isSelected: function() {
				return store.state.selectedLayer == this.dataIndex;
			},
			layerColor: {
				get: function() {
					return store.state.layers[this.dataIndex].color;
				},
				set: function(val) {
					store.commit("setLayerColor", {index: this.dataIndex, color: val});
				}
			},
			labelName: {
				get: function() {
					return this.dataLabel;
				},
				set: function(val) {
					this.dataLabel = val;
					store.commit("setLayerLabel", {index: this.dataIndex, label: val});
				}
			}
		},
		props: ['data-index', 'data-label', 'data-color', 'data-frames'],
		template: s,
		data: function() {
			return {
				awaitingDoubleClick: false,
				isLabelEditEnabled: false
			};
		},
		methods: {
			handleDetailClick: function(e) {
				e.preventDefault();
				if(!this.awaitingDoubleClick) {
					this.awaitingDoubleClick = true;
					setTimeout(() => {
						if(this.awaitingDoubleClick) {
							this.awaitingDoubleClick = false;
							this.isLabelEditEnabled = false;
							store.commit("selectLayer", this.dataIndex);
						}
					}, 400);
				} else {
					this.awaitingDoubleClick = false;
					this.handleDoubleClickDetails(e);
				}
			},
			handleDoubleClickDetails: function(e) {
				this.isLabelEditEnabled = true;
				var $input = $(e.target).closest(".layer-details").find("input[type=text]");
				setTimeout(function() {
					$input.select();
				}, 200);
			}
		}
	});
})();
