import data from "./data/data"
import CardContainer from "./components/container/CardContainer"

function App() {
  return (
    <div
      className="h-dvh max-w-5xl mx-auto px-4 flex flex-col 2xs:px-5 md:justify-center"
    >
      <section
        className="py-16 flex flex-col *:p-10 2xs:*:p-12 md:flex-row md:flex-wrap lg:flex-nowrap"
      >
        {
          data.map(card => <CardContainer key={card.id} id={card.id} title={card.title} description={card.description} icon={card.icon} btnText={card.btnText} />)
        }
      </section>
    </div>
  )
}

export default App