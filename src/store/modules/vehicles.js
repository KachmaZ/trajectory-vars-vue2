// User info state
export default {
  actions: {
    // Fetch all vehicles from API
    async fetchAll(ctx) {
      const res = await fetch("https://test.tspb.su/test-task/vehicles");
      const vehicles = await res.json();

      ctx.commit("updateVehicles", vehicles);
    },

    // CRUD actions for vehicles
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

    // Setting value for sorting
    setFilterValue(ctx, newValue) {
      ctx.commit("updateFilterValue", newValue.trim());
    },

    // Setting Modal editor params
    setEditorStatus(ctx, newStatus) {
      ctx.commit("updateEditorStatus", newStatus)
    },

    setCurrentVehicleId(ctx, newId) {
      ctx.commit("updateCurrentVehicleId", newId)
    }
  },

  mutations: {
    // Updating store on loading data
    updateVehicles(state, vehicles) {
      state.vehicles = vehicles;
    },

    // Stored value for creating new vehicle instanses
    updateId(state, updId) {
      state.currentId += updId;
    },

    // CRUD operations
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

    // Setting sort value
    updateFilterValue(state, newValue) {
      state.filterValue = newValue;
    },

    // Editor params
    updateCurrentVehicleId(state, newId) {
      state.currentVehicleId = newId;
    },

    updateEditorStatus(state, newStatus) {
      state.editorStatus = newStatus;
    }
  },

  state: {
    vehicles: [], // contains full vehicles list
    currentId: 21, // id counter for new instanses
    filterValue: "id", // sorting value
    currentVehicleId: 1, // id of vehicle instance which displays in ModalEditor
    editorStatus: false, // ModalEditor show status
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

    getCurrentVehicle(state) { // For ModalEditor
      return state.vehicles.find(el => el.id === state.currentVehicleId) 
    },

    getFilterValue(state) { // For sorting
      return state.filterValue.toLowerCase();
    },

    getEditorStatus(state) { // For ModalEditor show/hide
      return state.editorStatus
    }
  },
};
