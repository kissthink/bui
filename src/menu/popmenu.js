/**
 * @fileOverview 下拉菜单，一般用于下拉显示菜单
 * @author dxq613@gmail.com
 * @ignore
 */

define('bui/menu/popmenu',function (require) {

  var BUI = require('bui/common'),
    UIBase = BUI.Component.UIBase,
    Menu = require('bui/menu/menu');

   /**
   * @class BUI.Menu.PopMenu
   * 上下文菜单，一般用于弹出菜单
   * xclass:'drop-menu'
   * @extends BUI.Menu.Menu
   * @mixins BUI.Component.UIBase.AutoShow
   */
  var popMenu =  Menu.extend([UIBase.AutoShow],{

  },{
    ATTRS:{
       /** 点击菜单项，如果菜单不是多选，菜单隐藏
       * @type {Boolean} 
       * @default true
       */
      clickHide : {
        value : true
      },
      align : {
        value : {
           points: ['bl','tl'], // ['tr', 'tl'] 表示 overlay 的 tl 与参考节点的 tr 对齐
           offset: [0, 0]      // 有效值为 [n, m]
        }
      },
      /**
       * 点击菜单外面，菜单隐藏
       * 点击菜单项，如果菜单不是多选，菜单隐藏
       * @type {Boolean} 
       * @default true
       */
      autoHide : {
        value : true
      },
      visible : {
        value : false
      }
    }
  },{
    xclass:'pop-menu'
  });
  
  return popMenu;

});