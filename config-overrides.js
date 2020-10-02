const path = require('path');
const { paths } = require('react-app-rewired');

module.exports = {
    webpack: (config) => {
        const configParam = config;
        configParam.resolve = {
            alias: {
                AppSrc: path.resolve(__dirname, `${paths.appSrc}/`),
                AppComponents: path.resolve(__dirname, `${paths.appSrc}/components/`),
                AppContainers: path.resolve(__dirname, `${paths.appSrc}/containers/`),
                AppConstants: path.resolve(__dirname, `${paths.appSrc}/constants/`),
                AppShared: path.resolve(__dirname, `${paths.appSrc}/shared/`),
                AppStore: path.resolve(__dirname, `${paths.appSrc}/store/`),
            },
        };
        return configParam;
    },
};
