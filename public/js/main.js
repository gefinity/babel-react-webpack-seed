import React        from "react";
import ReactDOM     from "react-dom";

const Test = React.createClass({

    render () {

        return (
            <div>
                What are you doing dave?
            </div>
        );

    }

});

let props = {};
ReactDOM.render(
    React.createElement(Test, props),
    document.getElementById("app")
);