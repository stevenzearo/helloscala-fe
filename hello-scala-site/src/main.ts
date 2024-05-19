// import './assets/main.css'
// import './assets/css/main.css'
// import './assets/css/prism.css'
// import './assets/css/style.css'
import './assets/particles.json'
import {createApp} from 'vue'
// import App from './App.vue'
import MainContent from './components/MainContent.vue'

import Particles from "@tsparticles/vue3";
import {loadFull} from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.


createApp(MainContent).use(Particles, {
    init: async (engine: any) => {
        await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        // await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
}).mount('#main-content')
