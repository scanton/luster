(function() {
	var componentName = 'sprites';
	var s = `
		<div :class="{'is-open': isOpen}" class="` + componentName + ` container-fluid navbar-panel">
            <div @click="handleToggleOpen" class="row title">
                Sprites <span class="glyphicon glyphicon-play"></span>
            </div>
            <div v-show="isOpen" class="row controls">

            </div>
            <div v-show="isOpen" class="row toolbar">
                <button class="btn btn-default">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
                <button class="btn btn-default pull-right">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
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
                isOpen: false
            }
		},
		methods: {
			handleToggleOpen: function(e) {
                this.isOpen = !this.isOpen;
            }
		}
	});
})();
