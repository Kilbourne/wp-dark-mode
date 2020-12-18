const {__} = wp.i18n;
const {Component, Fragment} = wp.element;

import btn1_light from './button-presets/btn-1/light.png';
import btn1_dark from './button-presets/btn-1/dark.png';

import btn3_moon_dark from './button-presets/btn-3/moon-dark.png';
import btn3_moon_light from './button-presets/btn-3/moon-light.png';
import btn3_sun_dark from './button-presets/btn-3/sun-dark.png';
import btn3_sun_light from './button-presets/btn-3/sun-light.png';

import btn4_light from './button-presets/btn-4/light.png';
import btn4_dark from './button-presets/btn-4/dark.png';

import btn5_light from './button-presets/btn-5/light.png';
import btn5_dark from './button-presets/btn-5/dark.png';

import btn6_light from './button-presets/btn-6/light.png';
import btn6_dark from './button-presets/btn-6/dark.png';

import btn7_light from './button-presets/btn-7/light.png';
import btn7_dark from './button-presets/btn-7/dark.png';


class Button extends Component {

    render() {
        const {style} = this.props;

        return (
            <Fragment>
                <input type="checkbox" id="wp-dark-mode-switch" className="wp-dark-mode-switch"/>

                <div className={`wp-dark-mode-switcher wp-dark-mode-ignore style-${style}`}>
                    {
                        style === 2 ?
                            <label htmlFor="wp-dark-mode-switch">
                                <div className="toggle"></div>
                                <div className="modes">
                                    <p className="light">Light</p>
                                    <p className="dark">Dark</p>
                                </div>
                            </label>
                            : style === 3 ?
                            <Fragment>

                                <img className="sun-light" src={btn3_sun_light}/>
                                <img className="sun-dark" src={btn3_sun_dark}/>
                                <label htmlFor="wp-dark-mode-switch">
                                    <div className="toggle"></div>
                                </label>
                                <img className="moon-dark" src={btn3_moon_dark}/>
                                <img className="moon-light" src={btn3_moon_light}/>

                            </Fragment>
                            : style === 4 ?
                                <Fragment>
                                    <p>Light</p>
                                    <label htmlFor="wp-dark-mode-switch">
                                        <div className="modes">
                                            <img className="light" src={btn4_light}/>
                                            <img className="dark" src={btn4_dark}/>
                                        </div>
                                    </label>
                                    <p>Dark</p>
                                </Fragment>
                                :
                                style === 5 ?
                                    <label htmlFor="wp-dark-mode-switch">
                                        <div className="modes">
                                            <img className="light" src={btn5_light}/>
                                            <img className="dark" src={btn5_dark}/>
                                        </div>
                                    </label>
                                    :
                                    style === 6 ?
                                        <label htmlFor="wp-dark-mode-switch">
                                            <div className="modes">
                                                <img className="light" src={btn6_light}/>
                                                <img className="dark" src={btn6_dark}/>
                                            </div>
                                        </label>
                                        : style === 7 ?
                                        <label htmlFor="wp-dark-mode-switch">
                                            <div className="toggle"></div>
                                            <div className="modes">
                                                <img className="light" src={btn7_light}/>
                                                <img className="dark" src={btn7_dark}/>
                                            </div>
                                        </label>
                                        :
                                        <label htmlFor="wp-dark-mode-switch">
                                            <div className="modes">
                                                <img className="light" src={btn1_light}/>
                                                <img className="dark" src={btn1_dark}/>
                                            </div>
                                        </label>
                    }

                </div>

            </Fragment>

        )
    }
}

export default Button;