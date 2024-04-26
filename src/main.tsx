import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from 'react-router-dom'
import { Home } from './components/Home.tsx'
import { CampaignComponent } from './components/Campaign.tsx'
import { Providers } from './Provider.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'campaign',
        element: <CampaignComponent />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
        {/*<App />*/}
    </React.StrictMode>
)
