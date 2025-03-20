var wms_layers = [];

var lyr_OverlapRASTERReprojectedEPSG3857_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overlap (RASTER - Reprojected EPSG 3857)<br />\
    <img src="styles/legend/OverlapRASTERReprojectedEPSG3857_0_0.png" /> 0<br />\
    <img src="styles/legend/OverlapRASTERReprojectedEPSG3857_0_1.png" /> 1<br />\
    <img src="styles/legend/OverlapRASTERReprojectedEPSG3857_0_2.png" /> 2<br />\
    <img src="styles/legend/OverlapRASTERReprojectedEPSG3857_0_3.png" /> 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OverlapRASTERReprojectedEPSG3857_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20037508.342800, -20037508.342800, 20037508.342800, 20037508.342800]
        })
    });
var format_CountryOutlineWhite_1 = new ol.format.GeoJSON();
var features_CountryOutlineWhite_1 = format_CountryOutlineWhite_1.readFeatures(json_CountryOutlineWhite_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineWhite_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineWhite_1.addFeatures(features_CountryOutlineWhite_1);
var lyr_CountryOutlineWhite_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineWhite_1, 
                style: style_CountryOutlineWhite_1,
                popuplayertitle: 'Country Outline - White',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineWhite_1.png" /> Country Outline - White'
            });

lyr_OverlapRASTERReprojectedEPSG3857_0.setVisible(true);lyr_CountryOutlineWhite_1.setVisible(true);
var layersList = [lyr_OverlapRASTERReprojectedEPSG3857_0,lyr_CountryOutlineWhite_1];
lyr_CountryOutlineWhite_1.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_CountryOutlineWhite_1.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_CountryOutlineWhite_1.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CountryOutlineWhite_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});