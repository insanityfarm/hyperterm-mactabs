'use strict'

const tabShadowSize = '8px';
const tabBarOpacity = '0.6';
const css = `
    .hyper_main {
        border: none !important;
    }
    .header_header {
        //backdrop-filter: blur(10px) !important;
        border: none !important;
    }
    .terms_terms {
        margin-top: 0 !important;
        top: -20px !important;
        right: -20px !important;
        bottom: -20px !important;
        left: -20px !important;
    }
    .terms_termGroup, webview {
        padding: 55px 20px 20px 20px !important;
    }
    .header_header {
//         overflow: hidden !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
    }
    //.tabs_nav {
    //    background: linear-gradient(to bottom, #ececec 0%,#e2e2e2 100%) !important;
    //}
    .tabs_nav .tabs_title {
        height: 34px !important;
        border-bottom: 1px solid #cacaca !important;
    }
    .tabs_nav .tabs_title, .tabs_nav .tab_tab {
        color: #333 !important;
        font-family: "Lucida Grande" !important;
        border-color: #cacaca !important;
        background: linear-gradient(to bottom, rgba(236,236,236,${tabBarOpacity}) 0%,rgba(226,226,226,${tabBarOpacity}) 100%) !important;
    }
    .tabs_nav .tab_tab:not(.tab_active) {
        color: #888 !important;
        border-left: 1px solid #ddd !important;
    }
    .tabs_nav .tab_tab.tab_first:after {
        content: "" !important;
        display: block !important;
        background: linear-gradient(to bottom, rgba(236,236,236,${tabBarOpacity}) 0%,rgba(226,226,226,${tabBarOpacity}) 100%) !important;
        width: 76px !important;
        position: absolute !important;
        top: 0 !important;
        bottom: 1px !important;
        left: -77px !important;
        z-index: 1 !important;
    }
    .tabs_nav .tab_tab.tab_first:not(.tab_active):after {
        bottom: 0 !important;
    }
    .tabs_nav .tab_tab.tab_first:not(.tab_active):not(:hover) {
        border-left: 1px solid transparent !important;
    }
    .tabs_nav .tab_tab:not(.tab_active):hover {
        color: #333 !important;
        background: linear-gradient(to bottom, #efefef 0%,#eaeaea 100%) !important;
    }
    .tabs_nav .tabs_list .tab_active {
//         background: linear-gradient(to bottom, rgba(255,255,255,0.85) 0%,rgba(243,243,243,0.85) 100%) !important;
        background: transparent !important;
        background: linear-gradient(to bottom, rgba(236,236,236,0.45) 0%, rgba(236,236,236,0.19) 70%, rgba(236,236,236,0) 100%),
            radial-gradient(ellipse 180% 100% at 50% 0, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%) !important;
        //background: rgba(243,234,243,0.8) !important;
    }
    .tabs_nav .tabs_list .tab_active:before {
        border-bottom-color: #f3f3f3 !important;
        border-bottom-color: #e6e6e6 !important;
    }
    .tabs_nav .tabs_list .tab_active .tab_text {
        border-right: none !important;
        border-right: 1px solid transparent !important;
//         box-shadow: 0 0 ${tabShadowSize} 0 rgba(0,0,0,0.1) !important;
        z-index: 1 !important;
        overflow: visible !important;
    }
    .tabs_nav .tabs_list .tab_active .tab_text:before,
    .tabs_nav .tabs_list .tab_active .tab_text:after {
    	content: "" !important;
    	display: block !important;
    	width: ${tabShadowSize};
    	position: absolute;
    	top: 0;
    	bottom: 0;
    }
    .tabs_nav .tabs_list .tab_active .tab_text:before {
    	background: linear-gradient(to left, rgba(0,0,0,0.03) 0%,rgba(0,0,0,0) 90%) !important;
    	left: -${tabShadowSize};
    }
    .tabs_nav .tabs_list .tab_active .tab_text:after {
    	background: linear-gradient(to right, rgba(0,0,0,0.03) 0%,rgba(0,0,0,0) 90%) !important;
    	right: -${tabShadowSize};
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
    .tabs_nav .tabs_list .tab_hasActivity {
    	// add CSS here to style tabs that need attention
    	// open a bunch of tabs quickly to see the class applied to some
    }
`;
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        css: (config.css || '') + css,
    });
}
exports.decorateBrowserOptions = defaults => {
    return Object.assign({}, defaults, {
    	//titleBarStyle: 'hidden', <-- this may be the key to a "slim mode"
    	vibrancy: 'appearance-based',
    	transparent: true,
    	frame: false,
    	webPreferences: {
            experimentalFeatures: true
        }
    });
}
