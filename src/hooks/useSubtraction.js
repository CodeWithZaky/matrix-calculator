import useResult from "./useResult";

const useSubtraction = () => {
  const [results, setResults] = useResult();
  const subFuch = (a, b) => {
    // Cek apakah ukuran kedua matriks sama
    if (a.length !== b.length) {
      return alert("pada operasi penambahan dan pengurangan ordo harus sama");
    }
    if (a[0].length !== b[0].length) {
      return alert("pada operasi penambahan dan pengurangan ordo harus sama");
    }
    // Buat matriks kosong untuk menyimpan hasil penjumlahan
    const result = [];
    // Lakukan penjumlahan elemen per elemen dari kedua matriks
    for (let i = 0; i < a.length; i++) {
      const row = [];
      for (let j = 0; j < a[0].length; j++) {
        if (isNaN(a[i][j]) || isNaN(b[i][j])) {
          return alert("Input harus berupa angka");
        }
        row.push(parseInt(a[i][j]) - parseInt(b[i][j]));
      }
      result.push(row);
    }
    setResults(result);
  };
  return { results, subFuch };
};
export default useSubtraction;