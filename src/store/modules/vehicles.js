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

    delVehicle(ctx, vehicleId) {
      ctx.commit("updateDelVehicle", vehicleId);
    },

    setFilterValue(ctx, newValue) {
      ctx.commit("updateFilterValue", newValue.trim());
    },

    setEditorStatus(ctx, newStatus) {
      console.log("new")
      ctx.commit("updateEditorStatus", newStatus)
    }
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

    updateDelVehicle(state, vehicleId) {
      state.vehicles = state.vehicles.filter((vehicle) => vehicle.id != vehicleId);
    },

    updateFilterValue(state, newValue) {
      state.filterValue = newValue;
    },

    updateEditorStatus(state, newStatus) {
      state.editorStatus = newStatus;
    }
  },

  state: {
    vehicles: [], //contains full users list
    currentId: 21,
    filterValue: "name",
    // currentUser: {}, //contains current chosen user for UserPage component
    editorStatus: false,
  },

  getters: {
    getAllVehicles(state) {
      return state.vehicles;
    },

    getSortedVehicles(state) {
      function compareFn(a, b) {
        if (a[state.filterValue] > b[state.filterValue]) {
          return -1;
        }
        if (a[state.filterValue] < b[state.filterValue]) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
      return state.vehicles.sort(compareFn)
      // return state.vehicles.sort((a, b) =>
      //   (a[state.filterValue] > b[state.filterValue]) ? 1 : ((a[state.filterValue] > b[state.filterValue]) ? -1 : 0))
    },

    // getCurrentUser(state) {
    //   return state.currentUser;
    // },

    getFilterValue(state) {
      return state.filterValue.toLowerCase();
    },

    getEditorStatus(state) {
      return state.editorStatus
    }

    // isFetching(state) {
    //   return state.fetchStatus;
    // },
  },
};
