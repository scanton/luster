(function() {
	var componentName = 'assets';
	var s = `
		<div :class="{'is-open': isOpen}" class="` + componentName + ` container-fluid navbar-panel">
            <div @click="handleToggleOpen" class="row title">
                Assets <span class="glyphicon glyphicon-play"></span>
            </div>
            <div v-show="isOpen" class="row controls">
            	<asset-item v-for="(asset, index) in assetList" :data-index="index" :data-label="asset.label" :data-path="asset.path" :data-type="asset.type" :data-children="asset.children"></asset-item>
            </div>
            <div v-show="isOpen" class="row toolbar">
                <button @click="handleAddAsset" class="btn btn-default">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
				<button @click="handleAddFolder" class="btn btn-default">
					<span class="glyphicon glyphicon-folder-open"></span>
				</button>
                <button @click="handleDeleteAsset" class="btn btn-default pull-right">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
            </div>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			assetList: function() {
				return store.state.assetList;
			}
		},
		props: [],
		template: s,
		data: function() {
			return {
                isOpen: true
            }
		},
		methods: {
			handleAddAsset: function(e) {

			},
			handleAddFolder: function(e) {

			},
			handleDeleteAsset: function(e) {

			},
			handleToggleOpen: function(e) {
                this.isOpen = !this.isOpen;
            }
		}
	});
})();
