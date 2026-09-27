document.getElementById('registrationform').addEventListener('submit', function(event) {
  let isValid = true;

  // Mengambil element input
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const namaInput = document.getElementById('nama');
  const tglLahirInput = document.getElementById('tgl_lahir');
  const alamatInput = document.getElementById('alamat');
  const teleponInput = document.getElementById('telepon');

  // mengambil element tempat pesan erorr
  const errUsername = document.getElementById('err-username');
  const errPassword = document.getElementById('err-password');
  const errNama = document.getElementById('err-nama');
  const errTglLahir = document.getElementById('err-tgl_lahir');
  const errAlamat = document.getElementById('err-alamat');
  const errTelepon = document.getElementById('err-telepon');

  // Helprt function untuk mereset dan menampilkan error
  function showError(element, errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    element.classList.add('border-red-500');
    isValid = false;
  }

  function clearError(element, errorElement) {
    errorElement.textContent= '';
    errorElement.classList.add('hidden')
    element.classList.remove('border-red-500')
  }

  // Reset semua pesan erorr terlebih dahulu
  clearError(usernameInput, errUsername);
  clearError(passwordInput, errPassword);
  clearError(namaInput, errNama);
  clearError(tglLahirInput, errTglLahir);
  clearError(alamatInput, errAlamat);
  clearError(teleponInput, errTelepon);

  const usernameVal = usernameInput.value.trim();
  if (usernameVal === '') {
    showError(usernameInput, errUsername, 'Username tidak boleh kosong!');
  } else if (usernameVal.length < 3) {
    showError(usernameInput, errUsername, 'Username minimal harus 3 karakter!');
  }
  
const passwordVal = passwordInput.value.trim();
  if (passwordVal === '') {
    showError(passwordInput, errPassword, 'Password tidak boleh kosong!');
  } else if (passwordVal.length < 8) {
    showError(passwordInput, errPassword, 'Password minimal harus 8 karakter!');
  }

const namaVal = namaInput.value.trim();
  if (namaVal === '') {
    showError(namaInput, errNama, 'Nama tidak boleh kosong!');
  }

const tglLahirVal = tglLahirInput.value;
  if (tglLahirVal === '') {
    showError(tglLahirInput, errTglLahir, 'Tanggal lahir tidak boleh kosong!');
  } else {
    const inputDate = new Date(tglLahirVal);
    const today = new Date();

today.setHours(0, 0, 0, 0);

if (inputDate > today) {
      showError(tglLahirInput, errTglLahir, 'Tanggal lahir tidak boleh di masa depan!');
    }
  }

const alamatVal = alamatInput.value.trim();
  if (alamatVal === '') {
    showError(alamatInput, errAlamat, 'Alamat tidak boleh kosong!');
  }

const teleponVal = teleponInput.value.trim();
  if (teleponVal === '') {
    showError(teleponInput, errTelepon, 'Nomor telepon tidak boleh kosong!');
  } else if (!teleponVal.startsWith('62')) {
    showError(teleponInput, errTelepon, 'Nomor telepon harus berawalan "62"!');
  }

  if (!isValid) {
    event.preventDefault();
  }
});