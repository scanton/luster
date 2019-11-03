(function() {
	var componentName = 'context-controls';
	var s = `
		<div class="` + componentName + `">
            <div class="text-center">
                width: <input v-model="width" type="number" min="50" style="max-width: 60px" />
                height: <input v-model="height" type="number" min="50" style="max-width: 60px" />
            </div>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			height: {
                get: function() {
                    return store.state.stageHeight;
                },
                set: function(val) {
                    store.commit("setStageHeight", val);
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
