import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const badgeStyles: ComponentStyleConfig = {
	baseStyle: {
		width: 'fit-content',
		padding: '2px 5px',
		borderRadius: '6px',
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: '13px',
		lineHeight: '19px',
		textTransform: 'none',
		display: 'flex',
		alignItems: 'center',
		gap: '7px',
	},
	variants: {
		lua: {
			bg: '#FFEFC7',
		},
		release: {
			bg: '#E1F5E5',
		},
		script: {
			bg: '#E2E1FF',
		},
		illustration: {
			bg: '#DEEDFF',
		},
		draft: {
			bg: '#F3F3F8',
		},
		synopsis: {
			bg: '#FFEFC7',
		},
		logline: {
			bg: '#E2E1FF',
		},
		finished: {
			bg: '#E1F5E5',
		},
		prod: {
			bg: '#DEEDFF',
		},
		type: {
			bg: '#EEECFC',
			color: '#644DED',
		},
		art_doc_ready: {
			bg: '#FFDAF6',
		},
		doc_ready: {
			bg: '#FEE2D5',
		},
		edits_for_art: {
			bg: '#EDE2FE',
		},
		illustration_done: {
			bg: '#DEEDFF',
		},
		illustration_ready: {
			bg: '#FFDCE5',
		},
		in_production: {
			bg: '#FFEAB6',
		},
		lua_done: {
			bg: '#D0F0FD',
		},
		release_done: {
			bg: '#D1F7C4',
		},
		script_done: {
			bg: '#C2F5E9',
		},
	},
	defaultProps: {
		variant: 'draft',
	},
};
