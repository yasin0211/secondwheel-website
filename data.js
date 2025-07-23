let vehicleData = {};

fetch('fuel_types_by_model_extended.json')
  .then(response => response.json())
  .then(data => {
    vehicleData = data;
    populateBrands(); // पहिल्यांदा ब्रँड populate करा
  });

function populateBrands() {
  const category = document.getElementById('category').value;
  const brandSelect = document.getElementById('brand');
  brandSelect.innerHTML = '<option value="">--Select Brand--</option>';

  if (vehicleData[category]) {
    Object.keys(vehicleData[category]).forEach(brand => {
      let option = document.createElement('option');
      option.value = brand;
      option.text = brand;
      brandSelect.add(option);
    });
  }
}

function populateModels() {
  const category = document.getElementById('category').value;
  const brand = document.getElementById('brand').value;
  const modelSelect = document.getElementById('model');
  modelSelect.innerHTML = '<option value="">--Select Model--</option>';

  if (vehicleData[category] && vehicleData[category][brand]) {
    Object.keys(vehicleData[category][brand]).forEach(model => {
      let option = document.createElement('option');
      option.value = model;
      option.text = model;
      modelSelect.add(option);
    });
  }
}

function populateFuel() {
  const category = document.getElementById('category').value;
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const fuelSelect = document.getElementById('fuel');
  fuelSelect.innerHTML = '<option value="">--Select Fuel--</option>';

  if (vehicleData[category] && vehicleData[category][brand] && vehicleData[category][brand][model]) {
    vehicleData[category][brand][model].forEach(fuel => {
      let option = document.createElement('option');
      option.value = fuel;
      option.text = fuel;
      fuelSelect.add(option);
    });
  }
}