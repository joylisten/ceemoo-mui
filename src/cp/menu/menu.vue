<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script type="text/ecmascript-6">
  import { oneOf } from '../../utils/assist';
  import Vue from 'vue'
  const prefixCls='cm-menu';
  var ev = new Vue();
  export default {
    props:{
      mode:{
        validator (value)
        {
          return oneOf(value,['horizontal','vertical']);
        }
        ,
        default:'vertical'
      },
      theme:{
        validator(value)
        {
          return oneOf(value,['light','dark','primary']);
        }
        ,
        default:'light'
      },
      activeIndex:{
        type:[String,Number]
      }
      ,
      openKeys:{
        type:Array,
        default
          ()
        {
          return [];
        }
      }
      ,
      accordion:{
        type:Boolean,
        default:false
      }
      ,
      width:{
        type:String,
        default:'240px'
      }
    },
    data () {
      return {
        ev:ev
      }
    },
    computed:{
      classes()
      {
        let theme=this.theme;
        if(this.mode==='vertical'&&this.theme==='primary') theme='light';

        return [
          `${prefixCls}`,
          `${prefixCls}-${theme}`,
          {
            [`${prefixCls}-${this.mode}`]:this.mode
          }
        ]
          ;
      }
      ,
      styles()
      {
        let style={};

        if(this.mode==='vertical') style.width=this.width;

        return style;
      }
    },
    methods:{
      updateActiveKey()
      {
        this.$children.forEach((item,index) =>
        {
          if(!this.activeIndex&&index===0)
          {
            this.activeIndex= -1;
          }
          if(item.$options.name==='Submenu')
          {
            item.active=false;
            item.$children.forEach(subitem =>
            {
              if(subitem.$options.name==='MenuGroup')
              {
                subitem.$children.forEach(groupItem =>
                {
                  if(groupItem.index===this.activeIndex)
                  {
                    groupItem.active=true;
                    groupItem.$parent.$parent.active=true;
                  }else
                  {
                    groupItem.active=false;
                  }
                });
              }else if(subitem.$options.name==='MenuItem')
              {

                if(subitem.index===this.activeIndex)
                {
                  subitem.active=true;
                  subitem.$parent.active=true;
                }else
                {
                  subitem.active=false;
                }
              }
            });
          }else if(item.$options.name==='MenuGroup')
          {
            item.$children.forEach(groupItem =>
            {
              groupItem.active=groupItem.index===this.activeIndex;
            });
          }else if(item.$options.name==='MenuItem')
          {
            item.active=item.index===this.activeIndex;
          }
        });
      }
      ,
      updateOpenKeys(key)
      {
        const index=this.openKeys.indexOf(key);
        if(index> -1)
        {
          this.openKeys.splice(index,1);
        }else
        {
          this.openKeys.push(key);
        }
      }
      ,
      updateOpened()
      {
        this.$children.forEach(item =>
        {
          if(item.$options.name==='Submenu')
          {
            if(this.openKeys.indexOf(item.index)> -1) item.opened=true;
          }
        });
      },
      addTodo(index)
      {
        this.activeIndex=index;

      }
    },
    events:{
      'on-menu-item-select'(index)
      {
        this.activeIndex=index;
        this.$emit('on-select',index);
      }
    }
    ,
    watch:{
      openKeys()
      {
        this.$emit('on-open-change',this.openKeys);
      }
      ,
      activeIndex()
      {
        this.updateActiveKey();
      }
    },
    mounted()
    {
      ev.$on('taction', this.addTodo)
      this.updateActiveKey();
      this.updateOpened();

    }
  }
  ;
</script>
