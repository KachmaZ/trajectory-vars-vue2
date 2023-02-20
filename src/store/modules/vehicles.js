// User info state
export default {
  actions: {
    // Fetch all vehicles from API
    async fetchAll(ctx) {
      const res = await fetch("https://test.tspb.su/test-task/vehicles");
      const vehicles = await res.json();

      ctx.commit("updateVehicles", vehicles);
    },

    // Fetch one user from API by id
    // async fetchById(ctx, id) {
    //   ctx.commit("updateFetchStatus", true);

    //   let user = ctx.state.users.find((user) => user.id == id);

    //   ctx.commit("updateCurrentUser", user);
    //   ctx.commit("updateFetchStatus", false);
    // },

    addVehicle(ctx, vehicle) {
      vehicle = {
        ...vehicle,
        id: ctx.state.currentId,
      };

      ctx.commit("updateId", 1);
      ctx.commit("updateAddVehicle", vehicle);
    },

    // delUser(ctx, userId) {
    //   ctx.commit("updateDelUser", userId);
    // },

    // setFilterValue(ctx, newValue) {
    //   ctx.commit("updateFilterValue", newValue);
    // },
  },

  mutations: {
    updateVehicles(state, vehicles) {
      state.vehicles = vehicles;
    },

    updateId(state, updId) {
      state.currentId += updId;
    },

    // updateCurrentUser(state, currentUser) {
    //   state.currentUser = currentUser;
    // },

    // updateFetchStatus(state, newStatus) {
    //   state.fetchStatus = newStatus;
    // },

    updateAddVehicle(state, vehicle) {
      state.vehicles.unshift(vehicle);
    },

    // updateDelUser(state, userId) {
    //   state.users = state.users.filter((user) => user.id != userId);
    // },

    // updateFilterValue(state, newValue) {
    //   state.filterValue = newValue;
    // },
  },

  state: {
    vehicles: [], //contains full users list
    currentId: 21,
    // filterValue: "",
    // currentUser: {}, //contains current chosen user for UserPage component
    // fetchStatus: null, //represents current user fetching status to lead Loader component
  },

  getters: {
    getAllVehicles(state) {
      return state.vehicles;
    },

    // getCurrentUser(state) {
    //   return state.currentUser;
    // },

    // getFilterValue(state) {
    //   return state.filterValue.toLowerCase();
    // },

    // isFetching(state) {
    //   return state.fetchStatus;
    // },
  },
};
