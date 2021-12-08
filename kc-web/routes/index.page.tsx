import ReactDOM from 'react-dom'

import { Navigation } from '../src/components/navigation'

import App from '../src/app'

const Index = () => <Navigation />

ReactDOM.render(
  <App>
    <Index />
  </App>,
  document.querySelector('#root'),
)
