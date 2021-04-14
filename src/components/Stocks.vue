<template>
    <div class="container col-12">
        <div class="row row-cols-2 mt-3 justify-content-center">
            <div
                class="card px-0 m-3"
                style="width: 46%;"
                :key="stock"
                v-for="stock in this.$store.state.stocks"
            >
                <div
                    class="card-header text-success"
                    style="backgroundColor: #CDF7CD;"
                >
                    <strong>{{ stock.name }}</strong>
                    <span class="ms-2" style="fontSize: .75rem;"
                        >(Price:
                        {{ this.$store.state.currentPrices[stock.name] }})</span
                    >
                </div>
                <div class="card-body d-flex justify-content-between">
                    <input
                        class="px-2"
                        type="number"
                        min="0"
                        placeholder="Quantity"
                        v-model="quantity"
                    />
                    <button
                        class="btn btn-success"
                        style="backgroundColor: #CDF7CD; border: none;"
                        @click="submitPurchase(stock, quantity)"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["addToPortfolio", "deleteFunds"]),
        submitPurchase(stockItem, stockQuantity) {
            if (typeof Number(stockQuantity) === "number") {
                const totalPurchasePrice =
                    this.$store.state.currentPrices[stockItem.name] *
                    stockQuantity;
                if (this.$store.state.funds >= totalPurchasePrice) {
                    const portfolioItem = {
                        name: stockItem.name,
                        purchasePrice: this.$store.state.currentPrices[
                            stockItem.name
                        ],
                        sharesAmount: stockQuantity,
                    };
                    this.addToPortfolio(portfolioItem);
                    this.deleteFunds(totalPurchasePrice);
                } else return;
            } else return;
        },
    },
};
</script>

<style></style>
