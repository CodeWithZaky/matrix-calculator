const OrdoSettingValidator = (e) => {
  for (let i = 0; i < 2; i++) {
    if (e.target[i].value === "") {
      alert("masukan harus di isi minimal 1");
      return;
    }
    if (e.target[i].value < 1) {
      alert("masukan harus di isi minimal 1");
      return;
    }
    if (isNaN(e.target[i].value)) {
      alert("masukan berupa angka");
      return;
    }
  }
};

export default OrdoSettingValidator;
