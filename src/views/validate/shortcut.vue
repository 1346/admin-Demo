<template>
    <div>
      <xs-shortcut>
        <div slot="shoppingcar-content">

        </div>
      </xs-shortcut>
    </div>
</template>

<script>
    import XsShortcut from "../../components/shortcut/index";
    import XsWhiteTooltip from "../../components/tooltip/XsWhiteTooltip";
    export default {
        name: "shortcut",
      components: {XsWhiteTooltip, XsShortcut}
    }
</script>

<style lang="scss" scoped>

</style>
