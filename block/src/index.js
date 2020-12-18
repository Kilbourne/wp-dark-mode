import Button from "./Button";
import Edit from "./Edit";
import {ReactComponent as Logo} from "./logo.svg";

import './theme-switch';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

registerBlockType('wp-dark-mode-block/dark-mode-switch', {
    title: __('Dark Mode Switch', 'wp-dark-mode'),
    icon: {src: Logo},
    category: 'common',
    attributes: {
        style: {
            type: 'number',
            default: 1,
        },
        alignment: {
            type: 'string',
        },
    },
    supports: {
        align: ['center', 'wide', 'full'],
    },

    edit: Edit,


    save: ({attributes}) => {
        const {alignment, style} = attributes;

        return (
            <div style={{textAlign: alignment}}>
                <Button
                    style={attributes.style}
                />
            </div>
        )
    }
});