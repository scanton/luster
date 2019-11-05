(function() {
	var componentName = 'context-controls';
	var s = `
		<div class="` + componentName + `" :style="navStyle">
            <div class="text-center">
                width: <input v-model="width" type="number" min="50" style="max-width: 60px" />
                height: <input v-model="height" type="number" min="50" style="max-width: 60px" />
                background: <input v-model="stageColor" type="color" style="width: 23px;" />
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
			height: {
                get: function() {
                    return store.state.stageHeight;
                },
                set: function(val) {
                    store.commit("setStageHeight", val);
                }
            },
            stageColor: {
                get: function() {
                    return store.state.stageColor;
                },
                set: function(val) {
                    store.commit("setStageColor", val);
                }
            },
            width: {
                get: function() {
                    return store.state.stageWidth;
                },
                set: function(val) {
                    store.commit("setStageWidth", val);
                }
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
