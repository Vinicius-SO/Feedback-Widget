interface ButtonProps {
	text: string
}

function Button(props: ButtonProps){
	return(
      <button>{props.text}</button>
  )

}

function App() {
  return (
    <>
      <Button text="Botão 1"/>
      <Button text="Botão 2"/>
      <Button text="Botão 3"/>
    </>
  )
}

export default App
