const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#buttonSave');
const buttonCancel = document.querySelector('#buttonCancel');
const productList = document.querySelector('#productList');
const totalOutput = document.querySelector('#total');
let total = 0;

const createNewProduct = (name, price) => {
  const ionCard = document.createElement('ion-card');
  const newProductItemt = document.createElement('ion-card-content');
  newProductItemt.textContent = `${name} :$ ${price}`;
  ionCard.appendChild(newProductItemt);
  productList.appendChild(ionCard);
  clearForm();
}

const clearForm = () => {
  productName.value = '';
  productPrice.value = '';
}

const showAlert = () => {
  const alert = document.createElement('ion-alert');
  alert.header = 'Invalid inputs';
  alert.subHeader = 'Please check your inputs';
  alert.message = 'Incorrect name or price';
  alert.buttons = ['Ok'];

  document.body.appendChild(alert);
  return alert.present();
}

const isEmpty = str => !str.trim().length;

buttonSave.addEventListener('click', () => {
  const name = productName.value;
  const price = productPrice.value;

  if (isEmpty(name) || isEmpty(price) || price <= 0) {
    // window.alert('Data not valid!!!');
    showAlert();
    return;
  }
  createNewProduct(name, price);
  total += +price;
  totalOutput.textContent = total;
});

buttonCancel.addEventListener('click', () => {
  clearForm();
});

