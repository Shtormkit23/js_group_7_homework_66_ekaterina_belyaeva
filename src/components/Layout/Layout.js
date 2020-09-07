import React, {Fragment} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";

import './Layout.css';

const Layout = props => (
    <Fragment>
        <Toolbar/>
        <div className="Layout-Content">
            {props.children}
        </div>
    </Fragment>
);

export default Layout;