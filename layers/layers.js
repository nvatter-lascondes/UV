var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Unidadesvecinales_1 = new ol.format.GeoJSON();
var features_Unidadesvecinales_1 = format_Unidadesvecinales_1.readFeatures(json_Unidadesvecinales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidadesvecinales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidadesvecinales_1.addFeatures(features_Unidadesvecinales_1);
var lyr_Unidadesvecinales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Unidadesvecinales_1, 
                style: style_Unidadesvecinales_1,
                interactive: true,
                title: '<img src="styles/legend/Unidadesvecinales_1.png" /> Unidades vecinales'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Unidadesvecinales_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Unidadesvecinales_1];
lyr_Unidadesvecinales_1.set('fieldAliases', {'T_REG_CA': 'T_REG_CA', 'T_REG_NOM': 'T_REG_NOM', 'T_PROV_CA': 'T_PROV_CA', 'T_PROV_NOM': 'T_PROV_NOM', 'T_COM': 'T_COM', 'COMUNA': 'COMUNA', 'T_COM_NOM': 'T_COM_NOM', 'T_UV_COD': 'T_UV_COD', 'ID_UV': 'ID_UV', 'T_UV_NOM': 'Unidad vecinal', });
lyr_Unidadesvecinales_1.set('fieldImages', {'T_REG_CA': 'Hidden', 'T_REG_NOM': 'Hidden', 'T_PROV_CA': 'Hidden', 'T_PROV_NOM': 'Hidden', 'T_COM': 'Hidden', 'COMUNA': 'Hidden', 'T_COM_NOM': 'Hidden', 'T_UV_COD': 'Hidden', 'ID_UV': 'Hidden', 'T_UV_NOM': 'TextEdit', });
lyr_Unidadesvecinales_1.set('fieldLabels', {'T_UV_NOM': 'inline label', });
lyr_Unidadesvecinales_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});