<template>
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>
<script>
    const prefixCls = 'cm-timeline';

    export default {
        props: {
            pending: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-pending`]: this.pending
                    }
                ];
            }
        }
    };
</script>
