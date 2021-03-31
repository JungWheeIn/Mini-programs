// pages/page1/page1.js
Page({
  data: {
    //声明变量
    Height: 0,
    scale: 16,
    latitude: "",
    longitude: "",
    markers: [],
    markerId:"",
    /**************************************************************
    controls: [{
      id: 1,
      iconPath: '/assests/imgs/jian.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true,
    },
    {
      id: 2,
      iconPath: '/assests/imgs/jia.png',
      position: {
        left: 340,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ]
    ***************************************************************/
  },

  onLoad: function () {
    var _this = this;

    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }

        })

      }
    })

    wx.getLocation({
      type: 'gcj02', //  返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        //在设置红色景点的标点
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: 1,
            latitude: "23.126727",
            longitude: "113.268509",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "《新青年》杂志社南迁旧址",
            callout:{content: "《新青年》杂志社旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 2,
            latitude: "23.117357",
            longitude: "113.265533",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中共广东支部遗址",
            callout:{content: "中共广东支部遗址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 3,
            latitude: "23.120722",
            longitude: "113.261559",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中国劳动组合书记部南方分部旧址",
            callout:{content: "中国劳动组合书记部南方分部旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 4,
            latitude: "23.11894",
            longitude: "113.29607",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中共三大会址",
            callout:{content: "中共三大会址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 5,
            latitude: "23.118249",
            longitude: "113.295786",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "春园",
            callout:{content: "春园",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 6,
            latitude: "23.123898",
            longitude: "113.277488",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "国民党“一大”旧址",
            callout:{content: "国民党“一大”旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 7,
            latitude: "23.123485",
            longitude: "113.266002",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州工人代表会议遗址",
            callout:{content: "广州工人代表会议遗址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 81,
            latitude: "23.112033",
            longitude: "113.256616",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州各界联合反对沙面苛例大会旧址（豫章书院）",
            callout:{content: "豫章书院",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 82,
            latitude: "23.111506",
            longitude: "113.259416",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州各界联合反对沙面苛例大会旧址（海珠大戏院）",
            callout:{content: "海珠大戏院",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 9,
            latitude: "23.12748",
            longitude: "113.26434",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "人民公园",
            callout:{content: "人民公园",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 10,
            latitude: "23.115302",
            longitude: "113.271971",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "黄埔军校驻省办事处旧址",
            callout:{content: "黄埔军校驻省办事处旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 11,
            latitude: "23.1191",
            longitude: "113.2777",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "国民党中央党部旧址",
            callout:{content: "国民党中央党部旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 12,
            latitude: "23.121619",
            longitude: "113.277703",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广东妇女解放协会旧址",
            callout:{content: "广东妇女解放协会旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 13,
            latitude: "23.12251",
            longitude: "113.276908",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "越南青年革命同志会和越南青年政治训练班旧址",
            callout:{content: "越南青年政治训练班旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 14,
            latitude: "23.122519",
            longitude: "113.275065",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中共广东区委旧址",
            callout:{content: "中共广东区委旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 15,
            latitude: "23.118612",
            longitude: "113.277953",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "团一大广场",
            callout:{content: "团一大广场",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 16,
            latitude: "23.118057",
            longitude: "113.277374",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "省港罢工委员会旧址",
            callout:{content: "省港罢工委员会旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 17,
            latitude: "23.119152",
            longitude: "113.277788",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中华全国总工会旧址/工农运动死难烈士纪念碑",
            callout:{content: "中华全国总工会旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 18,
            latitude: "23.128793",
            longitude: "113.269316",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "叶家祠(广州大厦)",
            callout:{content: "叶家祠",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 19,
            latitude: "23.12268",
            longitude: "113.26786",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "大佛寺",
            callout:{content: "大佛寺",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 20,
            latitude: "23.128375",
            longitude: "113.280648",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广东省农民协会旧址",
            callout:{content: "广东省农民协会旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 21,
            latitude: "23.127563",
            longitude: "113.276471",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州农民运动讲习所旧址",
            callout:{content: "农讲所",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 22,
            latitude: "23.119535",
            longitude: "113.271084",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中共广东区委军委旧址",
            callout:{content: "中共广东区委军委旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 23,
            latitude: "23.124543",
            longitude: "113.284063",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "东较场",
            callout:{content: "东较场",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 24,
            latitude: "23.109185",
            longitude: "113.254193",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "新亚大酒店",
            callout:{content: "新亚大酒店",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 25,
            latitude: "23.137512",
            longitude: "113.266641",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "海员亭",
            callout:{content: "海员亭",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 26,
            latitude: "23.127566",
            longitude: "113.277127",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "北新书屋旧址（芳草街44号)",
            callout:{content: "芳草街44号",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 27,
            latitude: "23.126813",
            longitude: "113.267111",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "第一个中共广州市委旧址",
            callout:{content: "第一个中共广州市委旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 28,
            latitude: "23.123645",
            longitude: "113.264935",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州苏维埃旧址",
            callout:{content: "广州苏维埃旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 29,
            latitude: "23.136201",
            longitude: "113.26391",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "观音山",
            callout:{content: "观音山",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 30,
            latitude: "23.12882",
            longitude: "113.28585",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州起义烈士陵园",
            callout:{content: "烈士陵园",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 31,
            latitude: "23.129742",
            longitude: "113.287921",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中朝人民血谊亭与中苏人民血谊亭",
            callout:{content: "血谊亭",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 32,
            latitude: "23.119236",
            longitude: "113.255185",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州起义后成立的中共广州市委旧址",
            callout:{content: "起义后成立的中共广州市委旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 33,
            latitude: "23.129443",
            longitude: "113.287064",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "血祭轩辕亭",
            callout:{content: "血祭轩辕亭",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 34,
            latitude: "23.122636",
            longitude: "113.275375",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中共外县工委机关旧址",
            callout:{content: "中共外县工委机关旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 35,
            latitude: "23.124645",
            longitude: "113.294423",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "八路军驻广州办事处旧址",
            callout:{content: "八路军驻广州办事处旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 36,
            latitude: "23.134472",
            longitude: "113.278122",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "血泪洒黄华碑",
            callout:{content: "血泪洒黄华碑",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 37,
            latitude: "23.120971",
            longitude: "113.268967",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "哥伦布餐厅招待会事件发生地",
            callout:{content: "哥伦布餐厅招待会事件",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 38,
            latitude: "23.110103",
            longitude: "113.294158",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "颐养院旧址",
            callout:{content: "颐养院旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 39,
            latitude: "23.125773",
            longitude: "113.269132",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "东江纵队交通站旧址",
            callout:{content: "东江纵队交通站旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 40,
            latitude: "23.120162",
            longitude: "113.260828",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "珠江纵队驻广州联络点旧址",
            callout:{content: "珠江纵队驻广州联络点旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 41,
            latitude: "23.125729",
            longitude: "113.269399",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州兄弟图书公司旧址",
            callout:{content: "广州兄弟图书公司旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 42,
            latitude: "23.126984",
            longitude: "113.268977",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "《华商报》驻广州办事处遗址",
            callout:{content: "《华商报》驻广州办事处遗址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 43,
            latitude: "23.116852",
            longitude: "113.265291",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中共广州市委（特派员）旧址",
            callout:{content: "中共广州市委（特派员）旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 44,
            latitude: "23.112269",
            longitude: "113.262986",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中原行旧址",
            callout:{content: "中原行旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 45,
            latitude: "23.111092",
            longitude: "113.258231",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "东亚酒店",
            callout:{content: "东亚酒店",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 46,
            latitude: "23.129089",
            longitude: "113.264372",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中国人民解放军进城检阅台旧址",
            callout:{content: "检阅台旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 47,
            latitude: "23.115298",
            longitude: "113.26558",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州解放纪念像",
            callout:{content: "广州解放纪念像",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 48,
            latitude: "23.11834",
            longitude: "113.266082",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "许广平故居",
            callout:{content: "许广平故居",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 49,
            latitude: "23.118359",
            longitude: "113.266162",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "许地",
            callout:{content: "许地",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 50,
            latitude: "23.119111",
            longitude: "113.266377",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "许锡缵旧居",
            callout:{content: "许锡缵旧居",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 51,
            latitude: "23.14801",
            longitude: "113.307312",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "朱执信墓",
            callout:{content: "朱执信墓",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 52,
            latitude: "23.129335",
            longitude: "113.266907",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "杨家祠",
            callout:{content: "杨家祠",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 53,
            latitude: "23.141661",
            longitude: "113.294187",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "越南范鸿泰墓",
            callout:{content: "越南范鸿泰墓",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 54,
            latitude: "23.121112",
            longitude: "113.273138",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "周恩来邓颖超旧居",
            callout:{content: "周恩来邓颖超旧居",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 55,
            latitude: "23.122051",
            longitude: "113.293178",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "毛泽东旧居遗址",
            callout:{content: "毛泽东旧居遗址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 56,
            latitude: "23.122516",
            longitude: "113.275194",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "陈延年与广东区委",
            callout:{content: "陈延年与广东区委",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 57,
            latitude: "23.127551",
            longitude: "113.283961",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "张太雷墓",
            callout:{content: "张太雷墓",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 58,
            latitude: "23.119318",
            longitude: "113.277907",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "惠州会馆旧址",
            callout:{content: "惠州会馆旧址",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 59,
            latitude: "23.123028",
            longitude: "113.295419",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "陈树人、陈复故居",
            callout:{content: "陈树人、陈复故居",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 60,
            latitude: "23.116389",
            longitude: "113.280426",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "广州白云楼鲁迅故居",
            callout:{content: "白云楼",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 61,
            latitude: "23.121363",
            longitude: "113.300851",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "伍景英故居",
            callout:{content: "伍景英故居",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 62,
            latitude: "23.128897",
            longitude: "113.284908",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "叶剑英墓",
            callout:{content: "叶剑英墓",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          },
          {
            id: 999,
            latitude: "23.132872",
            longitude: "113.264691",
            width: 50,
            height: 50,
            //iconPath: "/assests/imgs/my.png",
            title: "中山纪念堂",
            callout:{content: "中山纪念堂",
            color: "#000000",
            fontSize: "10",
            borderRadius: "2",  
            bgColor: "#ffffff",  
            padding: "4",  
            display:"ALWAYS"  
            }
          }]
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '请允许小程序获取当前定位或者打开手机定位功能',
          icon: 'none',
          duration: 15000
        })
      }
    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },
/*********************************************
  //点击markers
  markertap(e) {
    console.log(e.markerId)
    //中山纪念堂
    wx.showActionSheet({
      itemList: ["导航到该红色景点","查看详细信息"],
      success: function (res) {
        console.log(res.tapIndex)
        if(res.tapIndex==1){
          wx.navigateTo({
            url: '../zsjnt/zsjnt'
          })
        }
        if(res.tapIndex==0){
            wx.getLocation({
              type: 'gcj02', //返回可以用于wx.openLocation的经纬度
              success (res) {
                const latitude = res.latitude
                const longitude = res.longitude
                wx.openLocation({
                  latitude: 23.132872,
                  longitude: 113.264691,
                  scale: 18
                })
              }
             })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
********************************************************/
//点击markers
markertap(e) {
  console.log(e.markerId)  
  wx.showActionSheet({
    itemList: ["导航到该红色景点","查看详细信息"],
    success:function(res){
      console.log(res.tapIndex)
      //导航部分代码
      if(res.tapIndex===0){
        //中山纪念堂，e为被点击的控件，markerId要查看getlocation中的markers数组
        if(e.markerId==999){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.132872,
                longitude: 113.264691,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==1){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.126727,
                longitude: 113.268509,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==2){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.117357,
                longitude: 113.265533,
                scale: 20
              })
            }
           })
        }
        if(e.markerId==3){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.120722,
                longitude: 113.261559,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==4){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.11894,
                longitude: 113.29607,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==5){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.118249,
                longitude: 113.295786,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==6){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.123898,
                longitude: 113.277488,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==7){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.123485,
                longitude: 113.266002,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==81){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.112033,
                longitude: 113.256616,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==82){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.111506,
                longitude: 113.259416,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==9){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.12748,
                longitude: 113.26434,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==10){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.115302,
                longitude: 113.271971,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==11){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.1191,
                longitude: 113.2777,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==12){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.121619,
                longitude: 113.277703,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==13){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.12251,
                longitude: 113.276908,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==14){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.122519,
                longitude: 113.275065,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==15){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.118612,
                longitude: 113.277953,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==16){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.118057,
                longitude: 113.277374,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==17){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.119152,
                longitude: 113.277788,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==18){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.128793,
                longitude: 113.269316,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==19){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.12268,
                longitude: 113.26786,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==20){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.128375,
                longitude: 113.280648,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==21){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.127563,
                longitude: 113.276471,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==22){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.119535,
                longitude: 113.271084,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==23){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.124543,
                longitude: 113.284063,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==24){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.109185,
                longitude: 113.254193,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==25){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.137512,
                longitude: 113.266641,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==26){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.127566,
                longitude: 113.277127,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==27){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.126813,
                longitude: 113.267111,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==28){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.123645,
                longitude: 113.264935,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==29){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.136201,
                longitude: 113.26391,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==30){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.12882,
                longitude: 113.28585,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==31){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.129742,
                longitude: 113.287921,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==32){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.119236,
                longitude: 113.255185,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==33){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.129443,
                longitude: 113.287064,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==34){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.122636,
                longitude: 113.275375,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==35){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.124645,
                longitude: 113.294423,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==36){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.134472,
                longitude: 113.278122,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==37){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.120971,
                longitude: 113.268967,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==38){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.110103,
                longitude: 113.294158,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==39){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.125773,
                longitude: 113.269132,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==40){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.120162,
                longitude: 113.260828,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==41){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.125729,
                longitude: 113.269399,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==42){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.126984,
                longitude: 113.268977,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==43){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.116852,
                longitude: 113.265291,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==44){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.112269,
                longitude: 113.262986,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==45){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.111092,
                longitude: 113.258231,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==46){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.129089,
                longitude: 113.264372,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==47){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.115298,
                longitude: 113.26558,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==48){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.11834,
                longitude: 113.266082,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==49){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.118359,
                longitude: 113.266162,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==50){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.119111,
                longitude: 113.266377,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==51){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.14801,
                longitude: 113.307312,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==52){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.129335,
                longitude: 113.266907,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==53){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.141661,
                longitude: 113.294187,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==54){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.121112,
                longitude: 113.273138,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==55){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.122051,
                longitude: 113.293178,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==56){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.122516,
                longitude: 113.275194,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==57){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.127551,
                longitude: 113.283961,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==58){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.119318,
                longitude: 113.277907,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==59){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.123028,
                longitude: 113.295419,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==60){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.116389,
                longitude: 113.280426,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==61){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.121363,
                longitude: 113.300851,
                scale: 18
              })
            }
           })
        }
        if(e.markerId==62){
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: 23.128897,
                longitude: 113.284908,
                scale: 18
              })
            }
           })
        }
      }
      //详细介绍页部分代码
      if(res.tapIndex===1){
        console.log(e.markerId)
        if(e.markerId==1){
          wx.navigator
          wx.navigateTo({
            url: '../xqnzz/xqnzz',
          })  
        }
        if(e.markerId==2){
          wx.navigator
          wx.navigateTo({
            url: '../zggdzb/zggdzb',
          })  
        }
        if(e.markerId==3){
          wx.navigator
          wx.navigateTo({
            url: '../sjbnffb/sjbnffb',
          })  
        }
        if(e.markerId==4){
          wx.navigator
          wx.navigateTo({
            url: '../zgsd/zgsd',
          })  
        }
        if(e.markerId==5){
          wx.navigator
          wx.navigateTo({
            url: '../cy/cy',
          })  
        }
        if(e.markerId==6){
          wx.navigator
          wx.navigateTo({
            url: '../gmdyd/gmdyd',
          })  
        }
        if(e.markerId==7){
          wx.navigator
          wx.navigateTo({
            url: '../gzgrdbhy/gzgrdbhy',
          })  
        }
        if(e.markerId==81){
          wx.navigator
          wx.navigateTo({
            url: '../yzsy/yzsy',
          })  
        }
        if(e.markerId==82){
          wx.navigator
          wx.navigateTo({
            url: '../yzsy/yzsy',
          })  
        }
        if(e.markerId==9){
          wx.navigator
          wx.navigateTo({
            url: '../rmgy/rmgy',
          })  
        }
        if(e.markerId==10){
          wx.navigator
          wx.navigateTo({
            url: '../hpjx/hpjx',
          })  
        }
        if(e.markerId==11){
          wx.navigator
          wx.navigateTo({
            url: '../gmdzydb/gmdzydb',
          })  
        }
        if(e.markerId==12){
          wx.navigator
          wx.navigateTo({
            url: '../gdfnjfxh/gdfnjfxh',
          })  
        }
        if(e.markerId==13){
          wx.navigator
          wx.navigateTo({
            url: '../ynqnzzxlb/ynqnzzxlb',
          })  
        }
        if(e.markerId==14){
          wx.navigator
          wx.navigateTo({
            url: '../zggdqw/zggdqw',
          })  
        }
        if(e.markerId==15){
          wx.navigator
          wx.navigateTo({
            url: '../tydgc/tydgc',
          })  
        }
        if(e.markerId==16){
          wx.navigator
          wx.navigateTo({
            url: '../sgbgwyh/sgbgwyh',
          })  
        }
        if(e.markerId==17){
          wx.navigator
          wx.navigateTo({
            url: '../zhqgzgh/zhqgzgh',
          })  
        }
        if(e.markerId==18){
          wx.navigator
          wx.navigateTo({
            url: '../yjc/yjc',
          })  
        }
        if(e.markerId==19){
          wx.navigator
          wx.navigateTo({
            url: '../dfs/dfs',
          })  
        }
        if(e.markerId==19){
          wx.navigator
          wx.navigateTo({
            url: '../dfs/dfs',
          })  
        }
        if(e.markerId==20){
          wx.navigator
          wx.navigateTo({
            url: '../gdsnmxh/gdsnmxh',
          })  
        }
        if(e.markerId==21){
          wx.navigator
          wx.navigateTo({
            url: '../njs/njs',
          })  
        }
        if(e.markerId==22){
          wx.navigator
          wx.navigateTo({
            url: '../zggdqwjw/zggdqwjw',
          })  
        }
        if(e.markerId==23){
          wx.navigator
          wx.navigateTo({
            url: '../djc/djc',
          })  
        }
        if(e.markerId==24){
          wx.navigator
          wx.navigateTo({
            url: '../xydjd/xydjd',
          })  
        }
        if(e.markerId==25){
          wx.navigator
          wx.navigateTo({
            url: '../hyt/hyt',
          })  
        }
        if(e.markerId==26){
          wx.navigator
          wx.navigateTo({
            url: '../fcj44h/fcj44h',
          })  
        }
        if(e.markerId==27){
          wx.navigator
          wx.navigateTo({
            url: '../zggzsw/zggzsw',
          })  
        }
        if(e.markerId==28){
          wx.navigator
          wx.navigateTo({
            url: '../gzswa/gzswa',
          })  
        }
        if(e.markerId==29){
          wx.navigator
          wx.navigateTo({
            url: '../gys/gys',
          })  
        }
        if(e.markerId==30){
          wx.navigator
          wx.navigateTo({
            url: '../lsly/lsly',
          })  
        }
        if(e.markerId==31){
          wx.navigator
          wx.navigateTo({
            url: '../xyt/xyt',
          })  
        }
        if(e.markerId==32){
          wx.navigator
          wx.navigateTo({
            url: '../zgzyswjz/zgzyswjz',
          })  
        }
        if(e.markerId==33){
          wx.navigator
          wx.navigateTo({
            url: '../xjxyt/xjxyt',
          })  
        }
        if(e.markerId==34){
          wx.navigator
          wx.navigateTo({
            url: '../zgwxgwjg/zgwxgwjg',
          })  
        }
        if(e.markerId==35){
          wx.navigator
          wx.navigateTo({
            url: '../bljzgz/bljzgz',
          })  
        }
        if(e.markerId==36){
          wx.navigator
          wx.navigateTo({
            url: '../xlshhb/xlshhb',
          })  
        }
        if(e.markerId==37){
          wx.navigator
          wx.navigateTo({
            url: '../gblct/gblct',
          })  
        }
        if(e.markerId==38){
          wx.navigator
          wx.navigateTo({
            url: '../yyy/yyy',
          })  
        }
        if(e.markerId==39){
          wx.navigator
          wx.navigateTo({
            url: '../djzdjtz/djzdjtz',
          })  
        }
        if(e.markerId==40){
          wx.navigator
          wx.navigateTo({
            url: '../zjzd/zjzd',
          })  
        }
        if(e.markerId==41){
          wx.navigator
          wx.navigateTo({
            url: '../gzxdts/gzxdts',
          })  
        }
        if(e.markerId==42){
          wx.navigator
          wx.navigateTo({
            url: '../hsb/hsb',
          })  
        }
        if(e.markerId==43){
          wx.navigator
          wx.navigateTo({
            url: '../tpy/tpy',
          })  
        }
        if(e.markerId==44){
          wx.navigator
          wx.navigateTo({
            url: '../zyh/zyh',
          })  
        }
        if(e.markerId==45){
          wx.navigator
          wx.navigateTo({
            url: '../dyjd/dyjd',
          })  
        }
        if(e.markerId==46){
          wx.navigator
          wx.navigateTo({
            url: '../jyt/jyt',
          })  
        }
        if(e.markerId==47){
          wx.navigator
          wx.navigateTo({
            url: '../jf/jf',
          })  
        }
        if(e.markerId==48){
          wx.navigator
          wx.navigateTo({
            url: '../xgp/xgp',
          })  
        }
        if(e.markerId==49){
          wx.navigator
          wx.navigateTo({
            url: '../xd/xd',
          })  
        }
        if(e.markerId==50){
          wx.navigator
          wx.navigateTo({
            url: '../xxz/xxz',
          })  
        }
        if(e.markerId==51){
          wx.navigator
          wx.navigateTo({
            url: '../zzx/zzx',
          })  
        }
        if(e.markerId==52){
          wx.navigator
          wx.navigateTo({
            url: '../yangjc/yangjc',
          })  
        }
        if(e.markerId==53){
          wx.navigator
          wx.navigateTo({
            url: '../fht/fht',
          })  
        }
        if(e.markerId==54){
          wx.navigator
          wx.navigateTo({
            url: '../zeljj/zeljj',
          })  
        }
        if(e.markerId==55){
          wx.navigator
          wx.navigateTo({
            url: '../mzdjj/mzdjj',
          })  
        }
        if(e.markerId==56){
          wx.navigator
          wx.navigateTo({
            url: '../cyn/cyn',
          })  
        }
        if(e.markerId==57){
          wx.navigator
          wx.navigateTo({
            url: '../ztl/ztl',
          })  
        }
        if(e.markerId==58){
          wx.navigator
          wx.navigateTo({
            url: '../hzhg/hzhg',
          })  
        }
        if(e.markerId==59){
          wx.navigator
          wx.navigateTo({
            url: '../csr/csr',
          })  
        }
        if(e.markerId==60){
          wx.navigator
          wx.navigateTo({
            url: '../byl/byl',
          })  
        }
        if(e.markerId==61){
          wx.navigator
          wx.navigateTo({
            url: '../wjy/wjy',
          })  
        }
        if(e.markerId==62){
          wx.navigator
          wx.navigateTo({
            url: '../yjy/yjy',
          })  
        }
        if(e.markerId==999){
          wx.navigator
          wx.navigateTo({
            url: '../zsjnt/zsjnt',
          })  
        }
      }
    }
  })
},

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }

  },


  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})