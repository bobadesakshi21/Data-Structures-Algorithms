const str1 = new String('HelloThere')
const str2 = new String('loT')

let j = 0
let start = 0
for (let i = 0; i < str1.length; i++) {
    if (j === str2.length) break
    if (str1[i] === str2[j]) {
        if (j === 0) start = i
        j++
    } else {
        if (str1[i] === str2[0]) i--
        j = 0
    }
}

const index = j < str2.length ? -1 : start
if (index !== -1) {
    console.log('Given substring is the part of the main string at index: ', index)
}