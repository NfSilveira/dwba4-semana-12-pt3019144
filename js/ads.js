
class Ads extends React.Component {
  
  constructor() {
    super();
    this.state = {
      headers: ['Disciplina', 'Carga', 'Período'],
      rows: [
        { Disciplina: 'Sistemas Operacionais', Carga: 66.7, Período: 'Noturno' },
        { Disciplina: 'Inglês', Carga: 33.3, Período: 'Noturno' },
        { Disciplina: 'Laboratório de Estruturas de Dados e Programação', Carga: 33.3, Período: 'Noturno' },
        { Disciplina: 'Introdução a Banco de Dados', Carga: 66.7, Período: 'Noturno' },
      ]
    };
  }

  renderTableHeader() {
    return this.state.headers.map((header, index) => (
      <th key={index}>{header.toUpperCase()}</th>
    ));
  }

  renderTableData() {
    return this.state.rows.map((row, index) => {
      const values = Object.values(row);
      return (
        <tr key={index}>
          {values.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );
    });
  }

  render() {
    return (
      <div id="courseDataDiv">
        <h2>Componentes Curriculares</h2>
        <table id="courseDataTable">
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<Ads />, document.getElementById('ads'));