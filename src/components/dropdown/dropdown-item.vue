<template>
    <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
<script>
    const prefixCls = 'cm-dropdown-item';

    export default {
        props: {
            key: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-divided`]: this.divided
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                const $parent = this.$parent.$parent;
                const hasChildren = this.$parent && this.$parent.$options.name === 'Dropdown';

                if (this.disabled) {
                    this.$nextTick(() => {
                        $parent.visible = true;
                    });
                } else if (hasChildren) {
                    this.$parent.$emit('on-haschild-click');
                } else {
                    if ($parent && $parent.$options.name === 'Dropdown') {
                        $parent.$emit('on-hover-click');
                    }
                }
                $parent.$emit('on-click', this.key);
            }
        }
    };
</script>
