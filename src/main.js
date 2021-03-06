/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';
import App from './App';
import router from './router';
import '../node_modules/semantic-ui-css/semantic.min.css';
// import semantic from 'semantic';

Vue.config.productionTip = false;

const apolloURI = process.env.LOCATION_CONTEXT;

// Create the apollo client
const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://' + apolloURI + '/graphql',
        transportBatching: true,
    }),
    connectToDevTools: true,
    // queryTransformer: addTypename,
    // dataIdFromObject: r => r.id,
});
// Install the vue plugin
Vue.use(VueApollo, {
    apolloClient,
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    apolloProvider,
    template: '<App/>',
    components: { App },
});
