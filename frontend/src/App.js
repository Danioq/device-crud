
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddDevice from './views/addDevice'
import Alerts from './views/alerts'
import DeviceList from './views/deviceList'
import EditDevice from './views/editDevice'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Alerts />
      <Switch>
        <Route exact path="/">
          <DeviceList />
        </Route>
        <Route path="/add">
          <AddDevice />
        </Route>
        <Route path="/edit/:id">
          <EditDevice />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
