<template>
    <li :class="classes" @click.stop="handleClick"><slot></slot></li>
</template>
<script type="text/ecmascript-6">
    const prefixCls = 'cm-menu';

    export default {
        name: 'MenuItem',
        props: {
          index: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                active: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-item-selected`]: this.active,
                        [`${prefixCls}-item-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleClick(){

                if (this.disabled) return;
                this.$parent.ev.$emit('taction', this.index);
            }
        }
    };
</script>
