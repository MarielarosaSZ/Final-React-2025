
function Stats(props ) {
    return (
    <div className=" border p-8 m-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Estadísticas de Productos</h2>
      <p>Total de Productos: {props.total}</p>
      <p>Precio Maximo: {props.max}</p>
      <p>Precio Mínimo: {props.min}</p>
        <p>Precio Promedio: {props.prom}</p>
    </div>
  );
}
export default Stats;