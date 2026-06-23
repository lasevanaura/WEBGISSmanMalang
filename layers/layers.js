var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_administrasikecamatan_1 = new ol.format.GeoJSON();
var features_administrasikecamatan_1 = format_administrasikecamatan_1.readFeatures(json_administrasikecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_administrasikecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_administrasikecamatan_1.addFeatures(features_administrasikecamatan_1);
var lyr_administrasikecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_administrasikecamatan_1, 
                style: style_administrasikecamatan_1,
                popuplayertitle: 'administrasi kecamatan',
                interactive: true,
    title: 'administrasi kecamatan<br />\
    <img src="styles/legend/administrasikecamatan_1_0.png" /> Blimbing<br />\
    <img src="styles/legend/administrasikecamatan_1_1.png" /> Kedungkandang<br />\
    <img src="styles/legend/administrasikecamatan_1_2.png" /> Klojen<br />\
    <img src="styles/legend/administrasikecamatan_1_3.png" /> Lowokwaru<br />\
    <img src="styles/legend/administrasikecamatan_1_4.png" /> Sukun<br />\
    <img src="styles/legend/administrasikecamatan_1_5.png" /> <br />' });
var format_keterjangkauanSMAN3Km_2 = new ol.format.GeoJSON();
var features_keterjangkauanSMAN3Km_2 = format_keterjangkauanSMAN3Km_2.readFeatures(json_keterjangkauanSMAN3Km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_keterjangkauanSMAN3Km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_keterjangkauanSMAN3Km_2.addFeatures(features_keterjangkauanSMAN3Km_2);
var lyr_keterjangkauanSMAN3Km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_keterjangkauanSMAN3Km_2, 
                style: style_keterjangkauanSMAN3Km_2,
                popuplayertitle: 'keterjangkauan SMAN 3Km',
                interactive: true,
                title: '<img src="styles/legend/keterjangkauanSMAN3Km_2.png" /> keterjangkauan SMAN 3Km'
            });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: 'jalan',
                interactive: false,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });
var format_bataskecamatan_4 = new ol.format.GeoJSON();
var features_bataskecamatan_4 = format_bataskecamatan_4.readFeatures(json_bataskecamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskecamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskecamatan_4.addFeatures(features_bataskecamatan_4);
var lyr_bataskecamatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskecamatan_4, 
                style: style_bataskecamatan_4,
                popuplayertitle: 'batas kecamatan',
                interactive: false,
                title: '<img src="styles/legend/bataskecamatan_4.png" /> batas kecamatan'
            });
var format_SMANdiKotaMalang_5 = new ol.format.GeoJSON();
var features_SMANdiKotaMalang_5 = format_SMANdiKotaMalang_5.readFeatures(json_SMANdiKotaMalang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMANdiKotaMalang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMANdiKotaMalang_5.addFeatures(features_SMANdiKotaMalang_5);
var lyr_SMANdiKotaMalang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMANdiKotaMalang_5, 
                style: style_SMANdiKotaMalang_5,
                popuplayertitle: 'SMAN di Kota Malang',
                interactive: true,
    title: 'SMAN di Kota Malang<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_0.png" /> SMA Negeri 1<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_1.png" /> SMA Negeri 10<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_2.png" /> SMA Negeri 2<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_3.png" /> SMA Negeri 3<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_4.png" /> SMA Negeri 4<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_5.png" /> SMA Negeri 5<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_6.png" /> SMA Negeri 6<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_7.png" /> SMA Negeri 7<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_8.png" /> SMA Negeri 8<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_9.png" /> SMA Negeri 9<br />\
    <img src="styles/legend/SMANdiKotaMalang_5_10.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_administrasikecamatan_1.setVisible(true);lyr_keterjangkauanSMAN3Km_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_bataskecamatan_4.setVisible(true);lyr_SMANdiKotaMalang_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_administrasikecamatan_1,lyr_keterjangkauanSMAN3Km_2,lyr_jalan_3,lyr_bataskecamatan_4,lyr_SMANdiKotaMalang_5];
lyr_administrasikecamatan_1.set('fieldAliases', {'fid': 'fid', 'provinsi': 'provinsi', 'kota': 'kota', 'kecamatan': 'kecamatan', });
lyr_keterjangkauanSMAN3Km_2.set('fieldAliases', {'fid': 'fid', 'provinsi': 'provinsi', 'kota': 'kota', 'kecamatan': 'kecamatan', 'x': 'x', 'y': 'y', 'nama': 'nama', 'alamat': 'alamat', });
lyr_jalan_3.set('fieldAliases', {'fid': 'fid', 'REMARK': 'REMARK', });
lyr_bataskecamatan_4.set('fieldAliases', {'fid': 'fid', 'provinsi': 'provinsi', 'kota': 'kota', 'kecamatan': 'kecamatan', });
lyr_SMANdiKotaMalang_5.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'nama ': 'nama ', 'alamat': 'alamat', 'telepon': 'telepon', 'foto': 'foto', });
lyr_administrasikecamatan_1.set('fieldImages', {'fid': 'TextEdit', 'provinsi': 'TextEdit', 'kota': 'TextEdit', 'kecamatan': 'TextEdit', });
lyr_keterjangkauanSMAN3Km_2.set('fieldImages', {'fid': 'TextEdit', 'provinsi': 'TextEdit', 'kota': 'TextEdit', 'kecamatan': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', });
lyr_jalan_3.set('fieldImages', {'fid': '', 'REMARK': '', });
lyr_bataskecamatan_4.set('fieldImages', {'fid': 'TextEdit', 'provinsi': 'TextEdit', 'kota': 'TextEdit', 'kecamatan': 'TextEdit', });
lyr_SMANdiKotaMalang_5.set('fieldImages', {'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'nama ': 'TextEdit', 'alamat': 'TextEdit', 'telepon': 'TextEdit', 'foto': 'ExternalResource', });
lyr_administrasikecamatan_1.set('fieldLabels', {'fid': 'no label', 'provinsi': 'inline label - always visible', 'kota': 'inline label - always visible', 'kecamatan': 'inline label - always visible', });
lyr_keterjangkauanSMAN3Km_2.set('fieldLabels', {'fid': 'hidden field', 'provinsi': 'inline label - always visible', 'kota': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', 'nama': 'inline label - always visible', 'alamat': 'inline label - always visible', });
lyr_jalan_3.set('fieldLabels', {'fid': 'hidden field', 'REMARK': 'hidden field', });
lyr_bataskecamatan_4.set('fieldLabels', {'fid': 'no label', 'provinsi': 'no label', 'kota': 'no label', 'kecamatan': 'no label', });
lyr_SMANdiKotaMalang_5.set('fieldLabels', {'fid': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'nama ': 'inline label - always visible', 'alamat': 'inline label - always visible', 'telepon': 'inline label - always visible', 'foto': 'inline label - always visible', });
lyr_SMANdiKotaMalang_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});