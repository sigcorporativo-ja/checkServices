var nodemailer = require('freemailer'); //freemailer: versión 2.7 de nodemailer mantenida para su uso con nodeJS 0.10
var jdaSMTP = {
    host: 'mail.juntadeandalucia.es',
    port: 465,
    secure: true,
    auth: {
        user: 'prueba01.upsh.sandetel',
        pass: 'Consulta17'
    }
};
var mailTransport = nodemailer.createTransport(jdaSMTP);
var mailOptions = {
    from: 'prueba01.upsh.sandetel@juntadeandalucia.es',
    to: 'jgleal@minsait.com, fborja.manas@juntadeandalucia.es',
    subject: "[OK] Comprobación Servicios - " + new Date().toLocaleString(),
    html: ""
};

var geoPrintReq = 'spec=%7B%22units%22%3A%22m%22%2C%22srs%22%3A%22EPSG%3A23030%22%2C%22layout%22%3A%22imagen+cuadrada%22%2C%22dpi%22%3A%22150%22%2C%22outputFormat%22%3A%22pdf%22%2C%22outputFilename%22%3A%22mapea_%24%7Byyyy-MM-dd_hhmmss%7D%22%2C%22layers%22%3A%5B%7B%22baseURL%22%3A%22http%3A%2F%2Fwww.callejerodeandalucia.es%2Fservicios%2Fbase%2Fwms%3F%22%2C%22opacity%22%3A1%2C%22singleTile%22%3Atrue%2C%22type%22%3A%22WMS%22%2C%22layers%22%3A%5B%22contexto_andalucia%22%5D%2C%22format%22%3A%22image%2Fpng%22%2C%22styles%22%3A%5B%22%22%5D%2C%22customParams%22%3A%7B%22TRANSPARENT%22%3A%22false%22%2C%22ISWMC%22%3A%22ok%22%7D%7D%2C%7B%22baseURL%22%3A%22http%3A%2F%2Fwww.callejerodeandalucia.es%2Fservicios%2Fbase%2Fwms%3F%22%2C%22opacity%22%3A1%2C%22singleTile%22%3Atrue%2C%22type%22%3A%22WMS%22%2C%22layers%22%3A%5B%22batimetria%22%5D%2C%22format%22%3A%22image%2Fpng%22%2C%22styles%22%3A%5B%22%22%5D%2C%22customParams%22%3A%7B%22TRANSPARENT%22%3A%22true%22%2C%22ISWMC%22%3A%22ok%22%7D%7D%2C%7B%22baseURL%22%3A%22http%3A%2F%2Fwww.callejerodeandalucia.es%2Fservicios%2Fbase%2Fwms%3F%22%2C%22opacity%22%3A1%2C%22singleTile%22%3Afalse%2C%22type%22%3A%22WMS%22%2C%22layers%22%3A%5B%22CDAU_base%22%5D%2C%22format%22%3A%22image%2Fpng%22%2C%22styles%22%3A%5B%22%22%5D%2C%22customParams%22%3A%7B%22TRANSPARENT%22%3A%22false%22%2C%22ISWMC%22%3A%22ok%22%7D%7D%2C%7B%22baseURL%22%3A%22http%3A%2F%2Fwww.callejerodeandalucia.es%2Fservicios%2Fcdau%2Fwms%3FBuffer%3D5%22%2C%22opacity%22%3A1%2C%22singleTile%22%3Atrue%2C%22type%22%3A%22WMS%22%2C%22layers%22%3A%5B%22CDAU_wms%22%5D%2C%22format%22%3A%22image%2Fpng%22%2C%22styles%22%3A%5B%22%22%5D%2C%22customParams%22%3A%7B%22TRANSPARENT%22%3A%22true%22%2C%22ISWMC%22%3A%22ok%22%7D%7D%2C%7B%22baseURL%22%3A%22http%3A%2F%2Fwww.callejerodeandalucia.es%2Fservicios%2Fbase%2Fwms%3F%22%2C%22opacity%22%3A1%2C%22singleTile%22%3Atrue%2C%22type%22%3A%22WMS%22%2C%22layers%22%3A%5B%22CDAU_toponimia%22%5D%2C%22format%22%3A%22image%2Fpng%22%2C%22styles%22%3A%5B%22%22%5D%2C%22customParams%22%3A%7B%22TRANSPARENT%22%3A%22true%22%2C%22ISWMC%22%3A%22ok%22%7D%7D%2C%7B%22baseURL%22%3A%22http%3A%2F%2Fwww.ideandalucia.es%2Fwms%2Fmta400v_2008%3F%22%2C%22opacity%22%3A1%2C%22singleTile%22%3Afalse%2C%22type%22%3A%22WMS%22%2C%22layers%22%3A%5B%22Redes_energeticas%22%5D%2C%22format%22%3A%22image%2Fpng%22%2C%22styles%22%3A%5B%22%22%5D%2C%22customParams%22%3A%7B%22TRANSPARENT%22%3Atrue%7D%7D%2C%7B%22type%22%3A%22Vector%22%2C%22styles%22%3A%7B%7D%2C%22styleProperty%22%3A%22_gx_style%22%2C%22geoJson%22%3A%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%5D%7D%2C%22name%22%3A%22Arboleda%22%2C%22opacity%22%3A1%7D%2C%7B%22type%22%3A%22Vector%22%2C%22styles%22%3A%7B%7D%2C%22styleProperty%22%3A%22_gx_style%22%2C%22geoJson%22%3A%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%5D%7D%2C%22name%22%3A%22prueba_pun_wfst%22%2C%22opacity%22%3A1%7D%5D%2C%22pages%22%3A%5B%7B%22title%22%3A%22aa%22%2C%22printTitle%22%3A%22aa%22%2C%22printDescription%22%3A%22%22%2C%22infoSRS%22%3A%22%5CnEPSG%3A23030%22%2C%22clientLogo%22%3A%22http%3A%2F%2Fwww.juntadeandalucia.es%2Feconomiayhacienda%2Fimages%2Fplantilla%2Flogo_cabecera.gif%22%2C%22creditos%22%3A%22Impresi%C3%B3n+generada+a+trav%C3%A9s+de+Mapea%22%2C%22bbox%22%3A%5B226868.44268578305%2C4134109.249960205%2C238058.88295851692%2C4141758.9649903947%5D%2C%22rotation%22%3A0%7D%5D%2C%22legends%22%3A%5B%7B%22name%22%3A%22contexto_andalucia%22%2C%22classes%22%3A%5B%7B%22name%22%3A%22%22%2C%22icons%22%3A%5B%22http%3A%2F%2Fwww.callejerodeandalucia.es%2Fservicios%2Fbase%2Fwms%3FSERVICE%3DWMS%26VERSION%3D1.1.0%26REQUEST%3DGetLegendGraphic%26LAYER%3Dcontexto_andalucia%26FORMAT%3Dimage%252Fpng%26EXCEPTIONS%3Dimage%252Fpng%22%5D%7D%5D%7D%2C%7B%22name%22%3A%22Redes_energeticas%22%2C%22classes%22%3A%5B%7B%22name%22%3A%22%22%2C%22icons%22%3A%5B%22http%3A%2F%2Fwww.ideandalucia.es%2Fwms%2Fmta400v_2008%3FSERVICE%3DWMS%26VERSION%3D1.1.0%26REQUEST%3DGetLegendGraphic%26LAYER%3DRedes_energeticas%26FORMAT%3Dimage%252Fpng%26EXCEPTIONS%3Dimage%252Fpng%22%5D%7D%5D%7D%2C%7B%22name%22%3A%22Arboleda%22%2C%22classes%22%3A%5B%5D%7D%2C%7B%22name%22%3A%22prueba_pun_wfst%22%2C%22classes%22%3A%5B%5D%7D%5D%7D&Print=';

    

module.exports = function(grunt){
  grunt.config.init({
    checkAuto: {
      castillos: ['castillo del b'],
      sepim_sanlucarlamayor: ['horno'],
      sepim_montefrio: ['h'],
      sepim_alajar: ['h'],
      sepim_vegasdg: ['h'],
      sepim_almensilla: ['hacienda'],
      sepim_hinojales: ['rest'],
      sepim_sbarrameda: ['igl'],
      campamentos: ['camp'],
      sedes: ['centro']
    },

     buildAuto: {
      castillos: ['masterHost','slaveHost'],
      sepim_sanlucarlamayor: ['masterHost','slaveHost'],
      sepim_montefrio: ['masterHost','slaveHost'],
      sepim_alajar: ['masterHost','slaveHost'],
      sepim_vegasdg: ['masterHost','slaveHost'],
      sepim_almensilla: ['masterHost','slaveHost'],
      sepim_hinojales: ['masterHost','slaveHost'],
      sepim_sbarrameda: ['masterHost','slaveHost'],
      campamentos: ['masterHost','slaveHost'],
      sedes: ['masterHost','slaveHost']
    },

    endpoint: {
      host: 'http://geobusquedas-sigc.juntadeandalucia.es/geobusquedas/',
      masterHost: 'http://geobusquedas-sigc.maestro.juntadeandalucia.es/geobusquedas/',
      slaveHost: 'http://geobusquedas-sigc.esclavo.juntadeandalucia.es/geobusquedas/',
      suggest: '/suggest?wt=json&spellcheck.q=',
      build: '/suggest?spellcheck.build=true&wt=json',
    },
    
    checkGeoprint: {
        nodo1: 'http://geoprint-sigc.juntadeandalucia.es/geoprint1/pdf/print.pdf?',
        nodo2: 'http://geoprint-sigc.juntadeandalucia.es/geoprint2/pdf/print.pdf?',
    }
  });
   
  grunt.registerTask('sendMail', 'Envía email con la comprobación', function(){
      
      var done = this.async();
      
      mailTransport.sendMail(mailOptions, function(error, info){
        if(error){
          console.log(error);
          done(error);
        } 
        console.log('Email envíado: ' + info.response);
        done();
    });
      
  });
  // Chequea el autocompletador de los cores
  grunt.registerMultiTask('checkAuto', 'Chequea autocompletado de cores', function() {
    
    var http = require('http'),
    done = this.async();
   
    var core = this.target;
    var busquedas = this.data;
    
    grunt.config.requires('endpoint');
    busquedas.forEach(function(busqueda, i, arr){
      var body = [];
      url = grunt.config.get('endpoint.host');
      url += core + grunt.config.get('endpoint.suggest') + busqueda;
              

      http.get(url, function(res) {
        res.setEncoding('utf8');

        res.on('data', function(data){
          body.push(data);
        });

        res.on('end', function () {
                    
          var cuerpo = JSON.parse(body.join());
          if(cuerpo.spellcheck.suggestions.length>0){
                grunt.log.writeln( core ['yellow'] + ' - Autocompletado'['green'] + ' \'' + busqueda + '\' con: \n' + cuerpo.spellcheck.suggestions[1].suggestion);
                //mailOptions.text += '\r\n' + '\'' + busqueda + '\' con: \n' + cuerpo.spellcheck.suggestions[1].suggestion;
                mailOptions.html += "<h4><span style='color: #00ff00;'>[OK]</span>&nbsp;"+core+"</h4><p><b>Autocompletado '"+busqueda+"' con:</b><pre width='100'>"+cuerpo.spellcheck.suggestions[1].suggestion+"</pre></p>";
          }
          else{
                grunt.log.writeln( core ['yellow'] + ' - Ninguna propuesta encontrada para: '['red'] + busqueda);
                mailOptions.subject = "[ERROR] Comprobación Servicios - " + new Date().toLocaleString();
                mailOptions.html += "<h4><span style='color: #ff0000;'>[ERROR]</span>&nbsp;"+core+"</h4><p><b>Ninguna propuesta encontrada para '"+busqueda+"'</b></p>";
          }
          if (i==arr.length-1) done();
        });
      }).on('error', function (err) {
        mailOptions.subject = "[ERROR] Comprobación Servicios - " + new Date().toLocaleString();
        //mailOptions.text += "\r\n" + 'Revisar la url del core: <'+ url +'>.';
        mailOptions.html += "<h4><span style='color: #ff0000;'>[ERROR]</span>&nbsp;"+core+"</h4><p><b>Revisar la url del core: <a href='"+url+"' target='_blank'>"+url+"</a></b></p>";
        grunt.warn('Revisar la url del core: <'+ url +'>.');
        done(err);
      });
    });
  });
  
   // Chequea el autocompletador de los cores
  grunt.registerMultiTask('checkGeoprint', 'Chequea los nodos de Geoprint', function() {
    
    var http = require('http'),
    done = this.async();
   
    var nodo = this.target;
    var nodoUrl = this.data + geoPrintReq;
    
    
    http.get(nodoUrl, function(res) {
        
        
        res.on('data', function(data){
          //necesario
          
        });
        
        res.on('end', function () {
          //TODO: comprobar pdf?¿?
          grunt.log.writeln("Probando " + nodo + " de Geoprint");  
          mailOptions.html += "<h4><span style='color: #00ff00;'>[OK]</span> Geoprint "+nodo+"</h4>";
          done();
        });
      }).on('error', function (err) {
        mailOptions.subject = "[ERROR] Comprobación Sevicios - " + new Date().toLocaleString();
        mailOptions.html += "<h4><span style='color: #ff0000;'>[ERROR]</span> GeoPrint "+nodo+"</h4><p><b>Revisar: <a href='"+nodoUrl+"' target='_blank'>"+url+"</a></b></p>";
        grunt.warn('Revisar el '+nodo+' de Geoprint: <'+ this.data +'>.');
        done(err);
      });
          
   });
  
    
  // Construye el autocompletador para los cores
  grunt.registerMultiTask('buildAuto', 'Regenera cores de cores', function() {
    var http = require('http'),
    done = this.async();
    
    var core = this.target;
    var servidores = this.data;

    grunt.config.requires('endpoint');

    servidores.forEach(function(servidor, i, arr){
      var body = [];

      url =  grunt.config.get('endpoint.' + servidor);
      url += core + grunt.config.get('endpoint.build');

      http.get(url, function(res) {
        res.setEncoding('utf8');

        res.on('data', function(data){
          body.push(data);
        });

        res.on('end', function () {
          var cuerpo = JSON.parse(body);
          if(cuerpo.responseHeader.status == 0){
                grunt.log.writeln( core ['yellow'] + '- ' + servidor + ' - Autocompletar creado'['green']);
          }
          else{
                grunt.log.writeln( core ['yellow'] + '- Se ha producido un error'['red']);
          }
          if (i==arr.length-1) done();
        });
      }).on('error', function (err) {
        grunt.warn('Revisar la url de la llamada: <'+ url +'>.');
        done(err);
      });
    });
  });

  grunt.registerTask('default', ['checkAuto', 'checkGeoprint', 'sendMail']);
}
