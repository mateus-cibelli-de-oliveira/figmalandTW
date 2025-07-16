import { Button } from './components/button'
import { Heading } from './components/Heading'

function App() {
  return (
    <>
      {/* <h1 className='text-text font-custom-graphik font-normal'>Teste Tailwind Graphik normal!</h1>
      <h2 className='text-blue-500 bg-dark-background font-custom-graphik font-bold'>Teste Tailwind Graphik bold!</h2>
      <h3 className='mobile:bg-green-400'>Teste color background!</h3> */}
      <div className='bg-dark-background'>
        <di className='bg-green-200'>
          <Heading>Hellow World of Heading 1</Heading>
          <Heading type='h2' color='white'>Hellow World of Heading 2</Heading>
        </di>
        <Button>Primary Background</Button>
        <Button variant='secondary'>Secundary Background</Button>
        <Button isBold>Bold Text With Primary Background</Button>
        <Button isBold variant='secondary'>Bold Text With Secundary Background</Button>
      </div>

    </>
  )
}

export default App
