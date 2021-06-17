const counters = document.querySelectorAll('.counter')
const speed = 200 // animation speed in milliseconds

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

    // increment counter
    const inc = target / speed

    // got to targeted number?
    if (count < target) {
      // ceil to have only integers
      counter.innerText = Math.ceil(count + inc)
      setTimeout(updateCount, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCount()
})
