import { defineStore } from "pinia";

const useWebsiteStore = defineStore("website", {
    state: () => ({
        fullscreen: false,
    }),
    actions: {
        setFullscreen(value) {
            this.fullscreen = value;
        },
    },
});

export default useWebsiteStore;
