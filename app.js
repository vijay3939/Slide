(function () {

    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text

    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius perspiciatis nobis commodi ea, ut sit veniam cumque, repellendus aspernatur labore unde totam esse obcaecati soluta itaque magni excepturi laudantium id dolore accusantium, dolorum beatae et? Dolor nisi eveniet sit!')
    createCustomer(1, 'Sandy', 'Eveniet eius perspiciatis nobis commodi ea, ut sit veniam cumque, repellendus aspernatur labore unde totam esse obcaecati soluta itaque magni excepturi laudantium id dolore accusantium, dolorum beatae et? Dolor nisi eveniet sit!')
    createCustomer(2, 'Amy', ' adipisicing elit. Eveniet eius perspiciatis nobis commodi ea, ut sit veniam cumque, repellendus aspernatur labore unde totam esse obcaecati soluta itaque magni excepturi laudantium id dolore accusantium, dolorum beatae et? Dolor nisi eveniet sit!')
    createCustomer(3, 'Tyrell', 'dolor sit amet consectetur adipisicing elit. Eveniet eius perspiciatis nobis commodi ea, ut sit veniam cumque, repellendus aspernatur labore unde totam esse obcaecati soluta itaque magni excepturi laudantium id dolore accusantium, dolorum beatae et? Dolor nisi eveniet sit!')
    createCustomer(4, 'Wanda', 'ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius perspiciatis nobis commodi ea, ut sit veniam cumque, repellendus aspernatur labore unde totam esse obcaecati soluta itaque magni excepturi laudantium id dolore accusantium, dolorum beatae et? Dolor nisi eveniet sit!')


    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }

                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }


        })
    })

})()