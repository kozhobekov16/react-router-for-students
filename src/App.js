import React, {useState} from 'react'
const App = () => {
  const [theme, setTheme] = useState(false)
  const changeName = () => {
    setTimeout(() => {
      setTheme((theme) => {
        return theme === false
      })
    }, 1000)
  }
  return (
    <div className={theme ? 'dark' : 'white'}>
      <button onClick={changeName}>Change theme</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo ducimus voluptatibus, modi, dolorem explicabo perferendis sit eveniet corrupti molestias delectus qui est velit porro magni quis optio animi! Quibusdam.
      Voluptatibus aspernatur libero cumque dolore ipsam consequatur nostrum, corrupti molestiae officiis repellendus nobis facilis harum aliquam rerum modi nam sed nesciunt assumenda consequuntur? Et maiores quod odit numquam, eaque minima?
      Ea atque odit eos mollitia numquam tenetur quia dolores voluptates fugit labore accusamus hic, placeat tempora accusantium nostrum optio officiis aliquid, voluptas consequuntur incidunt? Rerum possimus pariatur impedit corporis error.
      Numquam, necessitatibus quo. Adipisci modi deleniti hic ratione rem ex voluptate rerum distinctio ipsam blanditiis cumque officia dolorem, laboriosam debitis soluta magni voluptatem laudantium impedit. Aut repudiandae iste vel voluptatem.
      Libero quas ducimus quia aut esse deserunt nihil, sit, sunt molestiae velit possimus dolorem quisquam tenetur, unde distinctio magnam debitis nam maiores animi. Sunt cumque aspernatur sapiente itaque error maiores.
      Quaerat cum sit, accusamus repudiandae hic voluptatum possimus. Amet aperiam ex reiciendis alias temporibus officiis tempore voluptatem maiores molestias eius excepturi, nemo suscipit error dolor, ipsum quasi! Esse, voluptates aperiam!
      Dignissimos velit, reprehenderit minus quibusdam omnis rerum assumenda modi, voluptates odio voluptatibus accusamus illum culpa sunt sint provident, id vel quis perspiciatis corrupti voluptate earum quo delectus exercitationem! Dolorum, laudantium.
      Corporis neque consectetur perferendis voluptate? Ad modi ratione labore perferendis nostrum adipisci, reprehenderit voluptates debitis vel fugiat! Exercitationem natus velit vel, temporibus consectetur excepturi pariatur! Autem numquam molestiae omnis ullam!
      Impedit consequuntur minus facere, error nisi asperiores consectetur? Eaque reprehenderit rerum tenetur aliquam quis, atque, ab id delectus quia necessitatibus similique? Iusto nobis veritatis praesentium quibusdam soluta itaque. At, et.
      Molestias fugiat quaerat debitis esse quo at ex. Facilis quos, voluptates hic dignissimos voluptatem, non, laudantium repudiandae adipisci suscipit asperiores assumenda eligendi quae commodi totam provident illum! Quibusdam, reprehenderit officia.</p>
    </div>
  )
}

export default App