sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'shyaam/app/salesorder/test/integration/FirstJourney',
		'shyaam/app/salesorder/test/integration/pages/OrdersetList',
		'shyaam/app/salesorder/test/integration/pages/OrdersetObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersetList, OrdersetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('shyaam/app/salesorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersetList: OrdersetList,
					onTheOrdersetObjectPage: OrdersetObjectPage
                }
            },
            opaJourney.run
        );
    }
);