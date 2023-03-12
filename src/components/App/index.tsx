import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { configureAdaptiveStore } from 'sugarbush'
import { ToastContainer } from 'react-toastify'
import Application from '../Application'
import 'react-toastify/dist/ReactToastify.css';

/**
 * Create the Sugarbush AdaptiveStore
 * */
export const adpStore = configureAdaptiveStore({
  dispatch: store.dispatch
})

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Application />
        <ToastContainer
          style={{width: 500}}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Provider>
    </div>
  )
}

export default App

