const {__} = wp.i18n;
const {Component, Fragment, createRef} = wp.element;
const {Placeholder, Spinner, PanelBody, SelectControl} = wp.components;
const {InspectorControls, BlockControls, AlignmentToolbar} = wp.editor;

import Image_Choose from "./Image-Choose";

class Edit extends Component {

    state = {
        htmlView: '',
        switchInit: false,
        loadingSwitchView: true,
    };

    componentDidMount() {
        const {attributes} = this.props;

        if (attributes.style !== 0 && this.state.htmlView === '') {
            this.getSwitchView();
        }

    }


    async getSwitchView() {
        const {attributes} = this.props;

        const switch_view = await wp.apiFetch({
            path: 'wp-dark-mode/v1/switch/' + attributes.style,
        });

        this.setState({
            htmlView: switch_view.success !== undefined && switch_view.success === true ? switch_view.data : '',
            loadingSwitchView: false
        });
    }

    componentDidUpdate() {
        const {attributes} = this.props;

        if (attributes.style !== 0 && this.state.htmlView === '') {
            this.getSwitchView();
        }

        if (this.state.htmlView !== '' && !this.state.switchInit) {
            this.setState({
                switchInit: true,
            })
        }
    }

    render() {
        const {attributes, setAttributes} = this.props;
        const {htmlView, loadingSwitchView} = this.state;


        return (
            <Fragment>
                <InspectorControls>

                    <PanelBody title={__('Switch Style', 'wp-dark-mode')}>

                        <Image_Choose
                            value={attributes.style}
                            onChange={(newValue) => {

                                this.setState({
                                    htmlView: '',
                                    switchInit: false,
                                    loadingSwitchView: true,
                                });

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

                {
                    attributes.style === 0 ?
                        <Placeholder
                            icon="admin-site-alt"
                            label={__('Dark Mode Switch', 'wp-dark-mode')}>
                            <Spinner/>
                        </Placeholder>
                        :
                        <Fragment>
                            {
                                loadingSwitchView ?
                                    <Placeholder
                                        icon="admin-site-alt"
                                        label={__('Dark Mode Switch', 'wp-dark-mode')}>
                                        <Spinner/>
                                    </Placeholder>
                                    :
                                    <div style={{
                                        paddingTop: '1px',
                                        textAlign: attributes.alignment
                                    }} dangerouslySetInnerHTML={{__html: htmlView}}/>
                            }
                        </Fragment>
                }

            </Fragment>
        )
    }
}

export default Edit;
