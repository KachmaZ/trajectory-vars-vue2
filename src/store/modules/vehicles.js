// User info state
export default {
  actions: {
    // Fetch all vehicles from API
    async fetchAll(ctx) {
      const res = await fetch("https://test.tspb.su/test-task/vehicles");
      const vehicles = await res.json();

      ctx.commit("updateVehicles", vehicles);
    },

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

    editVehicle(ctx, newVehicle) {
      ctx.commit("updateEditVehicle", newVehicle)
    },

    setFilterValue(ctx, newValue) {
      ctx.commit("updateFilterValue", newValue.trim());
    },

    setEditorStatus(ctx, newStatus) {
      ctx.commit("updateEditorStatus", newStatus)
    },

    setCurrentVehicleId(ctx, newId) {
      ctx.commit("updateCurrentVehicleId", newId)
    }
  },

  mutations: {
    updateVehicles(state, vehicles) {
      state.vehicles = vehicles;
    },

    updateId(state, updId) {
      state.currentId += updId;
    },

    updateCurrentVehicleId(state, newId) {
      state.currentVehicleId = newId;
    },

    // updateFetchStatus(state, newStatus) {
    //   state.fetchStatus = newStatus;
    // },

    updateAddVehicle(state, vehicle) {
      state.vehicles.unshift(vehicle);
    },

    updateDelVehicle(state, vehicleId) {
      state.vehicles = state.vehicles.filter((vehicle) => vehicle.id != vehicleId);
    },

    updateEditVehicle(state, newVehicle) {
      let newVehicles = [...state.vehicles]

      let vehicleIndex = newVehicles.findIndex(obj => obj.id === state.currentVehicleId)
      newVehicles[vehicleIndex] = newVehicle
      
      state.vehicles = newVehicles
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
    currentVehicleId: 1, 
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
    },

    getCurrentVehicle(state) {
      return state.vehicles.find(el => el.id === state.currentVehicleId)
    },

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
