const gridLayout = {
    mainGridLayout: {
        xs: [ 0, 12 ],
        sm: [ 0, 12 ],
        md: [ 2, 10 ],
    },
    subGridLayout: {
        xs: [ 12, 0 ],
        md: [ 9, 3 ],
        sm: [ 12, 4 ],
        laptop: [ 8, 4 ],
        lg: [ 9, 3 ],
    },

};

const gridLayoutCommonStyles = (() => ({
    gridWrapper: {
        height: 'inherit',
        display: 'flex',
        flexGrow: 1,
        maxHeight: '100vh',
    },
    gridBorderContainer: {
        maxHeight: 'inherit',
        height: 'inherit',
        overflowX: 'scroll',
    },
}));

export {
    gridLayout,
};

export default gridLayoutCommonStyles;
