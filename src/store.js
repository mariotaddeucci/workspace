import { reactive, computed } from 'vue';


function useStore() {

    const available = [
        { name: "Whatsapp", domain: "whatsapp.com", url: "https://web.whatsapp.com" },
        { name: "Telegram", domain: "telegram.org", url: "https://web.telegram.org" },
        { name: "Figma", domain: "figma.com", url: "https://figma.com" },
        { name: "Github", domain: "github.com", url: "https://github.com" },
        { name: "Medium", domain: "medium.com", url: "https://medium.com" },
        { name: "Notion", domain: "notion.so", url: "https://notion.so" },
        { name: "monday", domain: "monday.com" },
        { name: "Slack", domain: "slack.com" },
        { name: "Trello", domain: "trello.com" }
    ];

    /* State Variables */
    const state = reactive({
        active: null,
        installed: [],
        config: null
    });

    /* Load Local Storage data */
    //Object.entries(JSON.parse(localStorage.getItem('data')) || {}).forEach(([key, value]) => {
    //    if (key in state) state[key] = value;
    //});

    /* Save state on local storage */
    //   watch(state, data => localStorage.setItem('data', JSON.stringify(data)));

    const getters = {
        active: () => state.active,
        installed: () => state.installed,
        config: () => state.config,
        available: () => {
            const urls = state.installed.map(app => app.url);
            return available.filter(f => !urls.includes(f.url) && f.url).map(o => ({ ...o, logo: `/apps/${o.domain}.png` }))
        }
    }

    const actions = {
        setActive: (app) => state.active = app,
        install: app => state.installed.push(app),
        uninstall: app => state.installed = state.installed.filter(a => a != app),
        setConfig: (cfg) => state.config = cfg || null
    }

    return { actions, getters }
}

const base = {
    ...useStore(),
    mapGetters(...args) {
        return args.reduce((obj, k) => {
            const cmp = base.getters[k];
            if (typeof cmp == 'function') obj[k] = computed(() => base.getters[k]())
            else obj[k] = computed(() => base.getters[k])
            return obj;
        }, {});
    },
    mapActions(...args) {
        return args.reduce((obj, k) => {
            obj[k] = base.actions[k];
            return obj;
        }, {});
    }
}

export default base;
export const mapGetters = base.mapGetters;
export const mapActions = base.mapActions;
