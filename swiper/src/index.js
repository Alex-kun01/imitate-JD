!(function(){

     /**
      * 
      * @param {对象} options 
      * @param {DOM} wrap 
      */
    function Swiper(options,wrap){
        this.wrap = wrap || $('body');
        this.animateType = options.animateType|| 'fade';
        this.imgWidth = options.imgWidth || $(wrap).width();
        this.imgHeight = options.imgHeight || $(wrap).height();
        this.showChangeBtn = options.showChangeBtn != undefined ? options.showChangeBtn : false;
        this.showSpotBtn = options.showSpotBtn != undefined ? options.showSpotBtn : true;
        this.imgList = options.imgList || [];
        this.autoChangeTime = options.autoChangeTime || 1000;
        this.isAuto = options.isAuto != undefined ? options.isAuto : true;
        this.nowIndex = 0;
        this.timer = null;
        //初始化轮播图  包含功能
        this.init = function(){
            this.createDom();
            this.initStyle();
            this.binEvent();
            if(this.isAuto){//如果用户传入参数为轮播就执行
                this.autoChange();
            }
        }
    }

    //  创建轮播结构
    Swiper.prototype.createDom = function(){
        var swiperWrapper = $('<div class="my-swiper"></div>');//轮播图外层
        var imgWrapper = $('<ul class="swiper-img-wrapper"></ul>');//轮播图ul
        var spotDiv = $('<div class="swiper-spot"></div>');//轮播图小圆点容器
        this.imgList.forEach(function(ele,index){
            $('<li><img src=" '+ ele +' "></li>').appendTo(imgWrapper);
            $('<span></span>').appendTo(spotDiv);
        })
        if(this.animateType == 'animate'){
            $('<li><img src=" '+ this.imgList[0] +' "></li>').appendTo(imgWrapper);
        }
        swiperWrapper.append(imgWrapper);
        if(this.showChangeBtn){
            swiperWrapper.append($('<div class="swiper-left-btn swiper-btn"></div>'))
                         .append($('<div class="swiper-right-btn swiper-btn"></div>'))
        }
        if(this.showSpotBtn){
            swiperWrapper.append(spotDiv);
        }
        $(this.wrap).append(swiperWrapper);
    }
    //初始化样式
    Swiper.prototype.initStyle = function(){
        $('.my-swiper *',this.wrap).css({
            padding:0,
            margin:0,
            listStyle:'none'
        });
        $(this.wrap).find('.my-swiper').css({//ul上层容器处
            overflow:'hidden',
            position:'relative',
            height:this.imgHeight
        }).find('ul').css({//ul
            overflow:'hidden'
        }).find('img').css({
            width:'100%',
            height:'100%'
        }).end().end().find('.swiper-btn').css({
            width:'25px',
            height:'35px',
            position:'absolute',
            top:'calc(50% - 17.5px)',
            backgroundColor:'rgba(0,0,0,.5)',
            backgroundSize:'100% 100%',
            backgroundRepeat:'no-repeat',
            cursor:'pointer'
        }).filter('.swiper-left-btn').css({
            backgroundImage:'url(./swiper/images/back.png)',
            borderTopRightRadius:'18px 18px',
            borderBottomRightRadius:'18px 18px',

        }).end().filter('.swiper-right-btn').css({
            backgroundImage:'url(./swiper/images/next.png)',
            borderRadius:'18px 0 0 18px',
            right:0
        });

        $('.my-swiper .swiper-spot',this.wrap).css({
            position:'absolute',
            bottom:0,
            width:'100%',
            textAlign:'center'
        }).find('span').css({
            display:'inline-block',
            width:10,
            height:10,
            borderRadius:'50%',
            backgroundColor:'rgba(255,255,255,.5)',
            marginLeft:'10px',
            cursor:'pointer'
        }).eq(this.nowIndex).css({
            backgroundColor:'#f40'
        })

        if(this.animateType == 'animate'){
            $('.my-swiper ul',this.wrap).css({
                position:'absolute',
                left:0,
                width:this.imgWidth * (this.imgList.length + 1),
                height:this.imgHeight
            }).find('li').css({
                float:'left',
                height:this.imgHeight,
                width:this.imgWidth
            })
        }else{
            $('.my-swiper ul',this.wrap).css({
                width:this.imgWidth,
                height:this.imgHeight,
                position:'relative'
            }).find('li').css({
                position:'absolute',
                height:this.imgHeight,
                width:this.imgWidth,
                display:'none'
            }).eq(this.nowIndex).show()
        }
    }
    //绑定事件
    Swiper.prototype.binEvent = function(){
        var self = this;
        //left点击事件
        $('.swiper-left-btn',this.wrap).on('click',function(){
            clearInterval(self.timer);
            self.change('left');
        });
        //right点击事件
        $('.swiper-right-btn',this.wrap).on('click',function(){
            clearInterval(self.timer);
            self.change('right');
        });
        $('.my-swiper > .swiper-spot > span',this.wrap).each(function(index,ele){
            clearInterval(self.timer);
            $(ele).on('click',function(){
                self.change($(this).index());
            })
               
            })
        
    }
    //轮播图图片切换
    Swiper.prototype.change = function(direction){
        var self = this;
        if(direction == 'left'){

            if(self.nowIndex == 0){
                if(self.animateType == 'animate'){
                    $('.swiper-img-wrapper',self.wrap).css({
                        left:-self.imgWidth * self.imgList.length
                    })
                }
                self.nowIndex = self.imgList.length - 1;
            }else{
                self.nowIndex--;
            }

        }
        else if(direction == 'right'){
            if(self.animateType == 'animate' && self.nowIndex == self.imgList.length){
                    $('.swiper-img-wrapper',self.wrap).css({
                        left:0 
                    })
                self.nowIndex = 1;
            }else if(self.animateType == 'fade' && self.nowIndex == self.imgList.length - 1){
                self.nowIndex = 0;
            }
            else{
                self.nowIndex++;
            }

        }
        else{
            this.nowIndex = direction;
        }

        if(self.animateType == 'animate'){
            $('.swiper-img-wrapper',this.wrap).animate({
                left:-this.nowIndex * this.imgWidth
            },function(){
                clearInterval(self.timer);
                if(self.isAuto){
                    self.autoChange();
                }
            });
        }else{
            $('.my-swiper ul > li',this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function(){
                clearInterval(self.timer);
                if(self.isAuto){
                    self.autoChange();
                }
            });
        }
    
        $('.my-swiper > .swiper-spot > span',this.wrap).each(function(index,ele){
            if(index == self.nowIndex  % self.imgList.length){
                $(this).css({
                    backgroundColor:'#f40'
                })
            }else{
                $(this).css({
                    backgroundColor:'rgba(255,255,255,.5)'
                })
            }
        })
    }
    //自动轮播
    Swiper.prototype.autoChange = function(){
        var self = this;
      this.timer = setInterval(function(){
            $('.swiper-right-btn',self.wrap).trigger('click');
        },this.autoChangeTime)
    }





        $.fn.extend({
            swiper:function(options){
                var obj = new Swiper(options,this);
                obj.init();
                return this;
            }
        })

}())