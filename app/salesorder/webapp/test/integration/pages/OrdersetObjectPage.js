sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'shyaam.app.salesorder',
            componentId: 'OrdersetObjectPage',
            contextPath: '/Orderset'
        },
        CustomPageDefinitions
    );
});