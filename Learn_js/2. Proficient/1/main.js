function auth() {
    let secret = '123'
    function inner() {
        console.log(secret)

    }
    return inner()
}

const func = auth()
func()