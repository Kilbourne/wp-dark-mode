const {__} = wp.i18n;
const {Component, Fragment, createRef} = wp.element;
const {Placeholder, Spinner, PanelBody, SelectControl} = wp.components;
const {InspectorControls, BlockControls, AlignmentToolbar} = wp.editor;

class Image_Choose extends Component {

    state = {
        value: this.props.value
    };

    render() {

        const images = [
            'btn-1-light.png',
            'btn-2-light.png',
            'btn-3-light.png',
            'btn-4-light.png',
            'btn-5-light.png',
            'btn-6-light.png',
        ];

        return (
            <div className="image-choose-wrap">
                {images.map((image, i) => {
                    i = i + 1;
                    return (
                        <label className={`image-choose-opt ${this.state.value == i ? 'active' : ''}`} htmlFor={`style_${i}`}>
                            <input type="radio" className="radio" id={`style_${i}`} name="switch_style" value={i}
                                onChange={() => {
                                    const val = document.getElementById(`style_${i}`).value;
                                    this.setState({
                                        value: val,
                                    });

                                    this.props.onChange(val);

                                }}
                            />
                            <img src={wpDarkModeAdmin.pluginUrl + 'assets/images/button-presets/' + image} className="image-choose-img"/>
                        </label>
                    )
                })}
            </div>
        )
    }
}

export default Image_Choose;
