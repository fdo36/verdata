/* Aquí va el script para generar la visualización. */

sparql(
    // Consulta
    "PREFIX del: <http://www.example.org/schemas/delito_data/>" +
	"select distinct ?region ?mes ?unpol ?parte ?fe_est ?cod_est ?n_tribun ?delito ?m_operan ?fe_del ?com_del ?b_afect ?area ?lugar "+
	"from <http://verdata.cl/graphs/delitos2012> "+
	"where{?x del:region ?region ."+
	"?x del:mes ?mes ."+
	"?x del:unpol ?unpol ."+
	"?x del:parte ?parte ."+
	"?x del:fe_est ?fe_est ."+
	"?x del:cod_est ?cod_est ."+
	"?x del:n_tribun ?n_tribun ."+
	"?x del:delito ?delito ."+
	"?x del:m_operan ?m_operan ."+
	"?x del:fe_del ?fe_del ."+
	"?x del:b_afect ?b_afect ."+
	"?x del:area ?area ."+
	"?x del:lugar ?lugar ."+
	"?x del:com_del ?comuna ."+
	"filter( ?comuna = \"SANTIAGO\"@es) .}",
	
    // Acción
    function(data) {
        $.each(data.results.bindings, function(index, value) {
            $('#data').append(
                $('<tr>')
                    .append($('<td>').text(value.region.value))
					.append($('<td>').text(value.mes.value))
					.append($('<td>').text(value.unpol.value))
					.append($('<td>').text(value.parte.value))
					.append($('<td>').text(value.fe_est.value))
					.append($('<td>').text(value.cod_est.value))
					.append($('<td>').text(value.n_tribun.value))
					.append($('<td>').text(value.delito.value))
					.append($('<td>').text(value.m_operan.value))
					.append($('<td>').text(value.fe_del.value))
					.append($('<td>').text(value.b_afect.value))
					.append($('<td>').text(value.area.value))
					.append($('<td>').text(value.lugar.value))
            );
        });
    });