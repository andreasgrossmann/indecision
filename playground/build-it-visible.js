class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                {this.state.visible && <p>Yo, here are my details.</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     details: 'Yo, here are my details.'
// }

// let detailsVisible = false;

// const toggleVisibility = () => {
//     detailsVisible = !detailsVisible;
//     renderApp();
// }

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>{detailsVisible ? 'Hide details' : 'Show details'}</button>
//             {detailsVisible && <p>{app.details}</p>}
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// }

// renderApp();
