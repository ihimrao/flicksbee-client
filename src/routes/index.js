
const routes = {
    root:{id:0,name:'root',path:'/'},
    logIn: { id: 1, name: 'login', path: '/login' },
    signUp: { id: 2, name: 'signUp', path: '/sign-up' },
    forgotPassword: { id: 3, name: 'forgetPassword', path: '/forget-password' },
    verification: { id: 4, name: 'verification', path: '/verification' },
    demoWithId: { id: 5, name: 'demoWithId', path: '/demo/[demoId]' },
};

const navbarActiveItems = {
    // dashboard: {
    //     leftNavbar: sideNavbarItems.DASHBOARD, topNavbar: topNavbarItems.EXPLORE, path: routes.player.path,  name: 'Dashboard',
    // },
    // musicTrack: { leftNavbar: sideNavbarItems.DASHBOARD, topNavbar: topNavbarItems.EXPLORE, path: routes.musicTrack.path  },
    // playlist: {
    //     leftNavbar: sideNavbarItems.PLAYLIST, topNavbar: topNavbarItems.EXPLORE, path: routes.playlist.path, name: 'Playlist',
    // },
    // uploadMusic: {
    //     leftNavbar: sideNavbarItems.UPLOAD_MUSIC, topNavbar: topNavbarItems.EXPLORE, path: routes.uploadMusic.path,  name: 'Upload Music',
    // },

};

export {
    navbarActiveItems,
};

export default routes;
