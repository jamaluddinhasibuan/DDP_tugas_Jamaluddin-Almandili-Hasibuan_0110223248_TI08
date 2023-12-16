function lingkaran(angka) {
    const luas = document.getElementById("luas_lingkaran")
    const keliling = document.getElementById("keliling_lingkaran")

    const hasil_luas = Math.round(Math.PI * Math.pow(angka, 2))
    const hasil_keliling = Math.round(Math.PI * 2 * angka)

    luas.innerHTML = hasil_luas
    keliling.innerHTML = hasil_keliling
}

document.querySelector("input[type=number]").addEventListener("input", function(event) {
    lingkaran(event.target.value)
})

