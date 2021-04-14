<template>
    <div class="container col-12">
        <div
            class="row row-cols-2 mt-3 justify-content-center"
            v-if="this.$store.state.portfolios[0]"
        >
            <div
                class="card px-0 m-3"
                style="width: 46%;"
                :key="portfolio"
                v-for="portfolio in this.$store.state.portfolios"
            >
                <div
                    class="card-header text-success"
                    style="backgroundColor: #CDF7CD;"
                >
                    <strong>{{ portfolio.name }}</strong>
                    <span class="ms-2" style="fontSize: .75rem;"
                        >(Price:
                        {{
                            this.$store.state.currentPrices[portfolio.name]
                        }})</span
                    >
                    <span class="ms-2" style="fontSize: .75rem;"
                        >(Purchase Price: {{ portfolio.purchasePrice }})</span
                    >
                    <span class="ms-2" style="fontSize: .75rem;"
                        >(Shares : {{ portfolio.sharesAmount }})</span
                    >
                </div>
                <div class="card-body d-flex justify-content-between">
                    <input
                        class="px-2"
                        type="number"
                        min="0"
                        :max="portfolio.sharesAmount"
                        placeholder="Quantity"
                        v-model="quantity"
                    />
                    <button
                        class="btn btn-success"
                        style="backgroundColor: #CDF7CD; border: none;"
                        @click="sellPortfolio(portfolio, quantity)"
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
        <div class="row row-cols-2 mt-3 justify-content-center" v-else>
            <p class="text-center display-5 my-5">No Portfolio yet!</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["deletePortfolio", "addFunds"]),
        sellPortfolio(portfolio, quantity) {
            if (quantity > 0 && quantity <= portfolio.sharesAmount) {
                const newPortfolio = {
                    name: portfolio.name,
                    purchasePrice: portfolio.purchasePrice,
                    sharesAmount: portfolio.sharesAmount - quantity,
                };
                this.deletePortfolio(newPortfolio);
                const sellRevenue =
                    this.$store.state.currentPrices[portfolio.name] * quantity;
                this.addFunds(sellRevenue);
            } else return;
        },
    },
};
</script>

<style></style>
