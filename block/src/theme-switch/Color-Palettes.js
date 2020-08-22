const {Component, Fragment} = wp.element;


class Palette extends Component {

    state = {
        type: 'default'
    };

    handleColorPalegtte(type) {
        const elm = document.getElementsByTagName('html')[0];
        const btn = document.getElementById('wpDarkModeThemeSwitchBtn');

        elm.classList.remove('wp-dark-mode-theme-defaul', 'wp-dark-mode-theme-darkmode', 'wp-dark-mode-theme-chathams', 'wp-dark-mode-theme-pumpkin', 'wp-dark-mode-theme-mustard', 'wp-dark-mode-theme-concord');
        elm.classList.add(`wp-dark-mode-theme-${type}`);

        btn.classList.remove('wpdm-theme-switch__default', 'wpdm-theme-switch__darkmode', 'wpdm-theme-switch__chathams', 'wpdm-theme-switch__pumpkin', 'wpdm-theme-switch__mustard', 'wpdm-theme-switch__concord',)
        btn.classList.add(`wpdm-theme-switch__${type}`);

        this.setState({type: type});
    }

    render() {
        const {type} = this.state;

        const labels = {
            default: 'Default',
            darkmode: 'Darkmode',
            chathams: 'Chathams',
            pumpkin: 'Pumpkin Spice',
            mustard: 'Mustard Seed',
            concord: 'Concord Jam',
        };

        return (
            <div>
                {Object.entries(labels).map(([key, label], i) =>
                    <a href="#" className={type == key ? 'active' : ''} onClick={() => this.handleColorPalegtte(key)}><span className={`wpdm-theme-switch wpdm-theme-switch__${key}`}></span> {label}
                        {type == key ? <span className='tick'>✓</span> : ''} </a>)}
            </div>
        )
    }
}

class ColorPalettes extends Component {


    render() {
        const {active} = this.props;

        return (
            <Fragment>
                {
                    active ?
                        <div className="wpdm-color-palettes-wrapper">
                            <Palette/>
                        </div>
                        : ''
                }
            </Fragment>
        )
    }
}

export default ColorPalettes;