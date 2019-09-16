let input = []
let count = 0

class DC {

  constructor(arr) {
    this.arr = arr
    this.str = ""
  }


  opDC(sx, ex, sy, ey) {

    if(sx === ex && sy === ey) {
      this.str += this.arr[sx][sy]
      return
    }

    const start = this.arr[sx][sy]
    let isSame = true

    for(let i = sx; i < ex; i++) {
      for(let j = sy; j < ey; j++) {
        if (start !== this.arr[i][j]) isSame = false
      }
    }

    if(isSame) {
      this.str += this.arr[sx][sy]
      return
    }


    this.str += "("


    this.opDC(sx,Math.floor((sx + ex)/2), sy, Math.floor((sy + ey)/2))
    this.opDC(sx,Math.floor((sx + ex)/2), Math.floor((sy + ey)/2), ey)
    this.opDC(Math.floor((sx + ex)/2),ex, sy, Math.floor((sy + ey)/2))
    this.opDC(Math.floor((sx + ex)/2) ,ex, Math.floor((sy + ey)/2), ey)

    this.str += ")"
  }

}

class BigSquare {
  constructor(arr) {
    this.arr = arr
    this.max = arr.length
  }

  findMax(arr, max) {
    const tail = arr.splice(1, arr.length)
    if(tail.length === 0) return 0
    return Math.max(a)
  }
}


require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    if(count !== 0 ) input.push(line.trim().split('').map(v => v * 1))
    count++
  })
  .on('close', function() {
    const dc = new DC(input)
    dc.opDC(0,input.length, 0,input.length)

    console.log(dc.str)
  })
