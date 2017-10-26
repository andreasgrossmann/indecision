class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: ['Thing one', 'Next thing', 'Another thing']
        }
    }
    deleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    makeDecision() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    addOption(option) {
        if (!option) {
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0 } 
                    makeDecision={this.makeDecision}
                />
                <Options 
                    options={this.state.options} 
                    deleteOptions={this.deleteOptions}
                />
                <AddOption 
                    addOption={this.addOption} 
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.makeDecision}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: ''
        }
    }
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState(() => {
            return { error };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
