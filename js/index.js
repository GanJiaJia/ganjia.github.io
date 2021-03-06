$(function() {


    autoScreen();
    window.onresize = function() {
        autoScreen();

    }

    function autoScreen() {
        if (myClient().width <= 768) {
            document.querySelector('#mycss').href = "css/phone.css";
            document.querySelector('#exp1').style.display = 'none';
            document.querySelector('#exp2').style.display = 'block';
            document.querySelector('#zuopin1').style.display = 'none';
            document.querySelector('#zuopin2').style.display = 'block';
            console.log(myClient().width);

        } else {
            document.querySelector('#mycss').href = "css/index.css";
            document.querySelector('#exp1').style.display = 'block';
            document.querySelector('#exp2').style.display = 'none';
            document.querySelector('#zuopin1').style.display = 'block';
            document.querySelector('#zuopin2').style.display = 'none';


        }
    }

    function myClient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||
                0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||
                0
        };
    }

    function d(a) {
        $("#language .ch").html(a.language.ch);
        $("#language .en").html(a.language.en);
        $(".pageA .text h3").html(a.pageA.text_h3);
        $(".pageA .show_me p").eq(0).html(a.pageA.showme_p1);
        $(".pageA .show_me p").eq(1).html(a.pageA.showme_p2);
        $(".pageA .show_me p").eq(2).html(a.pageA.showme_p3);
        $(".pageB .about_me").html(a.pageB.aboutme);
        $(".pageB .info-box span").eq(0).html(a.pageB.info_age);
        $(".pageB .info-box span").eq(1).html(a.pageB.info_ed);
        $(".pageB .info-box span").eq(2).html(a.pageB.info_pos);
        $(".pageB .info-box span").eq(3).html(a.pageB.info_state);
        $(".pageB .text p").eq(0).html(a.pageB.text_p1);
        $(".pageB .text p").eq(1).html(a.pageB.text_p2);
        $(".pageB .text p").eq(2).html(a.pageB.text_p3);
        $(".pageB .text p").eq(3).html(a.pageB.text_p4);
        $(".pageC .title").html(a.pageC.title);
        $(".pageC .text p").eq(0).html(a.pageC.text_p1);
        $(".pageC .text p").eq(1).html(a.pageC.text_p2);
        $(".pageC .text p").eq(2).html(a.pageC.text_p3);
        $(".pageC .text p").eq(3).html(a.pageC.text_p4);


        $(".pageD .title").html(a.pageD.title);
        $(".pageD .wrap2 h3").html(a.pageD.w1_right_h3);
        $(".pageD .wrap2 p").eq(0).html(a.pageD.w1_right_p1);
        $(".pageD .wrap2 p").eq(1).children("span").eq(0).html(a.pageD.w1_right_p2_sp);
        $(".pageD .wrap2 p").eq(2).html(a.pageD.w1_right_p3);
        $(".pageD .wrap2 li").eq(0).html(a.pageD.w1_right_li1);
        $(".pageD .wrap2 li").eq(1).html(a.pageD.w1_right_li2);
        $(".pageD .wrap2 li").eq(2).html(a.pageD.w1_right_li3);
        $(".pageD .wrap2 li").eq(3).html(a.pageD.w1_right_li4);
        $(".pageD .wrap1 h3").html(a.pageD.w2_right_h3);
        $(".pageD .wrap1 p").eq(0).html(a.pageD.w2_right_p1);
        $(".pageD .wrap1 p").eq(1).children("span").html(a.pageD.w1_right_p2_sp);
        $(".pageD .wrap1 p").eq(2).html(a.pageD.w2_right_p3);
        $(".pageD .wrap1 li").eq(0).html(a.pageD.w2_right_li1);
        $(".pageD .wrap1 li").eq(1).html(a.pageD.w2_right_li2);
        $(".pageD .wrap1 li").eq(2).html(a.pageD.w2_right_li3);
        $(".pageD .wrap1 li").eq(3).html(a.pageD.w2_right_li4);
        $(".pageD .exp").html(a.pageD.exp);


        $("#exp2 .subject").html(a.pageD.title);
        $("#exp2  .exp-2016 h3").html(a.pageD.w1_right_h3);
        $("#exp2  .exp-2016  p").eq(0).html(a.pageD.w1_right_p1);
        $("#exp2  .exp-2016  p").eq(1).children("span").eq(0).html(a.pageD.w1_right_p2_sp);
        $("#exp2  .exp-2016  p").eq(2).html(a.pageD.w1_right_p3);
        $("#exp2  .exp-2016  li").eq(0).html(a.pageD.w1_right_li1);
        $("#exp2  .exp-2016  li").eq(1).html(a.pageD.w1_right_li2);
        $("#exp2  .exp-2016  li").eq(2).html(a.pageD.w1_right_li3);
        $("#exp2  .exp-2016  li").eq(3).html(a.pageD.w1_right_li4);


        $("#exp2 .subject").html(a.pageD.title);
        $("#exp2  .exp-2015 h3").html(a.pageD.w1_right_h3);
        $("#exp2  .exp-2015  p").eq(0).html(a.pageD.w1_right_p1);
        $("#exp2  .exp-2015  p").eq(1).children("span").eq(0).html(a.pageD.w1_right_p2_sp);
        $("#exp2  .exp-2015  p").eq(2).html(a.pageD.w1_right_p3);
        $("#exp2  .exp-2015  li").eq(0).html(a.pageD.w1_right_li1);
        $("#exp2  .exp-2015  li").eq(1).html(a.pageD.w1_right_li2);
        $("#exp2  .exp-2015  li").eq(2).html(a.pageD.w1_right_li3);
        $("#exp2  .exp-2015  li").eq(3).html(a.pageD.w1_right_li4);



        $(".pageE .title").html(a.pageE.title);
        $(".pageE .subject").html(a.pageE.title);
        $(".pageF .title").html(a.pageF.title);
        $(".pageF .hope span").eq(0).html(a.pageF.hope_s1);
        $(".pageF .hope span").eq(1).html(a.pageF.hope_s2);
        $(".pageF .hope span").eq(2).html(a.pageF.hope_s3);
        $(".pageF .hope span").eq(3).html(a.pageF.hope_s4);
        $(".pageF .text p").eq(0).html(a.pageF.text_p1);
        $(".pageF .text p").eq(1).html(a.pageF.text_p2);
        $(".pageF .text p").eq(2).html(a.pageF.text_p3);
        $(".pageF .text p").eq(3).html(a.pageF.text_p4);
        $(".pageF .text p").eq(4).html(a.pageF.text_p5);
        $(".pageF .footer p").eq(0).html(a.pageF.foot_p1)
    }
    $("#my_page").fullpage({
        sectionsColor: "#83aaa0 darkseagreen #49829d #0a8a80 #915a4a #9C946D".split(" "),
        anchors: "Home Me Skill Experience Sample Contact".split(" "),
        menu: "#menu",
        CSS3: !1,
        navigation: !0,
        easing: "swing",

        afterRender: function() {
            $('.gt_logo').addClass('animate');
            $('#language').addClass('animate');
            $('.elevator').addClass('animate');
            $('.pageA').addClass('animate');

        },
        onLeave: function(a, b) {
            $(".elevator a").removeClass("animation");
            $(".elevator a").eq(b - 1).addClass("animation");
            $(this).removeClass('animate')
        },

        afterLoad: function() {
            $(this).addClass('animate');
        }
    });
    var e = (document.querySelector("#menu"), document.getElementsByTagName("a"));
    $(e).each(function(a, b) {
        $(b).click(function() {
            $(e).removeClass("animation");
            $(this).addClass("animation")
        })
    });
    $(".selec span").each(function(a) {
        $(".selec span").eq(a).click(function() {
            var a = $(this).index();
            $(".selec span").removeClass("current");
            $(this).addClass("current");
            $(".wrap").stop().fadeIn(600);
            $(".wrap").eq(a).stop().fadeOut(600)
        })
    });
    $(".accordion div").each(function(a, b) {
        $(b).css({
            left: 180 * a
        });
        $(b).mouseenter(function() {
            var a = $(this).index();
            $(".accordion div").each(function(b, c) {
                $(c).css(a >= b ? {
                    left: 40 * b
                } : {
                    left: 40 * b + 700
                })
            })
        })
    });
    $(".accordion div").mouseleave(function() {
        $(".accordion div").each(function(a, b) {
            $(b).css({
                left: 180 * a
            })
        })
    });
    var f = {
            language: {
                ch: "Ch",
                en: "En"
            },
            pageA: {
                text_h3: "Life is a kind of endless desire,the desire torise,become more great and noble",
                showme_p1: "My name is GanJia",
                showme_p2: "A front-end delelopment engineer",
                showme_p3: "ganjia1995@163.com"
            },
            pageB: {
                aboutme: "About me",
                info_age: "Age/22",
                info_ed: "Ed/Ug",
                info_pos: "Pos/ShenZhen",
                info_state: "State/Quit",
                text_p1: "One year development experience",
                text_p2: "Familiar with the development of automation",
                text_p3: "Ability to learn independentlyand ",
                text_p4: "Strong self driving force"
            },
            pageC: {
                title: "Skill Stack",
                text_p1: "Skilled use of vue.js",
                text_p2: "WeChat/Pc/APP three platform development",
                text_p3: "Good at component development",
                text_p4: "COding considers its robustness"
            },
            pageD: {
                title: "Experience",
                w1_right_h3: "Zhuhai Murong Technology Co.Ltd",
                w1_right_p1: "July 2016 to june 2017",
                w1_right_p2_sp: "page development",
                w1_right_p3: "H5,C3,js,jQuery,React,vue.js,nonde.js...",
                w1_right_li1: "site maintenance",
                w1_right_li2: " static page development",
                w1_right_li3: " enterprise site page effects",
                w1_right_li4: "I work to learn Vue, react, NG2, experience ",
                w2_right_h3: "Zhuhai Murong Technology Co.Ltd",
                w2_right_p1: "October 2015  to January 2017",
                w2_right_p2_sp: "Web Developer Intern",
                w2_right_p3: "H5,C3,js,jQuery，Sass...",
                w2_right_li1: " site maintenance",
                w2_right_li2: "Map and layout for the page",
                w2_right_li3: "the Best New Artist award",
                w2_right_li4: "work began systematic self-learning web ",
                exp: "Junior school, began to self-study front-end"
            },
            pageE: {
                title: "Sample reels"
            },
            pageF: {
                title: "Contact me",
                hope_s1: "afflatus",
                hope_s2: "Code",
                hope_s3: "Dream",
                hope_s4: "Future",
                text_p1: "Focus on efficiency preference for Agile Development",
                text_p2: "Like to try, look forward to new things",
                text_p3: "Front is interest, interest is the future",
                text_p4: "A good friend is a shortcut",
                text_p5: "Take me with you and see the bigger world",
                foot_p1: "Learn this resume production (front) please press F12 at the PC end"
            }
        },
        g = {
            language: {
                ch: "中",
                en: "英"
            },
            pageA: {
                text_h3: "生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。",
                showme_p1: "我叫甘佳",
                showme_p2: "一名前端研发工程师",
                showme_p3: "ganjia1995@163.com"
            },
            pageB: {
                aboutme: " 关于我",
                info_age: "年龄/22岁",
                info_ed: "学历/本科",
                info_pos: "坐标/深圳",
                info_state: "状态/离职",
                text_p1: "一年半半全职前端开发经验",
                text_p2: "熟悉自动化,模块化开发之道",
                text_p3: "高效的自学能力,能独立分析解决问题",
                text_p4: "强烈的自我驱动力,代码强迫症患者"
            },
            pageC: {
                title: "技能栈",
                text_p1: "熟练使用angularJs1.x及各种类库的指令封装",
                text_p2: "常驻PC/APP/微信三平台前端研发",
                text_p3: "擅长组件/插件开发，能脱离库书写JS代码",
                text_p4: "编码常思其健壮性，扩展性，维护性"
            },
            pageD: {
                title: "成长经历",
                w1_right_h3: "珠海慕容科技有限公司",
                w1_right_p1: "2016年7月~2017年6月",
                w1_right_p2_sp: "企业站页面开发",
                w1_right_p3: '"H5,C3,js,jQuery,React,vue.js,nonde.js等"',
                w1_right_li1: "负责网站后台维护",
                w1_right_li2: "负责pc、移动端静态页开发",
                w1_right_li3: "负责企业站页面特效编写",
                w1_right_li4: "工作之余学习vue,react,ng2,体会函数式编程思想",
                w2_right_h3: "珠海慕容科技有限公司",
                w2_right_p1: "2015年10月~2016年7月",
                w2_right_p2_sp: "网页开发实习生",
                w2_right_p3: '"H5,C3,js,jQuery，Sass等"',
                w2_right_li1: "负责网站后台维护，微博、微信等新媒体营销和推广",
                w2_right_li2: "负责页面的切图和布局工作",
                w2_right_li3: "获得最佳新人奖",
                w2_right_li4: "同期工作之余开始系统性的自学web前端各项技术",
                exp: "大三在校时，开始自学前端"
            },
            pageE: {
                title: "作品集"
            },
            pageF: {
                title: "联系我",
                hope_s1: "灵感",
                hope_s2: "代码",
                hope_s3: "梦想",
                hope_s4: "未来",
                text_p1: "注重效率，偏爱敏捷开发",
                text_p2: "喜欢尝试，期待新鲜事物",
                text_p3: "前端即兴趣，兴趣即未来",
                text_p4: "行路有良友，便是捷径",
                text_p5: "带上我吧，一起看到更大的世界",
                foot_p1: "学习本简历制作（前端）请在PC端按F12"
            }
        },
        c = document.querySelector("#language").querySelectorAll("span");
    c[0].onclick = function() {
        this.className = "ch current fl";
        c[1].className = "en fr";
        d(g)
    };
    c[1].onclick = function() {
        this.className = "en current fr";
        c[0].className = "ch fl";
        d(f)
    };
    console.log("Hi! 朋友，感谢您愿意调试这份粗陋的简历代码。");
    console.log("如果您有什么建议或者想共同进步，欢迎加我QQ一起成长^_^");
    console.log(864411714);
    console.log("来自一只想飞的更高的前端小菜鸟 ~_~")
});