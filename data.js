let vehicleData = {};

fetch('fuel_types_by_model_extended.json')
  .then(res => res.json())
  .then(data => {
    vehicleData = data;
    populateBrands(); // initial load
  });

function populateBrands() {
  const category = document.getElementById('category').value;
  const brandSelect = document.getElementById('brand');
  brandSelect.innerHTML = '<option value="">--Select Brand--</option>';

  if (vehicleData[category]) {
    Object.keys(vehicleData[category]).forEach(brand => {
      let opt = document.createElement('option');
      opt.value = brand;
      opt.innerText = brand;
      brandSelect.appendChild(opt);
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
      let opt = document.createElement('option');
      opt.value = model;
      opt.innerText = model;
      modelSelect.appendChild(opt);
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
    const fuels = vehicleData[category][brand][model];
    fuels.forEach(fuel => {
      let opt = document.createElement('option');
      opt.value = fuel;
      opt.innerText = fuel;
      fuelSelect.appendChild(opt);
    });
  }
}