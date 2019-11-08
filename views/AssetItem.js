(function() {
	var componentName = 'asset-item';
	var s = `
		<div class="` + componentName + `">
			<span v-if="dataType == 'folder'" class="glyphicon glyphicon-folder-open item-icon"></span>
			<img class="item-icon" style="max-width: 15px; max-height: 15px;" v-if="dataType == 'image'" :src="dataPath" />
            {{dataLabel}}
            <asset-item v-for="(asset, index) in dataChildren" :data-index="index" :data-label="asset.label" :data-path="asset.path" :data-type="asset.type" :data-children="asset.children"></asset-item>
		</div>
	`;
	
	Vue.component(componentName, {
		created: function() {
			
		},
		computed: {
			
		},
		props: ['dataIndex', 'dataLabel', 'dataType', 'dataChildren', 'dataPath'],
		template: s,
		data: function() {
			return {
                
            }
		},
		methods: {
			
		}
	});
})();
