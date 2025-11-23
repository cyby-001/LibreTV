const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    bf: {
        api: 'http://by.bfzyapi.com/api.php',
        name: '暴风影音',
    },
    js: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    }
    
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
