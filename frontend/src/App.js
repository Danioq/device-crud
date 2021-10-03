
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DeviceList from './views/deviceList'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Switch>
        <Route path="/">
          <DeviceList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
