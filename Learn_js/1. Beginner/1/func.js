// fungsi merupakan sebuah bagian code yang dapat  melakukan sebuah tindakan dan dapat dipanggil kapan saja tanpa harus mengulang code
// contoh

function kali(a, b) {
    return a * b
}

console.log(kali(12, 2)) //hasilnya akan 24


//combinasi decicion dan function
function get_kalkulator(a, b, op) {
    if (op == '*') {
        return a * b

    } else if (op == '**') {
        return a ** b

    } else if (op == '/') {
        return a / b
        
    } else if (op == '+') {
        return a + b
        
    } else if (op == '-') {
        return a - b
    } else {
        console.log("opsi tidak tersedia")
    }
}

console.log(get_kalkulator(9, 2, '*'))