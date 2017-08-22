import React from "react";

import { render } from "react-dom";

import { AppContainer } from "react-hot-loader";

import { Router, browserHistory } from 'react-router';

import routes from './routes';

render(
    <AppContainer>
        <Router history={browserHistory} routes={routes} />
    </AppContainer>,
    document.getElementById("root"),
);

if (module.hot) {
    module.hot.accept("./components/App", () => {
        render(
            <AppContainer>
                <Router history={browserHistory} routes={routes} />
            </AppContainer>,
            document.getElementById("root"),
        );
    });
}
