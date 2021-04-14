<template
    ><div class="col-10 border rounded mt-3 mx-auto">
        <div class="p-4">
            <h1 class="mt-3"><strong>Trade or View your Portfolio</strong></h1>
            <p>You may Save & Load your Data</p>
            <p>Click on 'End Day' to start a new Day!</p>
            <hr />
            <h5>
                <strong>Your Funds: ${{ funds }}</strong>
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        funds: function() {
            return new Intl.NumberFormat("en-US", {
                style: "decimal",
            }).format(this.$store.state.funds);
        },
    },
};
</script>

<style></style>
