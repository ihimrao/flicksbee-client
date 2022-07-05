const { default: images } = require('assets/images');

const styleObjs = (theme) => ({
    backgroundImgWrapper: {
        backgroundImage: `url(${ images.authBgImg })`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    overlayStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 1,
        background: 'linear-gradient(to right, #000000, #000000, #3A1C7120)',
        zIndex: 0,
    },
    formContainerWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        [ theme.breakpoints.down('sm') ]: {
            maxWidth: '300px',
            minWidth: '300px',
        },
    },
    heroSectionStyles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
    },
    formContainerStyles: {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
        maxWidth: '500px',
    },
    formBelowActionWrapperStyles: {
        width: '100%',
        padding: `0px ${ theme.spacing(1) }`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardSubmitButtonWrapper: {
        marginTop: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});

export const authTypographyStyles = (theme) => ({
    authTypographyStyles: {
        '&.auth-heading': {
            color: theme.palette.primaryColor,
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '2.33',
            letterSpacing: '0em',
            paddingBottom: '3px',
        },
        '&.auth-hint': {
            color: theme.palette.primaryColor,
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1.66',
            letterSpacing: '0.0033em',
        },
        '&.auth-hint-2': {
            color: theme.palette.primaryColor,
            fontWeight: 400,
            fontSize: '0.85rem',
            lineHeight: '1.66',
            letterSpacing: '0.0033em',
            margin: '0px 3px',
        },
    },

});
export default styleObjs;
