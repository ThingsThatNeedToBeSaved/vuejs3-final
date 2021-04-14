export const addToPortfolio = ({ commit }, payload) => {
    commit("addToPortfolio", payload);
};
export const deletePortfolio = ({ commit }, payload) => {
    commit("deletePortfolio", payload);
};
export const addFunds = ({ commit }, payload) => {
    commit("addFunds", payload);
};
export const deleteFunds = ({ commit }, payload) => {
    commit("deleteFunds", payload);
};
export const endOfDay = ({ commit }, payload) => {
    commit("endOfDay", payload);
};
export const loadState = ({ commit }, payload) => {
    commit("loadState", payload);
};
