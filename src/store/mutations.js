export const addToPortfolio = (state, payload) => {
    const index = state.portfolios.findIndex(
        ({ name }) => name === payload.name
    );
    if (index === -1) {
        state.portfolios.push(payload);
    } else {
        state.portfolios[index].sharesAmount =
            Number(state.portfolios[index].sharesAmount) +
            Number(payload.sharesAmount);
    }
};
export const deletePortfolio = (state, payload) => {
    const index = state.portfolios.findIndex(
        ({ name }) => name === payload.name
    );
    if (payload.sharesAmount > 0) {
        state.portfolios.splice(index, 1, payload);
    } else {
        state.portfolios.splice(index, 1);
    }
};
export const addFunds = (state, payload) => {
    state.funds += payload;
};
export const deleteFunds = (state, payload) => {
    state.funds -= payload;
};
export const endOfDay = (state, payload) => {
    state.currentPrices = payload;
};
export const loadState = (state, payload) => {
    state.funds = payload.funds;
    state.portfolios = payload.portfolios;
    state.currentPrices = payload.currentPrices;
};
