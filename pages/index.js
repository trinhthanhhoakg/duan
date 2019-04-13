/* Without CSS Modules, maybe with PostCSS */

//export default () => <div className='example'>O Hai world!</div>

/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default () => {
  const data = [
    {
      data: '14/3/2018',
      eventName: 'quẩy',
      location: 'VN',
      tag: 'coding'
    },
    {
      data: '6/7/2017',
      eventName: 'hòa',
      location: 'VietNamese',
      tag: 'coding'
    }
  ]
  return (
    <>
      <nav
        class="navbar navbar-dark"
        style={{ justifyContent: 'center', background: '#000' }}
      >
        <span class="navbar-brand mb-0 h1">
          Ahihi
          <span style={{ color: 'red' }}>event</span>
        </span>
      </nav>

      <div
        class="jumbotron jumbotron-fluid"
        style={{ color: 'white', background: '#000' }}
      >
        <div class="container">
          <h1 class="display-4">
            <trong>SỰ KIỆN</trong>
          </h1>
          <p class="lead">ahihi do cho :))</p>
        </div>
      </div>
      <section className="container">
        <h1 style={{ fontWeight: 400 }}> Sắp diễn ra</h1>
        <hr />

        {data.map((event, i) => (
          <div key={i}>
            <div className="row">
              <div className="col-3">
                <h2>Tháng {event.data.split('/')[1]}</h2>
                <h1>{event.data.split('/')[0]}</h1>
              </div>
              <div className="col-6">
                <h1>{event.eventName}</h1>
                <h4>{event.location}</h4>
              </div>
              <div className="col-3">
                <h1>{event.tag}</h1>
                <h4>do choa :))</h4>
              </div>
            </div>
          </div>
        ))}
        <hr />
      </section>
    </>
  )
}
