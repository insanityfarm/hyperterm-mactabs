'use strict'

const tabShadowSize = '15px';
const css = `
    .hyperterm_main {
        border: none !important;
    }
    .header_header {
        overflow: hidden !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
    }
    .tabs_nav {
        background: linear-gradient(to bottom, #ececec 0%,#e2e2e2 100%) !important;
    }
    .tabs_nav .tabs_title {
        height: 34px !important;
        border-bottom: 1px solid #cacaca !important;
    }
    .tabs_nav .tabs_title, .tabs_nav .tab_tab {
        color: #333 !important;
        font-family: "Lucida Grande" !important;
        border-color: #cacaca !important;
        background: linear-gradient(to bottom, #ececec 0%,#e2e2e2 100%) !important;
    }
    .tabs_nav .tab_tab:not(.tab_active) {
        color: #888 !important;
        border-left: 1px solid #ddd !important;
    }
    .tabs_nav .tab_tab.tab_first:after, .tabs_nav .tab_tab:last-of-type:after {
        content: "" !important;
        display: block !important;
        background: linear-gradient(to bottom, #ececec 0%,#e2e2e2 100%) !important;
        width: 256px !important;
        position: absolute !important;
        top: 0 !important;
        bottom: 1px !important;
        z-index: 1 !important;
    }
    .tabs_nav .tab_tab.tab_first:after {
        left: -257px !important;
        right: auto !important;
    }
    .tabs_nav .tab_tab:last-of-type:after {
        right: -257px !important;
        left: auto !important;
    }
    .tabs_nav .tab_tab:last_of_type.tab_active:after {
        right: -256px !important;
    }
    .tabs_nav .tab_tab.tab_first:not(.tab_active):not(:hover) {
        border-left: 1px solid transparent !important;
    }
    .tabs_nav .tab_tab:not(.tab_active):hover {
        color: #333 !important;
        background: linear-gradient(to bottom, #efefef 0%,#eaeaea 100%) !important;
    }
    .tabs_nav .tabs_list .tab_active {
        background: linear-gradient(to bottom, #fff 0%,#f3f3f3 100%) !important;
    }
    .tabs_nav .tabs_list .tab_active:before {
        border-bottom-color: #f3f3f3 !important;
        border-bottom-color: #e6e6e6 !important;
    }
    .tabs_nav .tabs_list .tab_active .tab_text {
        border-right: none !important;
        border-right: 1px solid transparent !important;
        box-shadow: 0 0 ${tabShadowSize} 0 rgba(0,0,0,0.1) !important;
        z-index: 1 !important;
    }
    .tabs_nav .tabs_list .tab_icon {
        right: auto !important;
        left: 7px !important;
        z-index: 2 !important;
        color: #333 !important;
    }
    .tabs_nav .tabs_list .tab_icon:hover {
        color: #fff !important;
        padding: 4px !important;
        background-color: #aaa !important;
    }
    .tabs_nav .tabs_borderShim {
        border-color: #ccc !important;
    }
`;
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        css: (config.css || '') + css
    });
}
exports.decorateBrowserOptions = defaults => {
    return Object.assign({}, defaults, {
    	titleBarStyle: '',
    	transparent: true,
    	frame: false
    });
}
