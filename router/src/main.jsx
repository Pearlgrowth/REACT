import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Editing,{action as EditContact} from './Routes/Editing'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root,{loader as rootLoader,
action as rootAction,
}from './Routes/Root'
import Errorpage from './Error-page Component/Errorpage'
import Contact,{loader as contactLoader,action as contactAction} from './Routes/Contact'
import Destroy from './Routes/Destroy'
const router = createBrowserRouter([
  {
    path: "",
    element: <Root/>,
    errorElement:<Errorpage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "Contacts/:contactId/Edit",
        element: <EditContact/>,
        loader: contactLoader,
        action: contactAction,
        index: true, element: <Index/>
      },
      {
        path: 'Contacts/:contactId/Destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);