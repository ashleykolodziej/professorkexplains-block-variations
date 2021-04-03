/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */
import { registerBlockVariation } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Variation content
 */

const CONTENT = [
    // We'll write our variation here.
];

/*
 * New `core/group` block variation.
 */
const variationsExample = {
	name: 'variations-example',
	title: __( 'Group Variation Example', 'variations-example' ),
	description: __( 'A demo for WordPress fans.', 'variations-example' ),
	scope: [ 'inserter' ],
	attributes: {
		align: 'full',
	},
	icon: {
		background: '#000',
		foreground: '#fff',
		src: 'layout'
	},
	innerBlocks: CONTENT,
};

registerBlockVariation( 'core/group', variationsExample );