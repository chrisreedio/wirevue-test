import "./bootstrap";
import "../css/app.css";
import "./connector.js";

import Aura from "@primevue/themes/aura";
import Button from "primevue/button";
import Chip from "primevue/chip";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { h } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

window.$inductor.loadVueComponent = async function (name, props, divId) {
    console.log("Initializing Vue Component:", name);
    console.log("Props:", props);
    const pageComponent = await resolvePageComponent<any>(
        `./Components/${name}.vue`,
        import.meta.glob("./Components/**/*.vue")
    );
    const app = createApp({
        render: () => h(pageComponent.default, { ...props }),
    });
    // Plugins
    app.use(pinia);
    app.use(PrimeVue, {
        theme: {
            preset: Aura,
        },
    });
    // Global Prime Vue Components
    //app.component('Button', Button);
    //app.component('Chip', Chip);

    // Mount
    app.mount(divId);
};
