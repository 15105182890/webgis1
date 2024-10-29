var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '天地图-矢量注记',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t7.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=2aaf4a4f3f0a0b5ceb9ccecf96e3461c'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '天地图-矢量底图',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=2aaf4a4f3f0a0b5ceb9ccecf96e3461c'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "绕城高速",
                interactive: true,
                title: '绕城高速'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
lyr__2.set('fieldAliases', {'洋通高速线路图': '洋通高速线路图', });
lyr__2.set('fieldImages', {'洋通高速线路图': '', });
lyr__2.set('fieldLabels', {'洋通高速线路图': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});