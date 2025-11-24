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
    },
    1080zyku: {
        api: 'https://api.1080zyku.com/inc/api_mac10.php',
        name: 'TV-1080资源',
    },
    155api: {
        api: 'https://155api.com/api.php/provide/vod',
        name: 'AV-155资源',
    },
    360zy: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: 'TV-360资源',
    },
    ckzy: {
        api: 'https://ckzy.me/api.php/provide/vod',
        name: 'TV-CK资源',
    },
    ukuapi: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'TV-U酷资源',
    },
    ukuapi88: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'TV-U酷资源88',
    },
    ikunzy: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'TV-ikun资源',
    },
    wujinapi_cc: {
        api: 'https://api.wujinapi.cc/api.php/provide/vod',
        name: 'TV-wujinapi无尽',
    },
    yayazy: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: 'TV-丫丫点播',
    },
    guangsuapi: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: 'TV-光速资源',
    },
    wolongzyw: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: 'TV-卧龙点播',
    },
    wolongzy_cc: {
        api: 'https://collect.wolongzy.cc/api.php/provide/vod',
        name: 'TV-卧龙资源',
    },
    wolongzyw_com: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: 'TV-卧龙资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: 'TV-天涯资源',
    },
    rycjapi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: 'TV-如意资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: 'TV-小猫咪资源',
    },
    xinlangapi: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: 'TV-新浪点播',
    },
    wujinapi_com: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: 'TV-无尽资源(com)',
    },
    wujinapi_me: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: 'TV-无尽资源(me)',
    },
    wujinapi_net: {
        api: 'https://api.wujinapi.net/api.php/provide/vod',
        name: 'TV-无尽资源(net)',
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: 'TV-旺旺短剧',
    },
    wwzy_api: {
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        name: 'TV-旺旺资源',
    },
    bfzyapi: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: 'TV-暴风资源',
    },
    zuidazy: {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: 'TV-最大点播',
    },
    zuidapi: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: 'TV-最大资源',
    },
    apiyhzy: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: 'TV-樱花资源',
    },
    yparse: {
        api: 'https://api.yparse.com/api/json',
        name: 'TV-步步高资源',
    },
    niuniuzy: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: 'TV-牛牛点播',
    },
    dyttzyapi: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: 'TV-电影天堂资源',
    },
    bwzyz: {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: 'AV-百万资源',
    },
    apibdzy: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: 'TV-百度云资源',
    },
    1080zyku_json: {
        api: 'https://api.1080zyku.com/inc/apijson.php/',
        name: 'TV-神马云',
    },
    suoniapi: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: 'TV-索尼资源',
    },
    hongniuzy2: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: 'TV-红牛资源2',
    },
    maotaizy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: 'TV-茅台资源',
    },
    huyaapi: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: 'TV-虎牙资源',
    },
    dbzy_caiji: {
        api: 'https://caiji.dbzy.tv/api.php/provide/vod',
        name: 'TV-豆瓣资源(采集)',
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: 'TV-豆瓣资源',
    },
    hhzyapi: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: 'TV-豪华资源',
    },
    subocaiji: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: 'TV-速博资源',
    },
    lziapi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: 'TV-量子资源',
    },
    jinyingzy: {
        api: 'https://jinyingzy.com/api.php/provide/vod',
        name: 'TV-金鹰点播',
    },
    jyzyapi: {
        api: 'https://jyzyapi.com/api.php/provide/vod',
        name: 'TV-金鹰资源',
    },
    sdzyapi: {
        api: 'https://sdzyapi.com/api.php/provide/vod',
        name: 'TV-闪电资源',
    },
    ffzyapi: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: 'TV-非凡资源',
    },
    p2100: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: 'TV-飘零资源',
    },
    mozhuazy: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: 'TV-魔爪资源',
    },
    moduapi: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: 'TV-魔都动漫',
    },
    mdzyapi: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: 'TV-魔都资源',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: 'TV-黑木耳',
    },
    heimuer02: {
        api: 'https://json02.heimuer.xyz/api.php/provide/vod',
        name: 'TV-黑木耳点播',
    },
    91md: {
        api: 'https://91md.me/api.php/provide/vod',
        name: 'AV-91麻豆',
    },
    lbapiby: {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: 'AV-AIvin',
    },
    jkunzyapi: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'AV-JKUN资源',
    },
    souavzy: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'AV-souav资源',
    },
    lbapi9: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: 'AV-乐播资源',
    },
    aosikazy: {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: 'AV-奥斯卡资源',
    },
    naixxzy: {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: 'AV-奶香香',
    },
    slapibf: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: 'AV-森林资源',
    },
    xrbsp: {
        api: 'https://www.xrbsp.com/api/json.php',
        name: 'AV-淫水机资源',
    },
    apiyutu: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: 'AV-玉兔资源',
    },
    fhapi9: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: 'AV-番号资源',
    },
    kxgav: {
        api: 'https://www.kxgav.com/api/json.php',
        name: 'AV-白嫖资源',
    },
    jingpinx: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: 'AV-精品资源',
    },
    msnii: {
        api: 'https://www.msnii.com/api/json.php',
        name: 'AV-美少女资源',
    },
    apilsbzy1: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'AV-老色逼资源',
    },
    sexnguon: {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: 'AV-色嗨国',
    },
    maozyapi: {
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: 'AV-色猫资源',
    },
    apilj: {
        api: 'https://apilj.com/api.php/provide/vod',
        name: 'AV-辣椒资源',
    },
    gdlsp: {
        api: 'https://www.gdlsp.com/api/json.php',
        name: 'AV-香奶儿资源',
    },
    shayuapi: {
        api: 'https://shayuapi.com/api.php/provide/vod',
        name: 'AV-鲨鱼资源',
    },
    pgxdy: {
        api: 'https://www.pgxdy.com/api/json.php',
        name: 'AV-黄AV资源',
    },
    ffzynew: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡影视new',
    },
    jszyapi: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    },
    gayapi: {
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '快播资源网站',
    },
    xingba111: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '性吧资源',
    },
    aiduanju: {
        api: 'https://www.aiduanju.cc/',
        name: '爱短剧.cc',
    },
    huawei8: {
        api: 'https://huawei8.live/api.php/provide/vod',
        name: '华为吧资源',
    },
    taopianapi: {
        api: 'https://taopianapi.com/cjapi/sda/vod',
        name: '淘片资源',
    },
    hongniuzy3: {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod',
        name: '红牛资源3',
    },
    xsd_sdzyapi: {
        api: 'https://xsd.sdzyapi.com/api.php/provide/vod',
        name: '索尼-闪电资源',
    },
    jyzyapi_provide: {
        api: 'https://jyzyapi.com/provide/vod',
        name: '金鹰资源采集网',
    },
    fczy888: {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢片库',
    },
    jmzy: {
        api: 'https://api.jmzy.com/api.php/provide/vod',
        name: '金马资源网',
    },
    dadiapi: {
        api: 'https://dadiapi.com/api.php/provide/vod',
        name: '大地资源网络',
    },
    hsckzy888: {
        api: 'https://hsckzy888.com/api.php/provide/vod',
        name: '黄色资源啊啊',
    },
    xiaojizy: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '小鸡资源',
    },
    kuaichezy: {
        api: 'https://caiji.kuaichezy.org/api.php/provide',
        name: '快车资源阿',
    },
    xinlangapi_provide: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源阿',
    },
    apilj_provide: {
        api: 'https://apilj.com/api.php/provide',
        name: '辣椒资源黄黄',
    },
    yzzy_api: {
        api: 'https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod',
        name: '优质资源库1080zyk6.com高清',
    },
    iqiyizyapi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    xxibaozyw: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞采集黄色',
    },

};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
