const {__} = wp.i18n;
const {Component, Fragment, createRef} = wp.element;
const {Placeholder, Spinner, PanelBody, SelectControl} = wp.components;
const {InspectorControls, BlockControls, AlignmentToolbar} = wp.editor;

import Image_Choose from "./Image-Choose";

import Button from './Button';

class Edit extends Component {


    render() {
        const {attributes, setAttributes} = this.props;

        return (
            <Fragment>
                <InspectorControls>

                    <PanelBody title={__('Switch Style', 'wp-dark-mode')}>

                        <Image_Choose
                            value={attributes.style}
                            onChange={(newValue) => {

                                setAttributes({
                                    style: parseInt(newValue),
                                });

                            }}
                        />

                    </PanelBody>
                </InspectorControls>

                <BlockControls>
                    <AlignmentToolbar
                        value={attributes.alignment}
                        onChange={val => setAttributes({alignment: val})}
                    />
                </BlockControls>

                <div style={{textAlign: attributes.alignment}}>
                    <Button
                        style={attributes.style}
                    />
                </div>

            </Fragment>
        )
    }
}

export default Edit;
