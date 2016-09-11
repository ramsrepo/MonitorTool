angular
    .module('taskToolApp')
    .controller('UserController', UserController)
    .controller('StatisticsController', StatisticsController);
    

function UserController() { 
	
	/*alert('User Controller Loaded');*/
}



function StatisticsController($scope) {
	
	$scope.checked = false;
	var options = {
			tooltipTemplate: "<%= value %>", 
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	        showTooltips: true,        
	        onAnimationComplete: function()
	        {   
	            this.showTooltip(this.datasets[0].bars, true);
	        },
	        tooltipEvents: []      
    };
	
	$scope.options = options;
	
	$scope.toggleErrorInfo = function() {
		$scope.checked = !$scope.checked;
	};
	
	$scope.wdwlabels = ['871', '806', '505', '832', '828', '301', '554', '815', '810'];
	$scope.wdwdata = [ [48, 62, 120, 25, 28, 62, 45, 89, 25] ];
	
	$scope.dlrlabels = ['871', '806', '505', '832', '828', '310'];
	$scope.dlrdata = [ [133, 14, 20, 95, 48, 32] ];
	
	

	
}

