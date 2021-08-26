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
	[ 'core/heading', {
		textAlign: 'center',
		placeholder: 'Write a heading about callouts here'
	} ],
	[ 'core/columns', {"verticalAlignment":"center","align":"wide"}, [
		['core/column', {}, [
			[ 'core/image' ],
			[ 'core/heading', {"textAlign":"center","level":3} ],
			[ 'core/paragraph', {"align":"center"} ],
			[ 'core/buttons', {"contentJustification":"center"}, [
				[ 'core/button' ]
			] ]
		] ],
		['core/column', {}, [
			[ 'core/image' ],
			[ 'core/heading', {"textAlign":"center","level":3} ],
			[ 'core/paragraph', {"align":"center"} ],
			[ 'core/buttons', {"contentJustification":"center"}, [
				[ 'core/button' ]
			] ]
		] ],
		['core/column', {}, [
			[ 'core/image' ],
			[ 'core/heading', {"textAlign":"center","level":3} ],
			[ 'core/paragraph', {"align":"center"} ],
			[ 'core/buttons', {"contentJustification":"center"}, [
				[ 'core/button' ]
			] ]
		] ],
	] ],
];

/*
 * New `core/group` block variation.
 */
const variationsExample = {
	name: 'variations-example',
	title: __( 'Callout Variations Example', 'variations-example' ),
	description: __( 'Sets up a three column callout structure.', 'variations-example' ),
	scope: [ 'inserter' ],
	attributes: {"align":"full","style":{"spacing":{"padding":{"top":"60px","right":"60px","bottom":"60px","left":"60px"}}},"gradient":"red-to-purple"},
	icon: {
		background: '#000',
		foreground: '#fff',
		src: 'layout'
	},
	innerBlocks: CONTENT,
};

registerBlockVariation( 'core/group', variationsExample );