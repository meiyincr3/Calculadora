
let funcionPredeterminada = () => {
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let valorPorHora = parseFloat(document.getElementById('valorPorHora').value);
    let interfaz = parseFloat(document.getElementById('interfazHoras').value);
    let desarrolloH = parseFloat(document.getElementById('DesarrolloHTML').value);
    let integraApis = parseFloat(document.getElementById('integraApi').value);
    let desarrolloLogica = parseFloat(document.getElementById('desarrolloLogica').value);
    let pruebas = parseFloat(document.getElementById('pruebasCorreciones').value)
    let resultado = valorPorHora + interfaz + desarrolloH + integraApis + desarrolloLogica + pruebas;
    document.getElementById('valorTotal').value = resultado;
  });
};

funcionPredeterminada();