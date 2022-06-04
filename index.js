const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (datas, fn) => {
  const sortedList = fn(datas)
  return sortedList.map((lists, index) => `${index + 1}. ${lists}`)
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = datas => datas.sort();

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = datas => datas.reverse();

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
