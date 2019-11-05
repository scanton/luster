(function() {
	var componentName = 'properties';
	var s = `
		<div :class="{'is-open': isOpen}" class="` + componentName + ` container-fluid navbar-panel">
            <div @click="handleToggleOpen" class="row title">
                Properties <span class="glyphicon glyphicon-play"></span>
            </div>
            <div v-show="isOpen" class="row controls">

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
			return {
                isOpen: true
            }
		},
		methods: {
			handleToggleOpen: function(e) {
                this.isOpen = !this.isOpen;
            }
		}
	});
})();
