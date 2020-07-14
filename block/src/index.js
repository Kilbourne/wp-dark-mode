const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {BlockControls, AlignmentToolbar} = wp.blockEditor;
const {Fragment} = wp.element;

registerBlockType('wp-dark-mode/switcher', {
    title: __('Dark Mode Switch', 'wp-dark-mode'),
    icon: 'admin-site-alt',
    category: 'common',
    attributes: {
        alignment: {
            type: 'string',
        },
    },

    edit({attributes, className, setAttributes}) {

        const {alignment} = attributes;

        function onChangeAlignment(updatedAlignment) {
            setAttributes({alignment: updatedAlignment});
        }

        return (
            <Fragment>
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={onChangeAlignment}
                    />
                </BlockControls>

                <div className={`${className}`} style={{textAlign: alignment}}>
                    <input type="checkbox" id="wp-dark-mode-switch" className="wp-dark-mode-switch"/>
                    <div className="wp-dark-mode-switcher">

                        <i className="wp-dark-mode-moon-o wp-dark-mode-moon-icon-size-small"></i>
                        <i className="wp-dark-mode-light-up wp-dark-mode-moon-icon-size-small"></i>

                        <label htmlFor="wp-dark-mode-switch">
                            <div className="toggle"></div>
                            <div className="modes">
                                <p className="light">Light</p>
                                <p className="dark">Dark</p>
                            </div>
                        </label>

                    </div>
                </div>
            </Fragment>
        )
    },


    save({attributes}) {
        const {alignment} = attributes;

        return (
            <div style={{textAlign: alignment}}>{`[wp_dark_mode]`}</div>
        )
    }
});