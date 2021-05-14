import View from 'pages/View/View';
import Home from 'pages/Home/Home';
import Start from 'pages/Start/Start';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Start />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;