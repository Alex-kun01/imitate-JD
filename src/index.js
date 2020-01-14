/**
 * x下拉列表所需参数
 * width：下拉列表的宽度
 * list:[{dl标签下面的所有数据
 *      title：‘’  当前块里面的标题
 *      width：‘’  当前块的宽度
 *      items：[{name:'',href:'#'，{}}]   代表当前块显示的dd元素
 * }]，
 * colWidth:每列的宽度
 * direction:  多块内容的排列方式，y代表从上到下的排列，x代表从左到右的排列
 */


 //调用dropdown函数
 $('#my-JD').dropdown({
    width:280,
    colWidth:126,
    list:[{
        title:'',
        items:[
            {
            href:'#',
            name:'待处理订单'
            },
            {
            href:'#',
            name:'返修退换货'
            },
            {
            href:'#',
            name:'降价商品'
            },
            {
            href:'#',
            name:'消息'
            },
            {
            href:'#',
            name:'我的问答'
            },
            {
            href:'#',
            name:'我的关注'
            },
]
    },
    {
        title:'',
        items:[
            {
            href:'#',
            name:'我的京豆'
            },
            {
            href:'#',
            name:'我的优惠卷'
            },
            {
            href:'#',
            name:'我的白条'
            },
            {
            href:'#',
            name:'我的理财'
            }
        ]
    }]
 })

 $('#company').dropdown({
    width: 152,
    colWidth: 56,
    list: [{
        title: '',
        items: [{
            href: '#',
            name: '企业购'
        }, {
            href: '#',
            name : '商用场景观',
        }, {
            href: '#',
            name: '工业品'
        }, {
            href: '#',
            name: '礼品卡'
        }]
    }]
})

$('#service').dropdown({
    width: 170,
    colWidth: 70,
    list: [{
        title: '客户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
})
$('#app').dropdown({
    width: 1188,
    colWidth: 85,
    direction: 'x',
    list: [{
        title: '特色主题',
        // col: 4,
        width: 340,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        },{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        } ]
    }, {
        title: '商户',
        // col: 3,
        width: 255,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
});

//需求分析  --> 页面功能符不符合需求
//如果符合前后端约定接口结构
//后端忙，前端自己写接口文档，前端写接口就是页面当中所需要的数据
//接口返回的值就是我们需要的数据
//接口文档包含 接口的地址：
//            请求方式：GET/POST
//            接口的请求参数：用来过滤参数（或者说查找数据）
//            每一个接口返回的数据格式
/*
    [
        {
        title:[{name:'家用电器',href:'#'}]，
        content:{//内容区
            tsbs:[{name:'家电馆',href:'#'},{name:'家电专卖店',href:'#'},{name:'家电服务',href:'#'},]  //内容区大标签
            subs:[{ //内容区二级标签
                title:{name:'',href:'#'},
                items:[{name:'',href:'#'},{name:'',href:'#'},{name:'',href:'#'}]

            }]   
        }
    },
    {//第二行一级菜单
        title:[
            {name:'手机’,href:'#'},
            {name:'运营商’,href:'#'},
            {name:'数码’,href:'#'},
        ]
    }
     ]
*/

//  左侧菜单栏数据
var menuList = [
    {
    title: [{name:'家用电器',href:'#'}],
    content: {
        tabs: [{name:'家电馆',href:'#'},{name:'镇乡专卖店',href:'#'},{name:'家电服务',href:'#'}],
        subs: [{
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'1.以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'1.以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'1.以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
}, 
{
    title: [{name:'手机',href:'#'},{name:'运营商',href:'#'},{name:'数码',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
},
 {
    title: [{name:'电脑',href:'#'},{name:'办公',href:'#'}],
    content: {
        tabs:[{name:'家电馆',href:'#'},{name:'镇乡专卖店',href:'#'},{name:'家电服务',href:'#'}],
        subs: [{
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
    ]
    }
},
{
    title: [{name:'手机',href:'#'},{name:'运营商',href:'#'},{name:'数码',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
},
{
    title: [{name:'手机',href:'#'},{name:'运营商',href:'#'},{name:'数码',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
},
{
    title: [{name:'手机',href:'#'},{name:'运营商',href:'#'},{name:'数码',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
},
{
    title: [{name:'香菜',href:'#'},{name:'大萝卜',href:'#'},{name:'农残品',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
},
{
    title: [{name:'玫瑰花',href:'#'},{name:'美人蕉花',href:'#'},{name:'鸡冠',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
},
{
    title: [{name:'电话',href:'#'},{name:'产品',href:'#'},{name:'相机',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
     
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
},
{
    title: [{name:'香蕉',href:'#'},{name:'苹果',href:'#'},{name:'西瓜',href:'#'}],
    content: {
        tabs: [{name:'手机',href:'#'}],
        subs: [{
            title: {name:'手机',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'}
            ]
        }, {
            title: {name:'空调',href:'#'},
            items:[
                {name:'壁挂式空调',href:'#'},
                {name:'柜式空调',href:'#'},
                {name:'中央空调',href:'#'},
                {name:'一级能效空调',href:'#'},
                {name:'变频空调',href:'#'},
                {name:'1.5匹空调',href:'#'},
                {name:'以旧换新',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
  
                {name:'OLED电视',href:'#'}
            ]
        },
        {
            title: {name:'电视',href:'#'},
            items:[
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'},
                {name:'4K超清电视',href:'#'},
                {name:'55英寸',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'65英寸',href:'#'},
                {name:'电视配件',href:'#'},
                {name:'曲面电视',href:'#'},
                {name:'超薄电视',href:'#'},
                {name:'OLED电视',href:'#'}
            ]
        }
    ]
    }
}
];
 

//渲染左侧菜单栏
function renderMenuList(data,menuDom){
    data.forEach(function(menuData){
        var oLi =  $('<li></li>');
        menuData.title.forEach(function(title,index){
           $('<a href='+ title.href +'>'+ title.name +'</a>').appendTo(oLi);
           if(index != menuData.title.length - 1){
                $('<span>/</span>').appendTo(oLi);
           }
        })
        menuDom.append(oLi);
    })
}
renderMenuList(menuList,$('.menu'));

//渲染菜单栏对应的content区域
function renderMenuContent(condata,index){
    var tabs = $('<div class="tabs"></div>');
    var subs = $('<div class="subs"></div>')
   condata.tabs.forEach(function(ele){
    $('<li><a href='+ ele.href +'>'+ ele.name +'</a></li>').appendTo(tabs);
   })
   condata.subs.forEach(function(ele){
       var oDl = $('<dl></dl>');
       var oDd = $('<dd></dd>');
       $('<dt>'+ ele.title.name +'<span>></span></dt>').appendTo(oDl);
       ele.items.forEach(function(item){
           $('<a href='+ item.href +'>'+ item.name +'</a>').appendTo(oDd);
       })
       oDd.appendTo(oDl);
       subs.append(oDl);
   })
   


   $('.menu-content').append(tabs);
   $('.menu-content').append(subs);
}

//鼠标移入事件
$('.menu').on('mouseenter','li',function(){
    var index = $(this).index();
    renderMenuContent(menuList[index].content);
    $('.menu-content').show();
})
//鼠标移出事件
$('.menu').on('mouseleave','li',function(){
    console.log('a');
    $('.subs').remove();
    $('.tabs').remove();
    $('.menu-content').hide();
})

//引入轮播图

$('#swiper-1').swiper({
    //轮播图的动画类型
    animateType:'animate',
    //轮播图片的宽度
    // imgWidth:500,
    //轮播图片的高度
    // imgHeight:510,
    //是否展示左右按钮 true 展示 false 不展示
    showChangeBtn:true,
    //轮播的图片地址集合，数组展示
    imgList:[
        "./swiper/images/01.jpg",
        "./swiper/images/02.jpg",
        "./swiper/images/03.jpg",
        "./swiper/images/04.jpg"
    ],
    //轮播一张的时间 s
    autoChangeTime:3000,
    //是否展示小圆点
    showSpotBtn:true,
    //是否自动轮播
    isAuto:true,
})

$('#swiper-2').swiper({
    //轮播图的动画类型
    animateType:'fade',
    //轮播图片的宽度
    // imgWidth:190,
    //轮播图片的高度
    // imgHeight:510,
    //是否展示左右按钮 true 展示 false 不展示
    showChangeBtn:true,
    //轮播的图片地址集合，数组展示
    imgList:[
        "./swiper/images/05.jpg",
        "./swiper/images/06.jpg",
        "./swiper/images/07.jpg",
        "./swiper/images/08.jpg"
    ],
    //轮播一张的时间 s
    autoChangeTime:5000,
    //是否展示小圆点
    showSpotBtn:true,
    //是否自动轮播
    isAuto:true,
})

//右侧服务框hover事件
$('.service_frame').on('mouseenter',function(){
    $(this).parents('.J_service').addClass('service_expand');
    $(this).addClass('style-red');
    if($(this).index() == 3){
        console.log('====')
        $(this).parents('.J_service').addClass('service_expand2');
    }
}).on('mouseleave',function(){
    $(this).removeClass('style-red');
})
$('.close').on('click',function(){
    $(this).parents('.J_service').removeClass('service_expand')
    .removeClass('service_expand2');
    
})
//搜索框输入事件
//搜索防抖定时器
var timer = null;
//鼠标出ipn框隐藏div定时器
var leaveTimer = null;
$('#search-inp').on('input',function(){
    var val = $(this).val();
    clearTimeout(leaveTimer);
    clearTimeout(timer);
    timer = setTimeout(function(){
        searchData(val);
    },500)
}).on('mouseleave',function(){
    leaveTimer = setTimeout(function(){
        $('#search-helper').hide();
    },500)
}).click(function(){
    searchData($('#search-inp').val());
})
$('#search-helper').on('mouseenter',function(){
    clearTimeout(leaveTimer);
}).on('mouseleave',function(){
    leaveTimer = setTimeout(function(){
        $('#search-helper').hide();
    },500)
})

//数据请求方法
function searchData(val){
    $.ajax({
        url:'https://suggest.taobao.com/sug',
        type:'GET',
        data:{
            callback:'dealData',
            code:'utf-8',
            q:val
        },
        dataType:'jsonp'
    })
}

function dealData(data){
    var oUl = $('<ul></ul>');
    data.result.forEach(function(item){
        $('<li><a herf="#">'+ item[0] +'</a></li>').appendTo(oUl);
    });
    $('#search-helper').empty().append(oUl).show();
}