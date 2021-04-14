<template>
    <nav
        class="col-10 rounded border navbar navbar-expand-lg navbar-light bg-light mx-auto mt-4"
    >
        <div class="container-fluid">
            <div class="navbar col-12">
                <router-link class="navbar-brand mx-3" to="/"
                    >Stock Trader</router-link
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mb-2 mb-lg-0 col-12">
                        <li class="nav-item mx-3">
                            <router-link
                                class="nav-link"
                                to="/portfolio"
                                active-class="active"
                                >Portfolio</router-link
                            >
                        </li>
                        <li class="nav-item mx-3">
                            <router-link
                                class="nav-link"
                                to="/stocks"
                                active-class="active"
                                >Stocks</router-link
                            >
                        </li>
                        <li class="nav-item ms-auto mx-3">
                            <div
                                class="nav-link"
                                @click="rollTheDice"
                                style="cursor: pointer;"
                            >
                                End of Day
                            </div>
                        </li>
                        <li class="nav-item dropdown mx-3">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Save & Load
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                        @click="saveData"
                                        >Save Data</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                        @click="loadData"
                                        >Load Data</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item mx-3">
                            <div class="nav-link">
                                <strong>Funds: ${{ funds }}</strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
    computed: {
        funds: function() {
            return new Intl.NumberFormat("en-US", {
                style: "decimal",
            }).format(this.$store.state.funds);
        },
    },
    methods: {
        ...mapActions(["endOfDay", "loadState"]),
        rollTheDice() {
            const randomNum = () => Math.floor(Math.random() * 10);

            const randomLuck = (luckyNumber) =>
                luckyNumber >= 5 ? true : false;

            const randomizer = (key) => {
                return randomLuck(randomNum())
                    ? this.$store.state.currentPrices[key] + randomNum()
                    : this.$store.state.currentPrices[key] - randomNum();
            };
            const valueBMW = randomizer("BMW");
            const valueGoogle = randomizer("Google");
            const valueApple = randomizer("Apple");
            const valueTwitter = randomizer("Twitter");

            const payload = {
                BMW: valueBMW > 0 ? valueBMW : 0,
                Google: valueGoogle > 0 ? valueGoogle : 0,
                Apple: valueApple > 0 ? valueApple : 0,
                Twitter: valueTwitter > 0 ? valueTwitter : 0,
            };

            this.endOfDay(payload);
        },
        saveData() {
            const currentState = {
                ...this.$store.state,
            };
            const data = JSON.stringify(currentState);
            window.localStorage.setItem("state", data);
        },
        loadData() {
            const data = window.localStorage.getItem("state");
            const state = JSON.parse(data);
            this.loadState(state);
        },
    },
};
</script>

<style></style>
