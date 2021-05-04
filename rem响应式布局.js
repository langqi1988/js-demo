/*
    此demo根字体大小为100px
  */
    ~ function () {
      //定义函数 适配当前屏幕
      let computed = function () {
        //设计稿宽度 以屏幕是640px的手机为基准 1
        let desW = 640; 
        //获取当前设备屏幕的实际宽度
        let devW = document.documentElement.clientWidth; 
        if (devW >= 640) {
          //屏幕宽度大于640px 按640px计算
          document.documentElement.style.fontSize = '100px';
          return;
        }
        //若小于640px 计算当前屏幕宽度与设计稿宽度的比例 然后等比例改变 html中的fontsize
        document.documentElement.style.fontSize = devW / desW * 100 + 'px';
      };
      //定义函数
      computed();
      //添加监听 若屏幕大小改变resize 那么重新计算屏幕大小改变fontsize
      window.addEventListener('resize', computed, false);
    }();