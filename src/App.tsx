import './App.css'
import teste from './afrodite.json'
import './App.css'

function NomeReceitas(){
  const mostrarReceitas = teste.map((receitas) =>{
    return(
      <div>
        <h2>{receitas.nome}</h2>
        {receitas.secao.map(sec =>
        <div>
        <h2>{sec.nome}</h2>
        <h2>{sec.conteudo}</h2>
        </div>
        )}
      </div>
    )
  })
  return(
    <div>
      {mostrarReceitas}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <button className='button' type="button">anterior</button>
      <button className='button' type="button">proximo</button>
     <NomeReceitas></NomeReceitas>
    </div>
  )
}

export default App
